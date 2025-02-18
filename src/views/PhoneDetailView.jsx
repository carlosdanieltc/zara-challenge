import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhoneDetail } from '../services/phoneService'; 
import './PhoneDetailView.css'; 

const PhoneDetailView = () => {
  const { id } = useParams(); // Obtienes el id del teléfono desde la URL
  console.log(`ID ES:${id}`)
  const [phoneDetail, setPhoneDetail] = useState(null); // Estado para almacenar los detalles del teléfono
  const [loading, setLoading] = useState(true); // Estado de carga para mostrar un cargando mientras obtenemos los datos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const getPhoneDetail = async () => {
      setLoading(true);
      const data = await fetchPhoneDetail(id); // Llamada a la API para obtener el detalle del teléfono
      if (data) {
        setPhoneDetail(data); // Guardamos los detalles en el estado
      } else {
        setError('No se pudieron obtener los detalles del teléfono'); // Si no se obtiene el detalle, mostramos un error
      }
      setLoading(false);
    };

    getPhoneDetail();
  }, [id]); // Solo se vuelve a ejecutar cuando cambia el id

  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras obtenemos los datos
  }

  if (error) {
    return <div>{error}</div>; // Mostrar el error si no se pueden obtener los detalles
  }

  return (
    <div className="phone-detail-container">
      {phoneDetail && (
        <>
          <h1>{phoneDetail.name}</h1>
          <img src={phoneDetail.imageUrl} alt={phoneDetail.name} className="phone-detail-image" />
          <p><strong>Brand:</strong> {phoneDetail.brand}</p>
          <p><strong>Price:</strong> ${phoneDetail.price}</p>
          <p><strong>Description:</strong> {phoneDetail.description}</p>
          {/* Puedes agregar más detalles según la respuesta de la API */}
        </>
      )}
    </div>
  );
};

export default PhoneDetailView;