'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.css';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Set cookie with token (middleware checks for cookies)
        document.cookie = `adminToken=${data.token}; path=/; max-age=604800; SameSite=Strict`;
        router.push('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: 'linear-gradient(to bottom, #071226, #071726)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '400px', width: '90%' }}>
        <div style={{ padding: '2rem', borderRadius: '1rem', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(20, 20, 40, 0.9))', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>Admin Login</h1>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="deji"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  fontSize: '1rem',
                }}
              />
            </div>

            {error && <div style={{ color: '#ff6b6b', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '0.75rem',
                background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: '700',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1,
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
