import Link from 'next/link';
import { prisma } from '../../../lib/prisma';
import styles from '../AdminLayout.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: 'asc' }
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Product Categories</h1>
        <button className={styles.primaryBtn}>+ Add Category</button>
      </div>

      <div className={styles.card}>
        {categories.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>No categories found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', color: '#555' }}>Name</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Slug</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Products</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 0', fontWeight: '500' }}>{category.name}</td>
                  <td style={{ padding: '12px 0', color: '#777' }}>{category.slug}</td>
                  <td style={{ padding: '12px 0' }}>{category._count.products}</td>
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
