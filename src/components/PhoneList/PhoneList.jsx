import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css'
import SearchBar from '../SearchBar/SearchBar';

const PhoneList = () => {
  const [phones, setPhones] = useState([]); // Estado para almacenar los teléfonos
  const [searchQuery, setSearchQuery] = useState(''); // Estado para manejar el término de búsqueda

  useEffect(() => {
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

        // 📌 Filtrado de Móviles duplciados
        const uniquePhones = Array.from(new Map(data.map(phone => [phone.id, phone])).values());
        setPhones(uniquePhones);
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    // Llamada a la API solo si hay un término de búsqueda
    // if (searchQuery) {
    //   fetchPhones();
    // }
    fetchPhones();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      {/* <SearchBar setSearchQuery={setSearchQuery} /> */}
      <div className="phone-grid">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default PhoneList;