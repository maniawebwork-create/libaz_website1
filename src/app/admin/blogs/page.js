import { prisma } from '../../../lib/prisma';
import styles from '../AdminLayout.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { date: 'desc' }
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Blog Articles</h1>
        <button className={styles.primaryBtn}>+ Write New Post</button>
      </div>

      <div className={styles.card}>
        {blogs.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>No blog posts found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', color: '#555' }}>Image</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Title</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Date</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 0' }}>
                    {blog.image && <img src={blog.image} alt={blog.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />}
                  </td>
                  <td style={{ padding: '12px 0', fontWeight: '500' }}>{blog.title}</td>
                  <td style={{ padding: '12px 0', color: '#777' }}>{new Date(blog.date).toLocaleDateString()}</td>
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
