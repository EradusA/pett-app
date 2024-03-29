import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Pets.styles.css';
import CtaBanner from '../CtaBanner/CtaBanner';
import PetModal from '../PetModal/PetModal';
import { Pet } from '../Types/Types';


interface PetsProps {
  pets: Pet[];
}

const Pets: React.FC<PetsProps> = ({ pets }) => {
  const [fetchedPets, setFetchedPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  useEffect(() => {
    fetch('https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets')
      .then(response => response.json())
      .then((data: Pet[]) => {
        setFetchedPets(data);
        setFilteredPets(showAll ? data : data.slice(0, 3));
      });
  }, [showAll]);

  const handleSearch = (query: string, searchBy: keyof Pet) => {
    const sourcePets = fetchedPets;
    if (query === '') {
      setFilteredPets(showAll ? sourcePets : sourcePets.slice(0, 3));
    } else {
      const filtered = sourcePets.filter(pet => {
        const value = pet[searchBy];
        return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredPets(filtered);
    }
  };

  const toggleShowAll = () => setShowAll(current => !current);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="pets-container">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-entry">
            <img src={pet.photoUrl} alt={pet.name} />
            <h3>{pet.name}</h3>
            <button onClick={() => { setSelectedPet(pet); setIsModalOpen(true); }}>View</button>
          </div>
        ))}
        <CtaBanner handleSeeAll={toggleShowAll} isShowingAll={showAll} />
      </div>
      <PetModal isOpen={isModalOpen} onClose={closeModal} pet={selectedPet} />
    </div>
  );
};

export default Pets;
