import styles from './AdminLayout.module.css';

export default function AdminDashboard() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      </div>
      
      <div className={styles.card} style={{ marginBottom: '24px' }}>
        <h3>Welcome to the LIBAZ Admin Panel!</h3>
        <p style={{ color: '#555', marginTop: '8px' }}>
          From here, you can manage your entire e-commerce store. Use the sidebar to navigate between Products, Categories, Settings, and more.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div className={styles.card}>
          <h4 style={{ color: '#777', fontSize: '14px', marginBottom: '8px' }}>Total Products</h4>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>0</p>
        </div>
        <div className={styles.card}>
          <h4 style={{ color: '#777', fontSize: '14px', marginBottom: '8px' }}>Total Categories</h4>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>0</p>
        </div>
        <div className={styles.card}>
          <h4 style={{ color: '#777', fontSize: '14px', marginBottom: '8px' }}>Active Reviews</h4>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>0</p>
        </div>
      </div>
    </div>
  );
}
