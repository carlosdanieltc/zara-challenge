import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { fetchPhones } from '../../services/phoneService';

const PhoneList = () => {
  const [phones, setPhones] = useState([]); 
  const [allPhones, setAllPhones] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    const getPhones = async () => {
      const fetchedPhones = await fetchPhones();
      setAllPhones(fetchedPhones);
      setPhones(fetchedPhones); 
    };

    getPhones(); 
  }, []); 

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery === '') {
        setPhones(allPhones); 
      } else {
        const filteredPhones = allPhones.filter(phone =>
          phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          phone.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPhones(filteredPhones); 
      }
    }, 300); 

    return () => clearTimeout(delayDebounceFn); // Limpiar el timeout si se actualiza el searchQuery
  }, [searchQuery, allPhones]); 

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} totalPhones={phones.length} />
      <div className="phone-grid">
        {phones.map(phone => (
          <Link to={`/phone/${phone.id}`} key={phone.id} className='linkTo'>
            <PhoneCard phone={phone} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneList;