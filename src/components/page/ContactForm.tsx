"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const topics = ["General", "Creator support", "Press", "Partnerships", "Careers"];

const inputClass =
  "w-full rounded-sm border border-ink-100 bg-card px-4 py-3 text-p1 text-ink-900 " +
  "placeholder:text-ink-200 focus-visible:border-brand focus-visible:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!String(data.get("message") || "").trim()) next.message = "Please tell us how we can help.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      // PLACEHOLDER: wire this to your email service or API route
      // (e.g. POST /api/contact). Simulated success for now.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-ink-50 bg-surface p-8 text-center shadow-card"
      >
        <h2 className="font-display text-p1 font-bold text-ink-900">Thanks — message sent!</h2>
        <p className="mt-2 text-p2 text-ink-500">
          Our team will get back to you within 1–2 business days.
        </p>
        <Button className="mt-5" variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </Field>
      </div>

      <Field label="Topic" id="topic">
        <select id="topic" name="topic" className={inputClass} defaultValue="General">
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" id="message" error={errors.message}>
        <textarea id="message" name="message" rows={5} className={inputClass} />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-p2 text-red-600">
          Something went wrong. Please try again or email hello@fanfam.app.
        </p>
      )}

      <div>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-p2 font-medium text-ink-800">
        {label}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className="text-p3 text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}
