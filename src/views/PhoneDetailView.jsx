import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhoneDetail } from '../services/phoneService';
import './PhoneDetailView.css';
import PhoneCardDetail from '../components/PhoneCard/PhoneCardDetail'
import PhoneSpecifications from '../components/PhoneSpecifications/PhoneSpecifications'

const PhoneDetailView = () => {
  const { id } = useParams();
  const [phoneDetail, setPhoneDetail] = useState(null); // Estado para almacenar los detalles del teléfono
  const [loading, setLoading] = useState(true); // Estado de carga para mostrar un cargando mientras obtenemos los datos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const getPhoneDetail = async () => {
      setLoading(true);
      const data = await fetchPhoneDetail(id);
      if (data) {
        setPhoneDetail(data);
        console.log(data)
      } else {
        setError('No se pudieron obtener los detalles del teléfono');
      }
      setLoading(false);
    };

    getPhoneDetail();

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="phone-detail-container">
      {phoneDetail && (
        <>
          <button className='button-back'>Back</button>
          <PhoneCardDetail phoneDetail={phoneDetail} />
          <PhoneSpecifications phoneDetail={phoneDetail}></PhoneSpecifications>
        </>
      )}
    </div>
  );
};

export default PhoneDetailView;