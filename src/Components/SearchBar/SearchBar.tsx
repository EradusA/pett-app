import { useState } from 'react';
import './SearchBar.styles.css';
import { SearchBarProps, SearchByOptions } from '../Types/Types';
import Search from '../Icons/Search';

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [searchBy, setSearchBy] = useState<SearchByOptions>(SearchByOptions.Name);


  const handleInputChange = (event) => {
    setQuery(event.target.value);
    handleSearch(event.target.value, searchBy);
  };

  const handleSelectChange = (event) => {
    setSearchBy(event.target.value);
  };

  return (
    <div className="search-container">
      <div className='pets'>
        <h2>Pets</h2>
      </div>
      <div className="input-filter-container">
      <div className="input-container">
    <input 
      type="text" 
      placeholder="Search pets" 
      value={query} 
      onChange={handleInputChange} 
    />
  <Search />
</div>
        <div className="filter-container">
          <select value={searchBy} onChange={handleSelectChange}>
            <option value="name">Name</option>
            <option value="species">Species</option>
            <option value="available">Available</option>
            <option value="birthYear">Birth Year</option>
          </select>
        </div>
      </div>
      <h2>Results</h2>
    </div>
  );
};

export default SearchBar;