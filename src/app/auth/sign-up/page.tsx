"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        credentials: 'include', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          emailAddress,
          password,
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.msg || 'Failed to sign up.');
        return;
      }

      alert('User registered successfully!');
      // Typically you’ll then direct them to Sign In
      router.push('/auth/sign-in');
    } catch (error: any) {
      console.error('Sign up error:', error);
      alert('Error signing up. Check console.');
    }
  }

  return (
    <div style={{ maxWidth: '320px', margin: '100px auto' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Username:</label><br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <Link href="/auth/sign-in" style={{ fontWeight: 'bold' }}>
          Sign In
        </Link>
      </p>
    </div>
  );
}
