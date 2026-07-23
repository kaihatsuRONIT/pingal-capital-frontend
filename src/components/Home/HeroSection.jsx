"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import AnimateOnScroll from "../AnimateOnScroll";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    fundingRequirement: "",
    businessNeeds: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_slug: "home",
          data: form,
        }),
      });

      if (res.ok) {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'Home Page Form - Consultation Request', // or 'Home Enquiry', 'Loan Application', etc.
            data: form,
          }),
        });
        setSubmitted(true);
        setForm({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          fundingRequirement: "",
          businessNeeds: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B2E6F 0%, #0D3B8F 50%, #D4A437 100%)" }}
    >

      {/* ── NAVBAR ── */}
      <AnimateOnScroll direction="right" delay={0.05}>
        <Navbar />
      </AnimateOnScroll>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 lg:px-16 pt-14 pb-20 gap-10 max-w-6xl mx-auto">

        <AnimateOnScroll direction="right" delay={0.05}>
          {/* Left — Headline + CTA */}
          <div className="flex-1 max-w-md lg:pt-8">
            <h1 className="font-playfair text-white font-extrabold leading-tight" style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px" }}>
              Capital That
              <br />
              Moves You
              <br />
              <span style={{ color: "#E6C76A" }}>Forward</span>
            </h1>

            <p className="mt-5 text-sm leading-relaxed font-inter" style={{ color: "rgba(255,255,255,0.80)", maxWidth: "549px", fontSize: "20px", fontWeight: 400, lineHeight: "39px" }}>
              Empowering businesses with strategic funding solutions, financial expertise, and growth-focused capital partnerships.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="px-9 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 font-inter"
                style={{ background: "linear-gradient(135deg, #D4A437 46.15%, #E6C76A 100%)", color: "#0B2E6F", cursor: "pointer", fontSize: "18px", fontWeight: 700, lineHeight: "28px" }}
              >
                Get Funding
              </button>
              <button
                className="px-6 py-3 rounded-full text-sm font-semibold font-inter"
                style={{
                  borderColor: "rgba(255,255,255,0.75)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  border: "2px solid rgba(255,255,255,0.75)",
                  background: "transparent",
                  transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#1a2472";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
                }}
              >
                Explore Services
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="left" delay={0.05}>
          {/* Right — Consultation Form */}
          <div
            className="w-full lg:w-[420px] rounded-2xl p-7 shadow-2xl"
            style={{ background: "#fff" }}
          >
            <h2 className="font-bold mb-5 font-playfair" style={{ color: "#0B2E6F", fontSize: "24px", fontWeight: 500, lineHeight: "32px" }}>
              Request a Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                  Full Name <span style={{ color: "#e8721e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                  Company Name <span style={{ color: "#e8721e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                  required
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                    Phone <span style={{ color: "#e8721e" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXXXXX98"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                    Email <span style={{ color: "#e8721e" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    required
                  />
                </div>
              </div>

              {/* Funding Requirement */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                  Funding Requirement <span style={{ color: "#e8721e" }}>*</span>
                </label>
                <input
                  type="text"
                  name="fundingRequirement"
                  value={form.fundingRequirement}
                  onChange={handleChange}
                  placeholder="e.g. ₹50 Lakhs - ₹1 Crore"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                  required
                />
              </div>

              {/* Business Needs */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: "#0A0A0A", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}>
                  Tell us about your business needs <span style={{ color: "#e8721e" }}>*</span>
                </label>
                <textarea
                  name="businessNeeds"
                  value={form.businessNeeds}
                  onChange={handleChange}
                  placeholder="Briefly describe your business and funding requirements..."
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400 resize-none"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="font-inter w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #D4A437 0%, #E6C76A 100%)", color: "#fff" }}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>

              {submitted && (
                <p className="font-inter text-center text-green-600 text-xs">
                  ✓ Request submitted! We'll get back to you within 24 hours.
                </p>
              )}

              {error && (
                <p className="font-inter text-center text-red-500 text-xs">{error}</p>
              )}

              <p className="text-center text-xs" style={{ color: "#888" }}>
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </AnimateOnScroll>

      </div>
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}