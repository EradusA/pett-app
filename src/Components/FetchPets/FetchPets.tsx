import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Pets.styles.css';
import CtaBanner from '../CtaBanner/CtaBanner';
import { usePets } from '../PetContext/PetContext';
import { Pet } from '../Types/Types';

const Pets: React.FC = () => {
  const { pets: fetchedPets } = usePets();
  const navigate = useNavigate();

  const [filteredPets, setFilteredPets] = useState(fetchedPets.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setFilteredPets(showAll ? fetchedPets : fetchedPets.slice(0, 3));
  }, [fetchedPets, showAll]);

  const handleSearch = (query: string, searchBy: keyof Pet) => {
    if (query === '') {
      setFilteredPets(showAll ? fetchedPets : fetchedPets.slice(0, 3));
    } else {
      const filtered = fetchedPets.filter(pet => {
        const value = pet[searchBy];
        return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredPets(filtered);
    }
  };

  const toggleShowAll = () => setShowAll(current => !current);

  const viewPetDetails = (petId: number) => {
    navigate(`/pets/${petId}`);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="pets-container">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-entry">
            <img src={pet.photoUrl} alt={pet.name} />
            <h3>{pet.name}</h3>
            <button onClick={(_e) => {viewPetDetails(pet.id)}}>View</button>
          </div>
        ))}
        <CtaBanner handleSeeAll={toggleShowAll} isShowingAll={showAll} />
      </div>
    </div>
  );
};

export default Pets;
