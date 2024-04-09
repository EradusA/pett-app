import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Pet } from '../Types/Types';

// Define the shape of the context
interface PetContextType {
  pets: Pet[];
  fetchPets: () => void;
}

const PetContext = createContext<PetContextType>({ pets: [], fetchPets: () => {} });

export const usePets = () => useContext(PetContext);

export const PetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  const fetchPets = () => {
    fetch('https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets')
      .then(response => response.json())
      .then((data: Pet[]) => {
        setPets(data);
      });
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <PetContext.Provider value={{ pets, fetchPets }}>
      {children}
    </PetContext.Provider>
  );
};