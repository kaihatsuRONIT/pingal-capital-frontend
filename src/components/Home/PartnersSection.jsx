"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
    { name: "Bank of Baroda", src: "/partners/BOB.png" },
    { name: "IDBI Bank", src: "/partners/IDBI.png" },
    { name: "Deutsche Bank", src: "/partners/Deutsche.png" },
    { name: "Canara Bank", src: "/partners/Canara.png" },
    { name: "Tata Capital", src: "/partners/TataCap.png" },
    { name: "Chola", src: "/partners/Chola.png" },
    { name: "Hinduja Housing Finance", src: "/partners/HindujaFin.png" },
    { name: "Aditya Birla Group", src: "/partners/AdityaBirla.png" },
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

    const visiblePartners = Array.from({ length: visibleCount }, (_, i) => partners[(current + i) % total]);

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-full">

                {/* Heading */}
                <h2
                    className="font-playfair text-center mb-12"
                    style={{ fontSize: "clamp(32px, 4vw, 60px)", fontWeight: 500, lineHeight: "1.2" }}
                >
                    <span style={{ color: "#0B2E6F" }}>Our Financial </span>
                    <span style={{ color: "#D4A437" }}>Partners</span>
                </h2>

                {/* Carousel */}
                <div className="flex items-center gap-4">

                    {/* Left Arrow */}
                    <button
                        onClick={prev}
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} color="#0B2E6F" />
                    </button>

                    {/* Logos */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex items-center justify-center gap-4 sm:gap-8"
                            style={{
                                opacity: animating ? 0 : 1,
                                transform: animating
                                    ? direction === "right"
                                        ? "translateX(20px)"
                                        : "translateX(-20px)"
                                    : "translateX(0)",
                                transition: "opacity 0.35s ease, transform 0.35s ease",
                            }}
                        >
                            {visiblePartners.map((partner, index) => (
                                <div
                                    key={`${partner.name}-${index}`}
                                    className="flex items-center justify-center px-3 sm:px-6 py-3"
                                    style={{
                                        borderRight: index < visibleCount - 1 ? "1px solid #f0f0f0" : "none",
                                        flex: 1,
                                    }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full"
                                        style={{ height: "60px" }}
                                    >
                                        <img
                                            src={partner.src}
                                            alt={partner.name}
                                            style={{ maxHeight: "60px", maxWidth: "100%", objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
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