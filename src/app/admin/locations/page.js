import { prisma } from '../../../lib/prisma';
import styles from '../AdminLayout.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminLocationsPage() {
  const locations = await prisma.storeLocation.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Store Locations</h1>
        <button className={styles.primaryBtn}>+ Add Location</button>
      </div>

      <div className={styles.card}>
        {locations.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>No store locations found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', color: '#555' }}>Store Title</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Address</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Map Link</th>
                <th style={{ padding: '12px 0', color: '#555' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map(location => (
                <tr key={location.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 0', fontWeight: '500' }}>{location.title}</td>
                  <td style={{ padding: '12px 0', color: '#555' }}>{location.address}</td>
                  <td style={{ padding: '12px 0' }}>
                    <a href={location.mapUrl} target="_blank" rel="noreferrer" style={{ color: '#1990c6' }}>View Map</a>
                  </td>
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
