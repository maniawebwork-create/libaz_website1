"use client";
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  if (pathname && pathname.startsWith('/admin')) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterSection}>
        <h2 className={styles.newsletterTitle}>Subscribe To Our Newsletter</h2>
        <div className={styles.subscribeBox}>
          <input type="email" placeholder="Your email address" className={styles.emailInput} />
          <button className={styles.subscribeBtn}>SUBSCRIBE &rarr;</button>
        </div>
      </div>
      
      <div className={styles.mainFooter}>
        <div className={styles.brandColumn}>
          <h2 className={styles.logo}>Libaz</h2>
          <p className={styles.tagline}>
            Experience the finest in luxury ethnic wear. 
            Proudly celebrating Indian heritage, authentic Karigari, and timeless elegance.
          </p>
          <div className={styles.contactInfo}>
            <p>📍 Shop No. 123, Chandni Chowk, Delhi</p>
            <p>✉️ hello@libazbymann.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>CATEGORIES</h4>
            <ul>
              <li><a href="#">Lehengas</a></li>
              <li><a href="#">Gowns</a></li>
              <li><a href="#">Sarees</a></li>
              <li><a href="#">Suits / Kurtis</a></li>
              <li><a href="#">Occasional Wear</a></li>
              <li><a href="#">Menswear</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>QUICK LINKS</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Book an Appointment</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>POLICIES</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2026 LIBAZ By MANN. All rights reserved.</p>
        <div className={styles.paymentIcons}>
          <span>Secured Checkout: </span>
          <svg viewBox="0 0 32 32" width="36" height="24" fill="currentColor">
            <path fill="#1434CB" d="M14.6 22.8l2.3-14.7h3.7l-2.3 14.7h-3.7zm11.3-14.4c-.6-.2-1.6-.5-2.9-.5-3.1 0-5.4 1.7-5.4 4.1 0 1.8 1.6 2.8 2.8 3.4 1.2.6 1.7 1 1.7 1.6 0 .9-1.1 1.3-2.1 1.3-1.8 0-2.8-.3-3.8-.7l-.5-.3-.5 3.3c.9.4 2.6.8 4.3.8 3.4 0 5.6-1.7 5.6-4.3 0-1.4-.8-2.5-2.7-3.4-1.1-.6-1.8-1-1.8-1.6 0-.6.6-1.2 2-1.2 1.4 0 2.4.3 3.1.6l.4.2.6-3.3zm-17.7 14.4l-3.5-12c-.2-.9-.4-1.2-1.2-1.6l-2.3-1.1v-.2h3.9c.5 0 .9.3 1 1l1.8 9.2 3.1-10.1h3.9l-6.7 14.8h-3.7z"/>
          </svg>
          <svg viewBox="0 0 32 32" width="36" height="24">
            <circle fill="#EB001B" cx="10" cy="16" r="8"/>
            <circle fill="#F79E1B" cx="22" cy="16" r="8"/>
            <path fill="#FF5F00" d="M16 22.6c-2.4-1.7-4-4.5-4-7.6s1.6-5.9 4-7.6c2.4 1.7 4 4.5 4 7.6s-1.6 5.9-4 7.6z"/>
          </svg>
        </div>
      </div>
    </footer>
  );
}
