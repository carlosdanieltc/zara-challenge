import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { fetchPhones } from '../../services/phoneService';

const PhoneList = () => {
  const [phones, setPhones] = useState([]); // Estado para almacenar los teléfonos filtrados
  const [allPhones, setAllPhones] = useState([]); // Estado para almacenar todos los teléfonos sin filtrar
  const [searchQuery, setSearchQuery] = useState(''); // Estado para manejar el término de búsqueda

  useEffect(() => {
    const getPhones = async () => {
      const fetchedPhones = await fetchPhones();
      setAllPhones(fetchedPhones);
      setPhones(fetchedPhones); 
    };

    getPhones(); 
  }, []); 

  // Implementación del debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery === '') {
        setPhones(allPhones); // Si no hay búsqueda, mostrar todos los teléfonos
      } else {
        const filteredPhones = allPhones.filter(phone =>
          phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          phone.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPhones(filteredPhones); // Mostrar los teléfonos filtrados
      }
    }, 300); 

    return () => clearTimeout(delayDebounceFn); // Limpiar el timeout si se actualiza el searchQuery
  }, [searchQuery, allPhones]); // Dependencia de searchQuery y allPhones

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} totalPhones={phones.length} />
      <div className="phone-grid">
        {phones.map(phone => (
          <Link to={`/phone/${phone.id}`} key={phone.id}>
            <PhoneCard phone={phone} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneList;