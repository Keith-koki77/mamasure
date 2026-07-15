"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Heart, Loader2 } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.replace("/dashboard");

    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6">

      <div className="w-full max-w-md rounded-[32px] border border-purple-100 bg-white p-10 shadow-xl">

        {/* Logo */}

        <div className="flex justify-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-700">

            <Heart className="h-8 w-8 text-white" />

          </div>

        </div>

        {/* Heading */}

        <div className="mt-6 text-center">

          <h1 className="text-4xl font-extrabold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-600">
            Log in to continue tracking your maternal savings.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 placeholder:text-gray-400 caret-purple-700 outline-none transition duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-slate-900 placeholder:text-gray-400 caret-purple-700 outline-none transition duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />

          </div>

          {error && (

            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">

              {error}

            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-70"
          >

            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              "Log In"
            )}

          </button>

        </form>

        {/* Footer */}

        <div className="mt-8 text-center">

          <p className="text-sm text-gray-600">

            Don't have an account?{" "}

            <Link
              href="/signup"
              className="font-semibold text-purple-700 hover:text-purple-800"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}