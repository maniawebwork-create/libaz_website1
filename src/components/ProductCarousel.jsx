"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './ProductCarousel.module.css';

export default function ProductCarousel({ title, products = [] }) {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 4 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  if (products.length === 0) return null;

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      
      <div className={styles.carouselWrapper}>
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`} 
          onClick={prevSlide} 
          disabled={startIndex === 0}
          style={{ opacity: startIndex === 0 ? 0.3 : 1, cursor: startIndex === 0 ? 'not-allowed' : 'pointer' }}
        >
          &lt;
        </button>
        
        <div className={styles.productGrid}>
          {products.slice(startIndex, startIndex + 4).map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
              <div className={styles.productCard}>
                <div className={styles.imageBox}>
                  <img src={product.img} alt={product.name} />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.newPrice}>{product.price}</span>
                  {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`} 
          onClick={nextSlide} 
          disabled={startIndex + 4 >= products.length}
          style={{ opacity: startIndex + 4 >= products.length ? 0.3 : 1, cursor: startIndex + 4 >= products.length ? 'not-allowed' : 'pointer' }}
        >
          &gt;
        </button>
      </div>
      
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAllBtn}>View All {title}</button>
      </div>
    </section>
  );
}
