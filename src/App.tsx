import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './Components/PageLayout/PageLayout';
import HomePage from './Pages/HomePage';
import PetDetails from './Components/PetDetails/PetDetails';
import { PetProvider } from './Components/PetContext/PetContext';

function App() {
  return (
    <BrowserRouter>
    <PetProvider>
      <PageLayout>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/pets/:petId" element={<PetDetails />} />
        </Routes>
      </PageLayout>
      </PetProvider>
    </BrowserRouter>
  );
}

export default App;