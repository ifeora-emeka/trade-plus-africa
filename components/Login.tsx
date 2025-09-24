"use client";

import { useState, useEffect } from "react";

interface LoginFormProps {
  onLoginSuccess?: () => void; // optional callback (e.g., redirect)
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/public/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        if (onLoginSuccess) onLoginSuccess();
      } else {
        setError(data.error || "Login failed"); // ✅ use `error` instead of `message`
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <div className="p-6 bg-white rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Welcome Admin </h2>
        <p className="text-gray-600 mb-4">You are logged in!</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleLogin}
      className="p-6 bg-white rounded-lg shadow space-y-4 w-full max-w-lg"
    >
      <h2 className="text-2xl font-bold text-center">Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-700 hover:bg-gray-950 text-white py-2 rounded-lg font-medium transition"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
