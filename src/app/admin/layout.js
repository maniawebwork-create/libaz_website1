"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminLayout.module.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <h2>LIBAZ ADMIN</h2>
        </div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>Dashboard</Link>
          <Link href="/admin/products" className={styles.navLink}>Products</Link>
          <Link href="/admin/categories" className={styles.navLink}>Categories</Link>
          <Link href="/admin/settings" className={styles.navLink}>Site Settings</Link>
          <Link href="/admin/reviews" className={styles.navLink}>Reviews</Link>
          <Link href="/admin/blogs" className={styles.navLink}>Blogs</Link>
          <Link href="/admin/locations" className={styles.navLink}>Store Locations</Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <button 
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }} 
            style={{ 
              width: '100%', 
              textAlign: 'left', 
              background: 'none', 
              border: 'none', 
              color: '#ff4d4f', 
              padding: '12px 24px', 
              fontSize: '15px', 
              fontWeight: '500', 
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Log Out
          </button>
          <Link href="/" className={styles.navLink}>&larr; Back to Store</Link>
        </div>
      </aside>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
