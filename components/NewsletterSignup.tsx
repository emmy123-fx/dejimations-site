'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Thanks for subscribing!');
        setEmail('');
      } else {
        setMessage('❌ ' + (data.error || 'Something went wrong'));
      }
    } catch (err) {
      setMessage('❌ Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.5 : 1,
            }}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', marginTop: '1rem', color: message.includes('✅') ? '#7c3aed' : '#ff6b6b' }}>{message}</p>}
      </div>
    </Reveal>
  );
}
