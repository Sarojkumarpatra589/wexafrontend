"use client";

export default function RegisterPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Register</h1>

      <input placeholder="name" />
      <br />
      <input placeholder="email" />
      <br />
      <input placeholder="password" type="password" />
      <br />

      <button>Create Account</button>
    </main>
  );
}