"use client";
import { useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";

export default function FAQ({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section
            id="faq"
            style={{
                background: "#f8fafc",
                padding: "80px 0",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Section Header */}
                    <div style={{ textAlign: "center", marginBottom: "48px" }}>
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#D4A437",
                                marginBottom: "12px",
                            }}
                        >
                            Got Questions?
                        </span>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "40px",
                                fontWeight: 700,
                                color: "#1a2472",
                                lineHeight: "1.2",
                                margin: "0 0 14px",
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "rgba(11, 28, 48, 0.60)",
                                lineHeight: "24px",
                                maxWidth: "480px",
                                margin: "0 auto",
                            }}
                        >
                            Everything you need to know about Non-Residential Premises Loans.
                            Can't find an answer?{" "}
                            <a
                                href="/contact"
                                style={{ color: "#D4A437", fontWeight: 600, textDecoration: "none" }}
                            >
                                Talk to an advisor.
                            </a>
                        </p>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* FAQ Items */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        border: isOpen ? "1.5px solid #1a2472" : "1px solid #e2e8f0",
                                        overflow: "hidden",
                                        transition: "border-color 0.2s",
                                    }}
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "16px",
                                            padding: "20px 24px",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                color: "#0b1c30",
                                                lineHeight: "22px",
                                            }}
                                        >
                                            {faq.question}
                                        </span>

                                        {/* Icon */}
                                        <span
                                            style={{
                                                flexShrink: 0,
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: isOpen ? "#1a2472" : "#f1f5f9",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "background 0.2s",
                                            }}
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                style={{
                                                    transition: "transform 0.25s",
                                                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                                }}
                                            >
                                                <path
                                                    d="M7 2v10M2 7h10"
                                                    stroke={isOpen ? "#fff" : "#1a2472"}
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        style={{
                                            maxHeight: isOpen ? "400px" : "0",
                                            overflow: "hidden",
                                            transition: "max-height 0.3s ease",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: "14px",
                                                color: "rgba(11, 28, 48, 0.70)",
                                                lineHeight: "24px",
                                                margin: "0",
                                                padding: "0 24px 22px",
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}