'use client';
import { useState, useEffect } from 'react';
import styles from '../AdminLayout.module.css';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    hero_title: 'The Art of Karigari',
    hero_subtitle: 'Discover Chandni Chowk’s most exquisite luxury bridal collection, handcrafted for the modern royalty.',
    contact_phone: '+91 98765 43210',
    contact_email: 'hello@libazbymann.com'
  });

  useEffect(() => {
    // In a real implementation, we would fetch current settings from /api/admin/settings
    // For now, using defaults.
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Settings saved successfully!');
    } catch (error) {
      alert('Error saving settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Site Settings</h1>
      </div>

      <div className={styles.card} style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div>
            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '16px' }}>Hero Section</h3>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Hero Title</label>
              <input 
                type="text" 
                name="hero_title" 
                value={settings.hero_title} 
                onChange={handleChange} 
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Hero Subtitle</label>
              <textarea 
                name="hero_subtitle" 
                value={settings.hero_subtitle} 
                onChange={handleChange} 
                rows="3"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }}
              />
            </div>
          </div>

          <div>
            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '16px' }}>Contact Information</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
                <input 
                  type="text" 
                  name="contact_phone" 
                  value={settings.contact_phone} 
                  onChange={handleChange} 
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                <input 
                  type="email" 
                  name="contact_email" 
                  value={settings.contact_email} 
                  onChange={handleChange} 
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <button type="submit" className={styles.primaryBtn} disabled={saving} style={{ opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
