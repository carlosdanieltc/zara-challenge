import React, { useState } from 'react';
import styles from './SearchBar.module.css'

const SearchBar = ({ setSearchQuery, totalPhones }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value); 
    setSearchQuery(event.target.value); 
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.SearchBar}>
        <input 
          type="text" 
          className={styles.searchInput}
          value={query} 
          onChange={handleSearchChange} 
          placeholder="Search for a smartphone..." 
        />
      </div>
      <p className={styles.totalPhones}>{totalPhones} RESULTS</p>
    </div>
    
  );
};

export default SearchBar;