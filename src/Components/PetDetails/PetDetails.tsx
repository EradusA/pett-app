import React from 'react';
import { useParams } from 'react-router-dom';
import { usePets } from '../PetContext/PetContext';

const PetDetails = () => {
  const { petId } = useParams<{ petId: string }>();
  const { pets } = usePets();
  
  const pet = pets.find(p => `${p.id}` === petId);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <h2>Pet Details for Pet ID: {pet.id}</h2>
      <img src={pet.photoUrl} alt={pet.name} />
    </div>
  );
};

export default PetDetails;