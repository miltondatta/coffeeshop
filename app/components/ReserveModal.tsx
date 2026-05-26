"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TextInput, Select, Textarea } from "@/docs-design/components";
import { FormField } from "@/docs-design/components/FormField";

const partySizeOptions = Array.from({ length: 10 }, (_, i) => ({
  value: String(i + 1),
  label: i === 0 ? "1 person" : `${i + 1} people`,
}));

const timeOptions: { value: string; label: string }[] = [];
for (let h = 8; h <= 20; h++) {
  for (const m of [0, 30]) {
    if (h === 20 && m === 30) break;
    const period = h < 12 ? "AM" : "PM";
    const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const label = `${hour}:${m === 0 ? "00" : "30"} ${period}`;
    timeOptions.push({ value: label, label });
  }
}

interface Props {
  onClose: () => void;
}

export default function ReserveModal({ onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: name,
          groupSize: partySize,
          bookingTime: `${date} at ${time}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-modal-title"
      className="fixed inset-0 z-[50] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-warm-xl p-8 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 size-9 flex items-center justify-center
                     rounded-full text-brown-400 hover:text-brown-900 hover:bg-cream-200
                     transition-colors duration-150
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="size-16 rounded-full bg-terracotta-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-8 text-terracotta-500"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <h2 className="text-display-md font-bold text-brown-900">
              You&apos;re all set!
            </h2>
            <p className="text-body-md text-brown-600 max-w-sm">
              We&apos;d love to have you. A confirmation will be sent to your email — see you soon at Brew & Co.
            </p>
            <button
              onClick={onClose}
              className="mt-4 h-11 px-6 rounded-pill bg-brown-950 text-white font-semibold
                         hover:bg-brown-800 transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <h2
                id="reserve-modal-title"
                className="text-display-md font-bold text-brown-900"
              >
                Reserve a Table
              </h2>
              <p className="text-body-sm text-brown-600 mt-1">
                We&apos;d love to have you at Brew & Co.
              </p>
            </div>

            <TextInput
              label="Full Name"
              required
              placeholder="Jane Smith"
              value={name}
              onChange={setName}
            />
            <TextInput
              label="Email"
              type="email"
              required
              placeholder="jane@example.com"
            />

            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Party Size"
                required
                options={partySizeOptions}
                placeholder="Select size"
                value={partySize}
                onChange={setPartySize}
              />
              <FormField label="Date" htmlFor="reserve-date" required>
                <input
                  id="reserve-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-11 w-full rounded-md border border-cream-300 bg-white px-4
                             text-body-md text-brown-900
                             transition-all duration-200
                             hover:border-brown-300
                             focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </FormField>
            </div>

            <Select
              label="Preferred Time"
              required
              options={timeOptions}
              placeholder="Select a time"
              value={time}
              onChange={setTime}
            />

            <Textarea
              label="Special Requests"
              placeholder="Allergies, accessibility needs, special occasion…"
              resize="vertical"
              rows={3}
            />

            {error && (
              <p className="text-body-sm text-terracotta-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-pill bg-brown-950 text-white font-semibold
                         hover:bg-brown-800 transition-all duration-200
                         disabled:opacity-60 disabled:cursor-not-allowed
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
            >
              {loading ? "Confirming…" : "Confirm Reservation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
