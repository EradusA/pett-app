import { useState } from 'react';
import Pets from '../FetchPets/FetchPets';

const AdaptiveFilter = () => {
  const [pets, setPets] = useState([]);

  return (
    <div>
      <Pets pets={pets} />
    </div>
  );
};

export default AdaptiveFilter;