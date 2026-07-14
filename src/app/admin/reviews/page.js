import { prisma } from '../../../lib/prisma';
import styles from '../AdminLayout.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminReviewsPage() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Customer Reviews</h1>
        <button className={styles.primaryBtn}>+ Add Review</button>
      </div>

      <div className={styles.card}>
        {reviews.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>No reviews found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', color: '#555' }}>Author</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Rating</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Review</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Date</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map(review => (
                <tr key={review.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 0', fontWeight: '500' }}>{review.authorName}</td>
                  <td style={{ padding: '12px 0', color: '#e5b80b' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</td>
                  <td style={{ padding: '12px 0', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{review.content}</td>
                  <td style={{ padding: '12px 0', color: '#777' }}>{new Date(review.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '12px 0' }}>
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
