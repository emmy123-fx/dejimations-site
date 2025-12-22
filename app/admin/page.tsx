'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  link: string;
  commission?: number;
  description?: string;
  category?: string;
  active: boolean;
}

interface Subscriber {
  id: number;
  email: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [tab, setTab] = useState<'products' | 'subscribers'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    link: '',
    commission: '',
    description: '',
    category: 'Featured',
  });

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (!savedToken) {
      router.push('/admin/login');
      return;
    }
    setToken(savedToken);
    fetchProducts(savedToken);
  }, [router]);

  const fetchProducts = async (authToken: string) => {
    try {
      setLoading(true);
      const res = await fetch('/api/products', {
        headers: { 'Authorization': `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribers = async (authToken: string) => {
    try {
      setLoading(true);
      const res = await fetch('/api/newsletter', {
        headers: { 'Authorization': `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data);
      }
    } catch (err) {
      console.error('Failed to fetch subscribers');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProduct = async () => {
    if (!formData.name || !formData.price || !formData.link) {
      alert('Please fill in required fields');
      return;
    }

    try {
      setLoading(true);
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/products/${editingId}` : '/api/products';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(editingId ? 'Product updated' : 'Product created');
        setShowForm(false);
        setEditingId(null);
        setFormData({ name: '', price: '', image: '', link: '', commission: '', description: '', category: 'Featured' });
        fetchProducts(token);
      }
    } catch (err) {
      alert('Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (res.ok) {
        alert('Product deleted');
        fetchProducts(token);
      }
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  const handleEditProduct = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      image: product.image || '',
      link: product.link,
      commission: product.commission?.toString() || '',
      description: product.description || '',
      category: product.category || 'Featured',
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: 'linear-gradient(to bottom, #071226, #071726)', padding: '2rem' }}>
      <div className={styles.container}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff' }}>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              background: '#ff6b6b',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Logout
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1rem' }}>
          <button
            onClick={() => {
              setTab('products');
              fetchProducts(token);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: tab === 'products' ? '#7c3aed' : 'transparent',
              color: '#fff',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Affiliate Products
          </button>
          <button
            onClick={() => {
              setTab('subscribers');
              fetchSubscribers(token);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: tab === 'subscribers' ? '#7c3aed' : 'transparent',
              color: '#fff',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Newsletter Subscribers ({subscribers.length})
          </button>
        </div>

        {tab === 'products' && (
          <div>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditingId(null);
                setFormData({ name: '', price: '', image: '', link: '', commission: '', description: '', category: 'Featured' });
              }}
              style={{
                marginBottom: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              {showForm ? 'Cancel' : '+ Add New Product'}
            </button>

            {showForm && (
              <div style={{ marginBottom: '2rem', padding: '2rem', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '1rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                <h3 style={{ color: '#fff', fontWeight: '700', marginBottom: '1rem' }}>{editingId ? 'Edit Product' : 'Add New Product'}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <input type="text" placeholder="Product name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} />
                  <input type="number" placeholder="Price *" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} />
                  <input type="text" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} />
                  <input type="text" placeholder="Affiliate link *" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} />
                  <input type="number" placeholder="Commission %" value={formData.commission} onChange={(e) => setFormData({ ...formData, commission: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} />
                  <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                    <option value="Featured">Featured</option>
                    <option value="Tools">Tools</option>
                    <option value="Resources">Resources</option>
                  </select>
                </div>
                <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={{ width: '100%', marginTop: '1rem', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', minHeight: '100px' }} />
                <button
                  onClick={handleSaveProduct}
                  disabled={loading}
                  style={{ marginTop: '1rem', padding: '0.75rem 2rem', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600', opacity: loading ? 0.5 : 1 }}
                >
                  {loading ? 'Saving...' : 'Save Product'}
                </button>
              </div>
            )}

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Price</th>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Commission</th>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>{product.name}</td>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>₹{product.price}</td>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>{product.category}</td>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>{product.commission}%</td>
                      <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => handleEditProduct(product)} style={{ padding: '0.4rem 0.8rem', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)} style={{ padding: '0.4rem 0.8rem', background: '#ff6b6b', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontSize: '0.85rem' }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'subscribers' && (
          <div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Newsletter Subscribers ({subscribers.length})</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '1rem', color: '#fff', fontWeight: '700' }}>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub) => (
                    <tr key={sub.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>{sub.email}</td>
                      <td style={{ padding: '1rem', color: '#cbd5e1' }}>{new Date(sub.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
