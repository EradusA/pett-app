import './CtaBanner.styles.css';
import treats from '../../assets/images/treats.jpeg';

interface CtaBannerProps {
  handleSeeAll: () => void;
  isShowingAll: boolean;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ handleSeeAll, isShowingAll }) => {
  return (
    <div className="cta-banner">
      <div className="image-column">
        <img src={treats} alt="CtaBanner" className="banner-image" />
      </div>
      <div className="blue-square">
          <h2>Pets directory</h2>
          <p>See all pets available for adoption</p>
          <p>promote them and get them a home</p>
          <button onClick={handleSeeAll} className='special-button'>
            {isShowingAll ? 'Show only 3' : 'See all'}
          </button>
      </div>
    </div>
  );
};
  
export default CtaBanner;