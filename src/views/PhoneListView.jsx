import React from 'react';
import PhoneList from '../components/PhoneList/PhoneList';
import SearchBar from '../components/SearchBar/SearchBar';

const PhoneListView = () => {
  return (
    <div>
      <SearchBar /> {/* Barra de búsqueda */}
      <PhoneList /> {/* Lista de teléfonos */}
    </div>
  );
}

export default PhoneListView;