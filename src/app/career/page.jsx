"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const openings = [
    { title: "Loan Officer", dept: "Sales", location: "Noida, UP" },
    { title: "Financial Advisor", dept: "Advisory", location: "Delhi NCR" },
    { title: "Credit Analyst", dept: "Risk", location: "Remote" },
];

export default function Careers() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handle = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/submissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ form_slug: "career", data: { name: form.name, email: form.email, phone: form.phone, position: form.position, message: form.message } }),
            });
            if (res.ok) {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        formType: 'Career Page Form - Job Application',
                        data: { name: form.name, email: form.email, phone: form.phone, position: form.position, message: form.message },
                    }),
                });
                setSubmitted(true);
                setForm({ name: "", email: "", phone: "", position: "", message: "", resume: null });
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        }
        setLoading(false);
    };

    return (
        <>
            <div className="bg-[#0B2E6F] z-10">
                <Navbar />
            </div>

            {/* Hero */}
            <section className="bg-[#0B2E6F] pt-20 pb-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #0B2E6F 50%, #D4A437 100%)" }}>
                {/* Decorative circles */}
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10" />
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-white/10" />
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div className="max-w-6xl mx-auto">
                        <span
                            className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase mb-4 block"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Join Our Team
                        </span>
                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(36px, 5vw, 64px)",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                maxWidth: "640px",
                            }}
                        >
                            Build a Career That <span className="text-[#D4A437]">Matters</span>
                        </h1>
                        <p
                            className="text-white/70 max-w-xl text-base leading-relaxed"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            We believe great financial outcomes start with great people. If you're driven, curious, and want to make a real difference in how people access finance — you belong here.
                        </p>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Why us */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <AnimateOnScroll direction="up" delay={0.1}>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: "🏦", title: "Industry Exposure", desc: "Work directly with top banks and NBFCs across India and gain hands-on experience in real financial products." },
                                { icon: "📈", title: "Growth-First Culture", desc: "We invest in your learning — structured mentorship, certifications, and fast-tracked promotions for performers." },
                                { icon: "🤝", title: "Collaborative Team", desc: "A tight-knit team where your ideas are heard, your work is visible, and your contribution directly shapes outcomes." },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-col gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[#0B2E6F]/8 flex items-center justify-center text-2xl"
                                        style={{ background: "rgba(11,46,111,0.07)" }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h3
                                        className="text-[#0B2E6F] font-semibold text-base"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-gray-500 text-sm leading-relaxed"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        {/* Left text */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px w-8 bg-[#D4A437]" />
                                <span
                                    className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase"
                                    style={{ fontFamily: "Work Sans, sans-serif" }}
                                >
                                    Get In Touch
                                </span>
                            </div>
                            <h2
                                className="text-[#0B2E6F] mb-6"
                                style={{
                                    fontFamily: "Playfair Display, serif",
                                    fontSize: "clamp(28px, 3vw, 40px)",
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                }}
                            >
                                Ready to Take the Next Step?
                            </h2>
                            <p
                                className="text-gray-500 text-sm leading-relaxed mb-8"
                                style={{ fontFamily: "Work Sans, sans-serif" }}
                            >
                                Fill in the form and our HR team will get back to you within 2 business days. Don't see the right role? Apply anyway — we hire for potential, not just open positions.
                            </p>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: "Email", value: "info@pingalcapital.com" },
                                    { label: "Phone", value: "+91 99996 93669" },
                                    { label: "Office", value: "Noida, Uttar Pradesh" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A437] flex-shrink-0" />
                                        <span
                                            className="text-sm text-gray-400"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        >
                                            <span className="text-[#0B2E6F] font-medium">{item.label}:</span>{" "}
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll direction="left" delay={0.1}>
                        {/* Form */}
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
                                        Application Submitted!
                                    </p>
                                    <p
                                        className="text-gray-400 text-sm text-center"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        We'll reach out to you within 2 business days.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Full Name</label>
                                            <input
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                value={form.name}
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
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Position Applying For</label>
                                        <select
                                            name="position"
                                            required
                                            value={form.position}
                                            onChange={handle}
                                            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        >
                                            <option value="">Select a role</option>
                                            {openings.map((j) => (
                                                <option key={j.title} value={j.title}>{j.title}</option>
                                            ))}
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Cover Note</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us a bit about yourself and why you'd be a great fit..."
                                            value={form.message}
                                            onChange={handle}
                                            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors resize-none"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-2 bg-[#0B2E6F] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#0a2660] active:scale-95 transition-all duration-200"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        {loading ? "Submitting..." : "Submit Application"}
                                    </button>
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