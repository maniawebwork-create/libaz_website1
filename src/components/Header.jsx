"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname && pathname.startsWith('/admin')) return null;

  return (
    <header className={styles.header}>
      {/* Top Bar: Logo & Icons */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <button 
            className={styles.hamburgerBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/">
            <h1 className={styles.logo}>LIBAZ <span>By MANN</span></h1>
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <button className={styles.iconBtn} aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className={styles.cartCount}>(0)</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">HOME</Link></li>
          <li className={styles.navItem}><Link href="/about-us">ABOUT US</Link></li>
          
          <li className={`${styles.navItem} ${styles.hasDropdown}`}>
            <Link href="#">WOMEN <span className={styles.dropdownIcon}>▼</span></Link>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>
                <Link href="#">Lehengas <span className={styles.dropdownIconRight}>►</span></Link>
                <ul className={styles.subDropdown}>
                  <li><Link href="/bridal-lehengas">Bridal</Link></li>
                  <li><Link href="/non-bridal-lehengas">Non Bridal</Link></li>
                </ul>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="#">Gowns <span className={styles.dropdownIconRight}>►</span></Link>
                <ul className={styles.subDropdown}>
                  <li><Link href="/bridal-gowns">Bridal Gowns</Link></li>
                  <li><Link href="/party-wear-gowns">Party Wear Gowns</Link></li>
                </ul>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="#">Sarees <span className={styles.dropdownIconRight}>►</span></Link>
                <ul className={styles.subDropdown}>
                  <li><Link href="/wedding-sarees">Wedding Sarees</Link></li>
                  <li><Link href="/festive-sarees">Festive Sarees</Link></li>
                </ul>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="#">Suits /Kurtis <span className={styles.dropdownIconRight}>►</span></Link>
                <ul className={styles.subDropdown}>
                  <li><Link href="/designer-suits">Designer Suits</Link></li>
                </ul>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="#">Occasional Wear <span className={styles.dropdownIconRight}>►</span></Link>
                <ul className={styles.subDropdown}>
                  <li><Link href="/mehndi-function">Mehndi Function</Link></li>
                  <li><Link href="/sangeet-function">Sangeet Function</Link></li>
                  <li><Link href="/cocktail-party">Cocktail Party</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className={`${styles.navItem} ${styles.hasDropdown}`}>
            <Link href="#">MEN <span className={styles.dropdownIcon}>▼</span></Link>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}><Link href="/sherwani-set">Sherwani Set</Link></li>
              <li className={styles.dropdownItem}><Link href="/kurtas">Kurtas</Link></li>
              <li className={styles.dropdownItem}><Link href="/suits">Suits</Link></li>
              <li className={styles.dropdownItem}><Link href="/unstiched-fabrics">Unstitched Fabrics</Link></li>
            </ul>
          </li>

          <li className={styles.navItem}><Link href="/contact-us">CONTACT US</Link></li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search for Luxury Bridal..." className={styles.searchInput} />
        </div>
      </div>
    </header>
  );
}
