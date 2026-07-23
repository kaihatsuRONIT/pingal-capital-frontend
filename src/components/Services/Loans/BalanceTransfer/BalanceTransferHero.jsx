"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function BalanceTransferHero() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [content, setContent] = useState();
    const [form, setForm] = useState({
        fullName: "",
        currentLender: "",
        phone: "",
        email: "",
        loanAmount: "",
        loanNeeds: "",
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
                body: JSON.stringify({ form_slug: "balance-transfer", data: form }),
            });
            if (res.ok) {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        formType: 'Balance Transfer Page Form - Apply for Balance Transfer', // or 'Home Enquiry', 'Loan Application', etc.
                        data: form,
                    }),
                });
                setSubmitted(true);
                setForm({ fullName: "", currentLender: "", phone: "", email: "", loanAmount: "", loanNeeds: "" });
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        }
        setLoading(false);
    };
    useEffect(() => {
        fetch("/api/content?page=balance-transfer")
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    }, []);
    if (!content) return <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">Loading...</div>;
    const { hero } = content;
    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/balance-transfer-bg.avif')",
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
                <AnimateOnScroll direction="right" delay={0.05}>
                    <Navbar />
                </AnimateOnScroll>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 lg:px-16 pt-14 pb-20 gap-10 max-w-6xl mx-auto">
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div className="flex-1 max-w-md lg:pt-8">
                        <div className="inline-block mb-4">
                            <span className="font-inter font-semibold tracking-widest uppercase" style={{ color: "#DDE1FF", fontSize: "11px", letterSpacing: "0.15em" }}>
                                {hero.badge}
                            </span>
                        </div>
                        <h1 className="font-playfair text-white font-bold mb-5" style={{ fontSize: "64px", lineHeight: "70px" }}>
                            {hero.heading}
                        </h1>
                        <p className="font-inter" style={{ color: "rgba(255,255,255,0.80)", fontSize: "14px", lineHeight: "24px", maxWidth: "360px" }}>
                            <span style={{ color: "#D4A437", fontWeight: 600 }}>Pingal Capital</span> — {hero.tagline?.split("—")[1]?.trim()}
                        </p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="left" delay={0.1}>
                    <div className="w-full lg:w-[440px] rounded-2xl p-7 shadow-2xl" style={{ background: "#fff" }}>
                        <h2 className="font-playfair font-bold mb-1" style={{ color: "#1a2472", fontSize: "20px", lineHeight: "28px" }}>{hero.form.title}</h2>
                        <p className="font-inter text-gray-400 mb-5" style={{ fontSize: "13px", lineHeight: "20px" }}>{hero.form.subtitle}</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Full Name <span style={{ color: "#c9922a" }}>*</span></label>
                                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} required />
                            </div>
                            <div>
                                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Current Lender / Bank <span style={{ color: "#c9922a" }}>*</span></label>
                                <input type="text" name="currentLender" value={form.currentLender} onChange={handleChange} placeholder="e.g., HDFC, SBI, ICICI" className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} required />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Phone <span style={{ color: "#c9922a" }}>*</span></label>
                                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} required />
                                </div>
                                <div>
                                    <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Email <span style={{ color: "#c9922a" }}>*</span></label>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} required />
                                </div>
                            </div>
                            <div>
                                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Outstanding Loan Amount <span style={{ color: "#c9922a" }}>*</span></label>
                                <input type="text" name="loanAmount" value={form.loanAmount} onChange={handleChange} placeholder="e.g., ₹25 Lakhs" className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} required />
                            </div>
                            <div>
                                <label className="font-inter block text-xs font-medium mb-1.5" style={{ color: "#333" }}>Tell us about your loan needs</label>
                                <textarea name="loanNeeds" value={form.loanNeeds} onChange={handleChange} placeholder="Describe your current loan and what you're looking to achieve..." rows={3} className="font-inter w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-colors focus:border-blue-400 resize-none" style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }} />
                            </div>
                            <button type="submit" disabled={loading} className="font-inter w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60" style={{ background: "linear-gradient(135deg, #D4A437 0%, #E6C76A 100%)", color: "#fff" }}>
                                {loading ? "Submitting..." : hero.form.submitButton}
                            </button>
                            {submitted && <p className="font-inter text-center text-green-600 text-xs">✓ Request submitted! We'll get back to you within 24 hours.</p>}
                            {error && <p className="font-inter text-center text-red-500 text-xs">{error}</p>}
                            <p className="text-center text-xs" style={{ color: "#888" }}>We'll get back to you within 24 hours</p>
                        </form>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
}