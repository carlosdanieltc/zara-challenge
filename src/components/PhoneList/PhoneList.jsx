import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const PhoneList = () => {
  const [phones, setPhones] = useState([]); // Estado para almacenar los teléfonos filtrados
  const [allPhones, setAllPhones] = useState([]); // Estado para almacenar todos los teléfonos sin filtrar
  const [searchQuery, setSearchQuery] = useState(''); // Estado para manejar el término de búsqueda

  useEffect(() => {
    //todo esto en services
    const fetchPhones = async () => {
      try {
        const response = await fetch(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products`, {
          method: 'GET',
          headers: {
            "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
          }
        });

        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();

        const uniquePhones = Array.from(new Map(data.map(phone => [phone.id, phone])).values()); // Filtrado de Móviles duplicados
        const limitedPhones = uniquePhones.slice(0, 20); // Limitamos a 20 resultados

        setAllPhones(limitedPhones); // Guardamos los teléfonos completos
        setPhones(limitedPhones); // Establecemos inicialmente los teléfonos limitados
        console.log(limitedPhones)
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    fetchPhones();
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
    }, 300); // 300 ms de retraso

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