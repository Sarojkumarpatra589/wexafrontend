"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");

  // PASSWORD RULES
  const rules = useMemo(() => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  }, [password]);

  const strength = Object.values(rules).filter(Boolean).length;

  const getStrengthLabel = () => {
    if (strength <= 2) return "Weak";
    if (strength === 3 || strength === 4) return "Medium";
    return "Strong";
  };

  const getStrengthColor = () => {
    if (strength <= 2) return "text-red-500";
    if (strength === 3 || strength === 4) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-red-600 blur-[180px] opacity-20 top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[180px] opacity-10 bottom-[-100px] right-[-100px]" />
      </div>

      {/* CARD */}
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-red-900/40 bg-zinc-950 shadow-[0_0_60px_rgba(255,0,0,0.15)] backdrop-blur-md">

        <h1 className="text-3xl font-bold text-center text-red-500 tracking-widest">
          RESET PASSWORD
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Create a new secure password
        </p>

        {/* INPUT */}
        <div className="mt-6">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black border border-red-900/40 focus:border-red-500 outline-none text-white placeholder-gray-500"
          />

          {/* STRENGTH */}
          {password.length > 0 && (
            <div className="mt-3">
              <p className={`text-sm ${getStrengthColor()}`}>
                Strength: {getStrengthLabel()}
              </p>

              <div className="w-full h-2 bg-zinc-800 rounded-full mt-2">
                <div
                  className="h-2 bg-red-500 rounded-full transition-all"
                  style={{ width: `${(strength / 5) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* RULES */}
        <div className="mt-6 text-sm space-y-2">
          <p className="text-gray-400">Password rules:</p>

          <ul className="space-y-1 text-xs">
            <li className={rules.length ? "text-green-400" : "text-gray-500"}>
              ✔ At least 8 characters
            </li>
            <li className={rules.uppercase ? "text-green-400" : "text-gray-500"}>
              ✔ One uppercase letter
            </li>
            <li className={rules.lowercase ? "text-green-400" : "text-gray-500"}>
              ✔ One lowercase letter
            </li>
            <li className={rules.number ? "text-green-400" : "text-gray-500"}>
              ✔ One number
            </li>
            <li className={rules.special ? "text-green-400" : "text-gray-500"}>
              ✔ One special character
            </li>
          </ul>
        </div>

        {/* BUTTON */}
        <button
          disabled={strength < 4}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition
            ${
              strength < 4
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/40"
            }`}
        >
          Reset Password
        </button>

        {/* BACK LINK */}
        <div className="text-center mt-5 text-sm text-gray-400">
          Back to{" "}
          <Link href="/auth/login" className="text-red-400 hover:text-red-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}