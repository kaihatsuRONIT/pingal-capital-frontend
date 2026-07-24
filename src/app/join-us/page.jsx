"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const openings = [
    { title: "Loan Officer", dept: "Sales", location: "Noida, UP" },
    { title: "Financial Advisor", dept: "Advisory", location: "Delhi NCR" },
    { title: "Credit Analyst", dept: "Risk", location: "Remote" },
];

export default function JoinUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
    });
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false);
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
                body: JSON.stringify({ form_slug: "join-us", data: form }),
            });
            if (res.ok) {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        formType: 'Partner Registration Form - Join Us Page',
                        data: form,
                    }),
                });
                setSubmitted(true);
                setForm({ name: "", email: "", phone: "", position: "", message: "" });
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
                <AnimateOnScroll direction="right" delay={0.1}>
                    <Navbar />
                </AnimateOnScroll>
            </div>

            {/* Hero */}
            <section className="bg-[#0B2E6F] pt-20 pb-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, #0B2E6F 50%, #D4A437 100%)" }}>
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10" />
                <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-white/10" />
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div className="max-w-6xl mx-auto">
                        <span
                            className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase mb-4 block"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Partner With Us
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
                            Payouts fast. <span className="text-[#D4A437]">Hassle zero.</span>
                        </h1>
                        <p
                            className="text-white/70 max-w-xl text-base leading-relaxed"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            Refer clients, we handle the rest. Earn commission on every successful disbursal — on time, every time.
                        </p>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Why us / Partner With Us */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <AnimateOnScroll direction="up" delay={0.1}>
                        <h2
                            className="text-center text-[#0B2E6F] mb-16"
                            style={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "50px",
                                fontWeight: 500,
                            }}
                        >
                            Why <span className="text-[#D4A437]">Choose</span> Us?
                        </h2>
                        <PartnerCarousel />
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Partner Form */}
            <section id="apply" className="bg-[#f7f8fc] py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                    <AnimateOnScroll direction="right" delay={0.1}>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px w-8 bg-[#D4A437]" />
                                <span
                                    className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase"
                                    style={{ fontFamily: "Work Sans, sans-serif" }}
                                >
                                    Partner With Us
                                </span>
                            </div>
                            <h2
                                className="text-[#0B2E6F] mb-4"
                                style={{
                                    fontFamily: "Playfair Display, serif",
                                    fontSize: "clamp(28px, 3vw, 42px)",
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                }}
                            >
                                Earn more.<br />
                                <span className="text-[#D4A437]">Do less follow-up.</span>
                            </h2>
                            <p
                                className="text-gray-500 text-sm leading-relaxed mb-10"
                                style={{ fontFamily: "Work Sans, sans-serif" }}
                            >
                                Refer clients, we handle the rest — processing, documentation, lender coordination. You earn commission on every successful disbursal, on time, every time.
                            </p>

                            <div className="flex flex-col gap-4 mb-10">
                                {[
                                    "Commission on every disbursal.",
                                    "Dedicated relationship manager.",
                                    "Access to 20+ lenders & products.",
                                ].map((line) => (
                                    <div key={line} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A437] flex-shrink-0" />
                                        <span
                                            className="text-[#0B2E6F] text-sm font-semibold"
                                            style={{ fontFamily: "Manrope, sans-serif" }}
                                        >
                                            {line}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3 pt-8 border-t border-gray-200">
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
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-64 gap-4">
                                    <div className="w-14 h-14 rounded-full bg-[#0B2E6F] flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 13l4 4L19 7" stroke="#D4A437" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p
                                        className="text-[#0B2E6F] font-bold text-lg text-center"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        Registration Received!
                                    </p>
                                    <p
                                        className="text-gray-400 text-sm text-center"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        Our team will onboard you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div>
                                        <h3
                                            className="text-[#0B2E6F] font-bold text-lg mb-1"
                                            style={{ fontFamily: "Manrope, sans-serif" }}
                                        >
                                            Register as a Partner
                                        </h3>
                                        <p className="text-gray-400 text-xs" style={{ fontFamily: "Work Sans, sans-serif" }}>
                                            Takes less than 2 minutes.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Full Name</label>
                                            <input
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={handle}
                                                className="bg-[#f7f8fc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
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
                                                className="bg-[#f7f8fc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
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
                                            className="bg-[#f7f8fc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>Your Profession</label>
                                        <select
                                            name="position"
                                            required
                                            value={form.position}
                                            onChange={handle}
                                            className="bg-[#f7f8fc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        >
                                            <option value="">Select your role</option>
                                            <option value="DSA / Connector">DSA / Connector</option>
                                            <option value="Real Estate Agent">Real Estate Agent</option>
                                            <option value="CA / Financial Advisor">CA / Financial Advisor</option>
                                            <option value="Bank / NBFC Employee">Bank / NBFC Employee</option>
                                            <option value="Individual Referrer">Individual Referrer</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>What kind of clients do you work with?</label>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            placeholder="E.g. home buyers, SME owners, salaried professionals..."
                                            value={form.message}
                                            onChange={handle}
                                            className="bg-[#f7f8fc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#0B2E6F] transition-colors resize-none"
                                            style={{ fontFamily: "Work Sans, sans-serif" }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-2 bg-[#0B2E6F] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#0a2660] active:scale-95 transition-all duration-200"
                                        style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                        {loading ? "Submitting..." : "Register as Partner →"}
                                    </button>
                                </form>
                            )}
                            {error && (
                                <p className="font-inter text-center text-red-500 text-xs">{error}</p>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            <Footer />
        </>
    );
}
const partnerCards = [
    { num: "01", tag: "Industry Exposure", title: "Work With Top Lenders", desc: "Direct access to leading banks and NBFCs across India with real financial products." },
    { num: "02", tag: "Growth-First Culture", title: "Structured Mentorship", desc: "Certifications, mentorship programs, and fast-tracked growth for high performers." },
    { num: "03", tag: "Collaborative Team", title: "Visible Contribution", desc: "A tight-knit team where your ideas are heard and your work directly shapes outcomes." },
    { num: "04", tag: "Choice", title: "Choice Of Access", desc: "Self onboarding or assisted by a dedicated Relationship Officer — your preference." },
    { num: "05", tag: "Recognition", title: "Best In Class Partner Loyalty Program", desc: "Choice for top performers to become part of an elite club with exclusive rewards." },
    { num: "06", tag: "TAT", title: "Best In Class TAT", desc: "Simplified documentation and reimagined journeys for faster loan processing." },
];

function PartnerCarousel() {
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("left");
    const [current, setCurrent] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const total = partnerCards.length;

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const prev = () => {
        if (animating) return;
        setDirection("right");
        setAnimating(true);
        setTimeout(() => {
            setCurrent((p) => (p === 0 ? total - visibleCount : p - 1));
            setAnimating(false);
        }, 300);
    };

    const next = () => {
        if (animating) return;
        setDirection("left");
        setAnimating(true);
        setTimeout(() => {
            setCurrent((p) => (p + 1) % (total - visibleCount + 1));
            setAnimating(false);
        }, 300);
    };

    const visible = Array.from({ length: visibleCount }, (_, offset) =>
        partnerCards[(current + offset) % total]
    );

    return (
        <div>
            <div className="relative flex items-center gap-4">
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0B2E6F] flex items-center justify-center hover:bg-[#0B2E6F] group transition-colors duration-200"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8l4-4" stroke="#0B2E6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200" />
                    </svg>
                </button>

                {/* Cards */}
                <div
                    className="flex-1 flex items-stretch gap-0 overflow-hidden"
                    style={{
                        transform: animating
                            ? `translateX(${direction === "left" ? "-40px" : "40px"})`
                            : "translateX(0)",
                        opacity: animating ? 0 : 1,
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                    }}
                >
                    {visible.map((item, i) => (
                        <div key={`${item.num}-${i}`} className="relative flex-1 flex items-center">
                            <div
                                className="relative z-10 flex-1 rounded-3xl p-6 sm:p-8 bg-white"
                                style={{
                                    border: "2px solid #0B2E6F",
                                    boxShadow: "0 2px 24px 0 rgba(11,46,111,0.07)",
                                }}
                            >
                                <span className="text-[#D4A437] font-bold text-2xl block mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                                    {item.num}
                                </span>
                                <span className="text-[#D4A437] text-xs font-semibold tracking-widest uppercase block mb-3" style={{ fontFamily: "Work Sans, sans-serif" }}>
                                    {item.tag}
                                </span>
                                <h3 className="text-[#0B2E6F] font-bold text-base mb-2 uppercase" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "0.02em" }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Work Sans, sans-serif" }}>
                                    {item.desc}
                                </p>
                            </div>

                            {i < visibleCount - 1 && (
                                <div className="hidden md:flex items-center flex-shrink-0 w-12">
                                    <div className="relative w-full">
                                        <div className="h-0.5 w-full bg-[#0B2E6F]" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#0B2E6F] bg-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0B2E6F] flex items-center justify-center hover:bg-[#0B2E6F] group transition-colors duration-200"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="#0B2E6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: total - visibleCount + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-4 bg-[#0B2E6F]" : "w-3 h-3 bg-[#0B2E6F]/20"}`}
                    />
                ))}
            </div>
        </div>
    );
}