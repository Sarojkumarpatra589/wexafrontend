"use client";

export default function LoginPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Login</h1>

      <input placeholder="email" />
      <br />
      <input placeholder="password" type="password" />
      <br />

      <button>Login</button>
    </main>
  );
}