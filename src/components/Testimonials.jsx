"use client";
import { useRef, useEffect } from 'react';
import styles from './Testimonials.module.css';

const reviews = [
  { name: "Hazel Verma", text: "I had an amazing experience at LIBAZ By MANN! The service was absolutely incredible..." },
  { name: "Shikha Tripathi", text: "I went to LIBAZ for my wedding lehenga, and it was an amazing experience." },
  { name: "Khushboo Mittal", text: "I purchased my bridal lehenga as well as attire for the Sangeet event from LIBAZ..." },
  { name: "Komal Sharma", text: "I would like to sincerely appreciate the team at LIBAZ for their exceptional support..." },
  { name: "Anjali Gupta", text: "The collection here is breathtaking! Found my dream outfit within 30 minutes of walking in." },
  { name: "Neha Singh", text: "Absolutely stunning karigari. The handwork on my saree was praised by every single guest." },
  { name: "Priya Desai", text: "Very premium store with polite staff. They customized my lehenga fitting perfectly on short notice." },
  { name: "Riya Kapoor", text: "One of the best bridal studios in Chandni Chowk. You pay for pure quality and elegance here." }
];

export default function Testimonials() {
  const gridRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gridRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          gridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const firstChild = gridRef.current.children[0];
          const cardWidth = firstChild ? firstChild.offsetWidth + 20 : 320;
          gridRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Google Reviews</h2>
      <div className={styles.reviewGrid} ref={gridRef}>
        {reviews.map((review, i) => (
          <div key={i} className={styles.reviewCard}>
            <div className={styles.cardHeader}>
              <div className={styles.stars}>★★★★★</div>
              <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19.01 23.7449 15.92 23.7449 12.27Z"/>
                <path fill="#34A853" d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12489 19.25 6.47489 17.14 5.52489 14.29H1.54489V17.38C3.51489 21.3 7.56489 24 12.2549 24Z"/>
                <path fill="#FBBC05" d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.72488 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.72488 15.76 1.54488 17.38L5.52488 14.29Z"/>
                <path fill="#EA4335" d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56489 0 3.51489 2.7 1.54489 6.62L5.52489 9.71C6.47489 6.86 9.12489 4.75 12.2549 4.75Z"/>
              </svg>
            </div>
            <p className={styles.text}>"{review.text}"</p>
            <p className={styles.name}>- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
