import './Categories.styles.css';
import Heart from '../Icons/Heart';
import Pin from '../Icons/Pin';
import Clock from '../Icons/Clock';
import Confettie from '../Icons/Confettie';
import Home from '../Icons/Home';

const CustomButtons = () => {

  const handleLoveClick = () => {
    console.log('Love button is pressed');
  }

  const handlePinClick = () => {
    console.log('Pin button is pressed');
  }

  const handleTimeClick = () => {
    console.log('Time button is pressed');
  }

  const handleCelebrateClick = () => {
    console.log('Celebrate button is pressed');
  }

  const handleHomeClick = () => {
    console.log('Home button is pressed');
  }

  return (
    <>
    <h2>Categories</h2>
<section className="buttons-container">
  <div className="button-with-label">
    <button className="custom-button" onClick={handleLoveClick}>
      <Heart />
    </button>
    <h4 className="button-label">All pets</h4>
  </div>

  <div className="button-with-label">
    <button className="custom-button" onClick={handlePinClick}>
      <Pin />
    </button>
    <h4 className="button-label">Location specific</h4>
  </div>

  <div className="button-with-label">
    <button className="custom-button" onClick={handleTimeClick}>
      <Clock/>
    </button>
    <h4 className="button-label">Age specific</h4>
  </div>

  <div className="button-with-label">
    <button className="custom-button" onClick={handleCelebrateClick}>
      <Confettie />
    </button>
    <h4 className="button-label">Available now</h4>
  </div>

  <div className="button-with-label">
    <button className="custom-button" onClick={handleHomeClick}>
      <Home />
    </button>
    <h4 className="button-label">For small or big homes</h4>
  </div>
</section>
</>
  );
}

export default CustomButtons;
