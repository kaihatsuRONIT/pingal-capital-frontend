"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
    { name: "County Group", url: '/partners/financial/County-Group.jpeg' },
    { name: "Godrej Properties", url: '/partners/financial/Godrej-Properties-Logo.webp' },
    { name: "ACE Group", url: '/partners/financial/ACE-Group.jpeg' },
    { name: "M3M", url: '/partners/financial/M3M.jpeg' },
    { name: "DLF Groups", url: '/partners/financial/DLF.webp' },
    { name: "Experion", url: '/partners/financial/Experion.jpeg' },
    { name: "Gaur Group", url: '/partners/financial/Gaur-Group.webp' },
    { name: "Prestige Group", url: '/partners/financial/Prestige.webp' },
    { name: "Indian Bank", url: '/partners/banking/Indian-Bank.jpeg' },
    { name: "Indian Overseas Bank", url: '/partners/banking/Indian-Overseas-Bank.jpeg' },
    { name: "Punjab National Bank", url: '/partners/banking/Punjab-National-Bank.jpeg' },
    { name: "SBI Bank", url: '/partners/banking/SBI-Bank.jpeg' },
    { name: "TATA Capital", url: '/partners/banking/TATA-Capital.jpeg' },
    { name: "ICICI Bank", url: '/partners/banking/ICICI-Bank.jpeg' },
    { name: "Axis Bank", url: '/partners/banking/Axis-Bank.jpeg' },
];

function getVisibleCount() {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
}

export default function PartnersSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("right");
    const [visibleCount, setVisibleCount] = useState(4);
    const autoPlayRef = useRef(null);
    const total = partners.length;

    useEffect(() => {
        const update = () => setVisibleCount(getVisibleCount());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const next = () => {
        if (animating) return;
        setDirection("right");
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % total);
            setAnimating(false);
        }, 350);
    };

    const prev = () => {
        if (animating) return;
        setDirection("left");
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + total) % total);
            setAnimating(false);
        }, 350);
    };

    useEffect(() => {
        autoPlayRef.current = setInterval(next, 3000);
        return () => clearInterval(autoPlayRef.current);
    }, [animating]);

    // Stable identity: use partner.name as key, not position index
    const visiblePartners = Array.from({ length: visibleCount }, (_, i) =>
        partners[(current + i) % total]
    );

    return (
        <section className="bg-white py-16 px-6">
            {/* Hidden preload: all images fetched once on mount, cached by browser */}
            <div style={{ display: 'none' }} aria-hidden="true">
                {partners.map((p) => (
                    <img key={p.name} src={p.url} alt="" />
                ))}
            </div>

            <div className="max-w-full">
                <h2
                    className="font-playfair text-center mb-12"
                    style={{ fontSize: "clamp(32px, 4vw, 60px)", fontWeight: 500, lineHeight: "1.2" }}
                >
                    <span style={{ color: "#0B2E6F" }}>Our Financial </span>
                    <span style={{ color: "#D4A437" }}>Partners</span>
                </h2>

                <div className="flex items-center gap-4">
                    <button
                        onClick={prev}
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} color="#0B2E6F" />
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex items-center justify-center gap-4 sm:gap-8"
                            style={{
                                opacity: animating ? 0 : 1,
                                transform: animating
                                    ? direction === "right" ? "translateX(20px)" : "translateX(-20px)"
                                    : "translateX(0)",
                                transition: "opacity 0.35s ease, transform 0.35s ease",
                            }}
                        >
                            {visiblePartners.map((partner, index) => (
                                <div
                                    key={partner.name}
                                    className="flex items-center justify-center px-3 sm:px-6 py-3"
                                    style={{
                                        borderRight: index < visibleCount - 1 ? "1px solid #f0f0f0" : "none",
                                        flex: 1,
                                    }}
                                >
                                    <div className="flex items-center justify-center w-full" style={{ height: "150px" }}>
                                        <img
                                            src={partner.url}
                                            alt={partner.name}
                                            style={{ maxHeight: "150px", maxWidth: "100%", objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={next}
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Next"
                    >
                        <ChevronRight size={18} color="#0B2E6F" />
                    </button>
                </div>
            </div>
        </section>
    );
}