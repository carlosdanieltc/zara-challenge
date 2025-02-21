import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPhoneDetail } from '../services/phoneService';
import styles from './PhoneDetailView.module.css';
import PhoneCardDetail from '../components/PhoneCard/PhoneCardDetail'
import PhoneSpecifications from '../components/PhoneSpecifications/PhoneSpecifications'
import SimilarItems from '../components/SimilarItems/SimilarItems'

const PhoneDetailView = () => {
  const { id } = useParams();
  const [phoneDetail, setPhoneDetail] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getPhoneDetail = async () => {
      setLoading(true);
      const data = await fetchPhoneDetail(id);
      if (data) {
        setPhoneDetail(data);
      } else {
        setError('No se pudieron obtener los detalles del teléfono');
      }
      setLoading(false);
    };

    getPhoneDetail();

  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.phoneDetailContainer}>
      {phoneDetail && (
        <>
          <Link to="/">
            <button className={styles.buttonBack}>Back</button>
          </Link>
          <PhoneCardDetail phoneDetail={phoneDetail} />
          <PhoneSpecifications phoneDetail={phoneDetail}></PhoneSpecifications>
          <SimilarItems key={id} phoneDetail={phoneDetail}></SimilarItems>
        </>
      )}
    </div>
  );
};

export default PhoneDetailView;