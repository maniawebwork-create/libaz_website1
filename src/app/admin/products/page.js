import Link from 'next/link';
import { prisma } from '../../../lib/prisma';
import styles from '../AdminLayout.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Products</h1>
        <Link href="/admin/products/new" className={styles.primaryBtn}>
          + Add New Product
        </Link>
      </div>

      <div className={styles.card}>
        {products.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>No products found. Add your first product!</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', color: '#555' }}>Image</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Title</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Price</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 0' }}>
                    <img src={product.mainImage} alt={product.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                  </td>
                  <td style={{ padding: '12px 0', fontWeight: '500' }}>{product.title}</td>
                  <td style={{ padding: '12px 0' }}>{product.price}</td>
                  <td style={{ padding: '12px 0' }}>
                    <button style={{ color: '#1990c6', background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Edit</button>
                    <button style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
