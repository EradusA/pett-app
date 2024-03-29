import './App.css';
import PageLayout from '../src/Components/PageLayout/PageLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdaptiveFilter from './Components/AdaptiveFilter/AdaptiveFilter';
import Categories from '../src/Components/Categories/Categories';

function App() {
  return (
    <PageLayout>
      <AdaptiveFilter />
      <Categories />
    </PageLayout>
  );
}

export default App;