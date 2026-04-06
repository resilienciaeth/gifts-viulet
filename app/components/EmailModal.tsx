"use client";

import { useState, useCallback, useEffect, type FormEvent } from "react";
import { X } from "lucide-react";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EmailModal({ open, onClose, onSuccess }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setEmail("");
      setError(null);
    }
  }, [open]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      setLoading(true);

      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error ?? "Something went wrong.");
          return;
        }

        localStorage.setItem("viulet_subscribed", "true");
        onSuccess();
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [email, onSuccess]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md border border-gray-700 bg-gray-950 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Get Your Free Wallpaper
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Enter your email to download and join the Avalon Letters.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-700 bg-black px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white py-3 font-medium text-black hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Download Wallpaper"}
          </button>
        </form>

        <p className="text-gray-600 text-xs text-center mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
