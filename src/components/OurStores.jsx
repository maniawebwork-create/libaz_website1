import styles from './OurStores.module.css';

export default function OurStores() {
  return (
    <section className={styles.storeSection}>
      <h2 className={styles.title}>Visit Our Flagship Store</h2>
      <div className={styles.storeGrid}>
        <div className={styles.storeCard}>
          <img src="/images/cat_lehengas.png" alt="LIBAZ By MANN Store" className={styles.storeImg} />
          <h3 className={styles.storeName}>LIBAZ By MANN</h3>
          <p className={styles.storeAddress}>
            Luxury Bridal Wear Designer Store<br />
            Chandni Chowk, Delhi<br />
            <br />
            Experience our exclusive collection of premium bridal and ethnic wear in person.
          </p>
        </div>
        
        <div className={styles.mapCard}>
          <iframe 
            src="https://maps.google.com/maps?q=LIBAZ%20By%20MANN%20-%20Luxury%20Bridal%20Wear%20Designer%20Store%20in%20Chandni%20Chowk&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className={styles.mapIframe}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
