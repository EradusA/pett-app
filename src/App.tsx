import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PetDetails from './Components/PetDetails/PetDetails';
import { PetProvider } from './Components/PetContext/PetContext';

function App() {
  return (
    <BrowserRouter>
    <PetProvider>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/pets/:petId" element={<PetDetails />} />
        </Routes>
      </PetProvider>
    </BrowserRouter>
  );
}

export default App;