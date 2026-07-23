"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function PersonalLoanHero() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    employmentType: "",
    phone: "",
    email: "",
    loanAmount: "",
    loanPurpose: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_slug: "personal-loan", data: form }),
      });
      if (res.ok) {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'Personal Loan Page Form - Apply for Personal Loan', // or 'Home Enquiry', 'Loan Application', etc.
            data: form,
          }),
        });
        setSubmitted(true);
        setForm({ fullName: "", employmentType: "", phone: "", email: "", loanAmount: "", loanPurpose: "", requirements: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/personal-loan-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(90deg, rgba(11, 28, 48, 0.8) 0%, rgba(11, 28, 48, 0.4) 50%, rgba(11, 28, 48, 0) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Navbar */}
      <div className="relative z-20">
        <AnimateOnScroll direction="right" delay={0.1}>
          <Navbar />
        </AnimateOnScroll>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 lg:px-16 pt-14 pb-20 gap-10 max-w-6xl mx-auto">

        {/* Left */}
        <AnimateOnScroll direction="right" delay={0.1}>
          <div className="flex-1 max-w-md lg:pt-8">
            <div className="inline-block mb-4">
              <span
                className="font-inter font-semibold tracking-widest uppercase"
                style={{ color: "#DDE1FF", fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Personal Finance
              </span>
            </div>

            <h1
              className="font-playfair text-white font-bold mb-5"
              style={{ fontSize: "64px", lineHeight: "70px" }}
            >
              Money When Life Needs It Most
            </h1>

            <p
              className="font-inter mb-6"
              style={{ color: "rgba(255,255,255,0.80)", fontSize: "14px", lineHeight: "24px", maxWidth: "360px" }}
            >
              Get quick, collateral-free personal loans for any purpose — medical emergencies, weddings, travel, education, or any personal goal.
            </p>

            <p
              className="font-inter"
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "13px", lineHeight: "22px", maxWidth: "340px" }}
            >
              <span style={{ color: "#D4A437", fontWeight: 600 }}>Pingal Capital</span> — Fast Approval. Zero Collateral. Full Freedom.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Right — Form Card */}
        <AnimateOnScroll direction="left" delay={0.1}>
          <div
            className="w-full lg:w-[440px] rounded-2xl p-7 shadow-2xl"
            style={{ background: "#fff" }}
          >
            <h2
              className="font-playfair font-bold mb-1"
              style={{ color: "#1a2472", fontSize: "20px", lineHeight: "28px" }}
            >
              Apply for a Personal Loan
            </h2>
            <p
              className="font-inter text-gray-400 mb-5"
              style={{ fontSize: "13px", lineHeight: "20px" }}
            >
              A dedicated advisor will contact you within one business hour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                  Full Name <span style={{ color: "#c9922a" }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                    Employment Type <span style={{ color: "#c9922a" }}>*</span>
                  </label>
                  <select
                    name="employmentType"
                    value={form.employmentType}
                    onChange={handleChange}
                    className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: form.employmentType ? "#333" : "#94a3b8" }}
                    required
                  >
                    <option value="" disabled>Select type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                  </select>
                </div>
                <div>
                  <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                    Loan Purpose <span style={{ color: "#c9922a" }}>*</span>
                  </label>
                  <select
                    name="loanPurpose"
                    value={form.loanPurpose}
                    onChange={handleChange}
                    className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: form.loanPurpose ? "#333" : "#94a3b8" }}
                    required
                  >
                    <option value="" disabled>Select purpose</option>
                    <option value="medical">Medical</option>
                    <option value="education">Education</option>
                    <option value="wedding">Wedding</option>
                    <option value="travel">Travel</option>
                    <option value="home-renovation">Home Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                    Phone <span style={{ color: "#c9922a" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    required
                  />
                </div>
                <div>
                  <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                    Email <span style={{ color: "#c9922a" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                    style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                  Loan Amount Required <span style={{ color: "#c9922a" }}>*</span>
                </label>
                <input
                  type="text"
                  name="loanAmount"
                  value={form.loanAmount}
                  onChange={handleChange}
                  placeholder="e.g., ₹5 Lakhs"
                  className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                  required
                />
              </div>

              <div>
                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>
                  Tell us about your requirements
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Briefly describe what you need the loan for..."
                  rows={3}
                  className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400 resize-none"
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
    </div>
  );
}