import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css'
import SearchBar from '../SearchBar/SearchBar';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const PhoneList = () => {
  const [phones, setPhones] = useState([]); // Estado para almacenar los teléfonos
  const [searchQuery, setSearchQuery] = useState(''); // Estado para manejar el término de búsqueda

   const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchPhones = async () => {
      try {

        const response = await fetch(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products?search=${debouncedSearchQuery}`, {
          method: 'GET',
          headers: {
            "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
          }
        });

        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();

        const uniquePhones = Array.from(new Map(data.map(phone => [phone.id, phone])).values()); // Filtrado de Móviles duplciados
        const limitedPhones = uniquePhones.slice(0, 20); // Aquí limitamos a 20 resultados

        setPhones(limitedPhones);
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    // Realizar la búsqueda solo si el término de búsqueda tiene al menos un carácter
    if (debouncedSearchQuery) {
      fetchPhones();
    } else {
      // Si el campo de búsqueda está vacío, restablecer los resultados
      setPhones([]);
    }

  }, [debouncedSearchQuery]);

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} totalPhones={phones.length}/>
      <div className="phone-grid">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default PhoneList;