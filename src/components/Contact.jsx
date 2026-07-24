"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handle = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/submissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ form_slug: "contact", data: form }),
            });
            if (res.ok) {
                setSubmitted(true);
                setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        }
        setLoading(false);
    };

    const info = [
        { icon: Phone, label: "Phone", value: "+91 9999693669" },
        { icon: Mail, label: "Email", value: "info@pingalcapital.com" },
        { icon: MapPin, label: "Office", value: "516 5th floor Wave Silver Tower Sector 18 Noida Gautam Buddha Nagar Uttar Pradesh 201301" },
        { icon: Clock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
    ];

    return (
        <>
            <div className="bg-[#0B2E6F] z-10">
                <AnimateOnScroll direction="right" delay={0.1}>
                    <Navbar />
                </AnimateOnScroll>
            </div>
            {/* Hero */}
            <section className="bg-[#0B2E6F] pt-20 pb-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #0B2E6F 50%, #D4A437 100%)" }}>
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10" />
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-white/10" />
                <div className="absolute bottom-0 left-0 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-6xl mx-auto">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <span
                            className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase mb-4 block"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Get In Touch
                        </span>
                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(36px, 5vw, 64px)",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                maxWidth: "600px",
                            }}
                        >
                            We're Here to <span className="text-[#D4A437]">Help You</span>
                        </h1>
                        <p
                            className="text-white/70 max-w-xl text-base leading-relaxed"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Have a question about funding, partnerships, or our services? Reach out and our team will get back to you promptly.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Main */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        {/* Left — Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px w-8 bg-[#D4A437]" />
                                <span
                                    className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase"
                                    style={{ fontFamily: "Work Sans, sans-serif" }}
                                >
                                    Contact Info
                                </span>
                            </div>
                            <h2
                                className="text-[#0B2E6F] mb-8"
                                style={{
                                    fontFamily: "Playfair Display, serif",
                                    fontSize: "clamp(26px, 3vw, 38px)",
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                }}
                            >
                                Let's Start a Conversation
                            </h2>
                            <p
                                className="text-gray-500 text-sm leading-relaxed mb-10"
                                style={{ fontFamily: "Work Sans, sans-serif" }}
                            >
                                Whether you're exploring funding options, looking to partner with us, or just want to know more — we'd love to hear from you.
                            </p>

                            <div className="flex flex-col gap-5">
                                {info.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(11,46,111,0.07)" }}
                                        >
                                            <Icon size={18} color="#0B2E6F" />
                                        </div>
                                        <div>
                                            <p
                                                className="text-xs text-gray-400 mb-0.5"
                                                style={{ fontFamily: "Work Sans, sans-serif" }}
                                            >
                                                {label}
                                            </p>
                                            <p
                                                className="text-sm font-semibold text-[#0B2E6F]"
                                                style={{ fontFamily: "Manrope, sans-serif", maxWidth: "220px" }}
                                            >
                                                {value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="left" delay={0.1}>
                        {/* Right — Form */}
                        <div className="bg-[#f7f8fc] rounded-3xl p-8">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-64 gap-4">
                                    <div className="w-14 h-14 rounded-full bg-[#0B2E6F] flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 13l4 4L19 7" stroke="#D4A437" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p
                                        className="text-[#0B2E6F] font-semibold text-lg text-center"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        Message Sent!
                                    </p>
                                    <p
                                        className="text-gray-400 text-sm text-center"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        We'll get back to you within 1–2 business days.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-xs text-[#0B2E6F] underline mt-2"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Full Name</label>
                                            <input
                                                name="fullName"
                                                required
                                                placeholder="John Doe"
                                                value={form.fullName}
                                                onChange={handle}
                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                                style={{ fontFamily: "Work Sans, sans-serif" }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Phone</label>
                                            <input
                                                name="phone"
                                                required
                                                placeholder="+91 00000 00000"
                                                value={form.phone}
                                                onChange={handle}
                                                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                                style={{ fontFamily: "Work Sans, sans-serif" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@email.com"
                                            value={form.email}
                                            onChange={handle}
                                            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Subject</label>
                                        <select
                                            name="subject"
                                            required
                                            value={form.subject}
                                            onChange={handle}
                                            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Funding Enquiry">Funding Enquiry</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Home Loan">Home Loan</option>
                                            <option value="Loan Services for NRIs">Loan Services for NRIs</option>
                                            <option value="Loan Against Property">Loan Against Property</option>
                                            <option value="Balance Transfer & Top Up">Balance Transfer & Top Up</option>
                                            <option value="Non Residential Premises Loan">Non Residential Premises Loan</option>
                                            <option value="Loan Against Rentals">Loan Against Rentals</option>
                                            <option value="Debt Consolidation">Debt Consolidation</option>
                                            <option value="Overdraft Facility">Overdraft Facility</option>
                                            <option value="Working Capital">Working Capital</option>
                                            <option value="Business Loan">Business Loan</option>
                                            <option value="Personal Loan">Personal Loan</option>
                                            <option value="CGTMSE">CGTMSE</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            placeholder="Tell us how we can help..."
                                            value={form.message}
                                            onChange={handle}
                                            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors resize-none"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-xs" style={{ fontFamily: "Work Sans, sans-serif" }}>{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-2 bg-[#0B2E6F] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#0a2660] active:scale-95 transition-all duration-200 disabled:opacity-60"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                    {submitted && (
                                        <p className="font-inter text-center text-green-600 text-xs">
                                            ✓ Request submitted! We'll get back to you within 24 hours.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
            <Footer />
        </>
    );
}
