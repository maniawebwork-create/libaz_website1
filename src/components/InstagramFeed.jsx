import styles from './InstagramFeed.module.css';

const feedImages = [
  '/images/cat_lehengas.png',
  '/images/cat_sarees.png',
  '/images/cat_indowestern.png',
  '/images/cat_coord_sets.png',
  '/images/product_gown.png'
];

export default function InstagramFeed() {
  return (
    <section className={styles.instagramSection}>
      <h2 className={styles.title}>Discover Our World</h2>
      <a href="https://www.instagram.com/libazbymann/" target="_blank" rel="noopener noreferrer" className={styles.handle}>
        @libazbymann
      </a>
      
      <div className={styles.feedGrid}>
        {/* 
          To make reels auto-play and sync automatically when the owner uploads,
          you will drop an Elfsight or Taggbox widget code right here!
          For now, this is a beautiful static gallery that links directly to your Reels. 
        */}
        {feedImages.map((img, index) => (
          <a 
            key={index} 
            href="https://www.instagram.com/libazbymann/reels/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.postCard}
          >
            <img src={img} alt="Instagram Reel" className={styles.postImg} />
            <div className={styles.overlay}>
              <div className={styles.playIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
