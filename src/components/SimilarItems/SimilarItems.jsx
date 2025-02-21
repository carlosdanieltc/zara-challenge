import React, { useEffect } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard'
import styles from './SimilarItems.module.css'
import { Link, useParams } from 'react-router-dom';

const SimilarItems = ({ phoneDetail }) => {

    const similarProducts = phoneDetail.similarProducts
    const { id } = useParams();

    useEffect(() => {
    }, [id]);

    return (
        <>
            <div>
                <h3>
                    SIMILAR ITEMS
                </h3>
                <div className={styles.similarItemsContainer}>
                    {similarProducts.map((item, index) => (  
                        <Link to={`/phone/${item.id}`} key={item.id} className={styles.linkToSimilar}>
                            <PhoneCard key={item.id} phone={item} className={styles.similarCard}/>
                        </Link>                 
                    ))}
                </div>
            </div>
        </>
    );
};

export default SimilarItems;
