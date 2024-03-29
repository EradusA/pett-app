import './PetModal.styles.css';
import Pet from '../Types/Types';

interface PetModalProps {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet | null | undefined;
}

  const PetModal: React.FC<PetModalProps> = ({ isOpen, onClose, pet }) => {
    const availabilityText = (available?: boolean): string => {
      return available ? 'Available' : 'Not Available';
    };

  return (
    <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <h2>{pet?.name}</h2>
        <img src={pet?.photoUrl} alt={pet?.name} />
        <p><strong>Species:</strong> {pet?.species}</p>
        <p><strong>Available for adoption:</strong> {availabilityText(pet?.available)}</p>
        <p><strong>Birth Year:</strong> {pet?.birthYear}</p>
        <p><strong>Date Added:</strong> {pet?.dateAdded}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PetModal;
