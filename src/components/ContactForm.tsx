"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Cloud Migration",
  "DevOps & CI/CD",
  "AI & Data",
  "RPA & Automation",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6EE714]/10">
          <svg
            className="h-8 w-8 text-[#6EE714]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-white">
          Message sent successfully
        </h3>
        <p className="mt-2 max-w-sm text-sm text-white/40">
          Thank you for reaching out. A solutions architect will review your
          inquiry and respond within 24 hours.
        </p>
      </div>
    );
  }

  const inputBase =
    "mt-1.5 block w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#6EE714] focus:ring-1 focus:ring-[#6EE714]/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm text-white/40">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`${inputBase} ${
            errors.name ? "border-red-500/50" : "border-white/10"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm text-white/40">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`${inputBase} ${
            errors.email ? "border-red-500/50" : "border-white/10"
          }`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm text-white/40">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className={`${inputBase} ${
            errors.company ? "border-red-500/50" : "border-white/10"
          }`}
          placeholder="Your company name"
        />
        {errors.company && (
          <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm text-white/40">
          How can we help?
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className={`${inputBase} appearance-none ${
            errors.service ? "border-red-500/50" : "border-white/10"
          } ${!formData.service ? "text-white/20" : ""}`}
        >
          <option value="" disabled className="bg-[#0A0A0A] text-white/20">
            Select a service area
          </option>
          {serviceOptions.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0A0A0A] text-white"
            >
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm text-white/40">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`${inputBase} resize-none ${
            errors.message ? "border-red-500/50" : "border-white/10"
          }`}
          placeholder="Tell us about your project, timeline, and any specific challenges..."
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
