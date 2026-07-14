import styles from './SocialProof.module.css';

const logos = ['IMDb', 'Times of India', 'Whats Hot', 'WedMeGood', 'So Delhi'];
const videos = [1, 2, 3, 4, 5, 6, 7];

export default function SocialProof() {
  return (
    <section className={styles.socialSection}>
      <h2 className={styles.title}>Featured In</h2>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoBox}>
             <span className={styles.logoText}>{logo}</span>
          </div>
        ))}
      </div>
      
      <div className={styles.videoGrid}>
        {videos.map((vid) => (
          <div key={vid} className={styles.videoCard}>
            <img src="/images/category_lehenga.png" alt="Reel thumbnail" className={styles.videoImg} />
            <div className={styles.videoOverlay}>
              <p className={styles.videoText}>Wedding guest outfit? Look at this gorgeous piece.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
