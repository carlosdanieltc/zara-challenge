import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  // Maneja el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    setQuery(event.target.value); // Actualiza el estado del input
    setSearchQuery(event.target.value); // Pasa el valor al componente padre (PhoneList)
  };

  return (
    <div className='search-bar-container'>
      <div className="search-bar">
        <input 
          type="text" 
          className="search-input"
          value={query} 
          onChange={handleSearchChange} 
          placeholder="Search for a smartphone..." 
        />
      </div>
    </div>
    
  );
};

export default SearchBar;