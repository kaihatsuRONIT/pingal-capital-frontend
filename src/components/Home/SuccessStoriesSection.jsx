"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const testimonials = [
  {
    stars: 5,
    quote:
      "As an MSME, we always struggled to get the right funding. Pingal Capital not only provided us with capital but also guided us through financial planning. They're true partners in our growth journey.",
    name: "Amit Patel",
    role: "Proprietor",
    company: "Craft Exports India",
    tags: [
      { label: "MSME Funding - ₹80 Lakhs", type: "gray" },
      { label: "Export Orders Doubled", type: "gold" },
    ],
  },
  {
    stars: 5,
    quote:
      "As a small business owner, I needed reliable funding to expand my unit. Pingal Capital delivered a hassle-free experience and provided working capital at a crucial time. Their support and professionalism are unmatched in the industry.",
    name: "Mohd. Irfan",
    role: "Owner",
    company: "Apex Garments",
    tags: [
      { label: "Working Capital - ₹50 Lakhs", type: "gray" },
      { label: "Business Unit Expanded", type: "gold" },
    ],
  },
  {
    stars: 5,
    quote:
      "Pingal Capital helped us choose the right insurance and investment options for our family. Their experts explained everything in simple terms and made the whole process smooth. We now have peace of mind knowing our future is protected.",
    name: "Preeti & Raj Malhotra",
    role: "Business Owners",
    company: "New Delhi",
    tags: [
      { label: "Financial Planning - ₹1 Crore", type: "gray" },
      { label: "Future Secured", type: "gold" },
    ],
  },
  {
    stars: 5,
    quote:
      "Pingal Capital has been a game-changer for our business. Their deep understanding of financial structuring and their ability to tailor funding solutions to our unique needs helped us scale our operations efficiently. Their team is highly professional and always goes the extra mile.",
    name: "Ravi Mehta",
    role: "Director",
    company: "Mehta Infrastructure Pvt. Ltd.",
    tags: [
      { label: "Project Funding - ₹5 Crore", type: "gray" },
      { label: "Operations Scaled 3x", type: "gold" },
    ],
  },
];

export default function SuccessStoriesSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const autoPlayRef = useRef(null);
  const total = testimonials.length;

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((current + 1) % total, "right");
  const prev = () => goTo((current - 1 + total) % total, "left");

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [current, animating]);

  const t = testimonials[current];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <AnimateOnScroll direction="right" delay={0.1}>
          {/* Heading */}
          <h2
            className="font-playfair text-center mb-3"
            style={{ fontSize: "60px", fontWeight: 500, lineHeight: "60px" }}
          >
            <span style={{ color: "#0B2E6F" }}>Success </span>
            <span style={{ color: "#D4A437" }}>Stories</span>
          </h2>


          <p
            className="font-inter text-center text-gray-400 mb-12"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: "28px" }}
          >
            Hear from businesses that have transformed their growth trajectory with Pingal Capital
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Card */}
          <div
            className="rounded-2xl px-12 py-10 mb-8"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
              boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
              opacity: animating ? 0 : 1,
              transform: animating
                ? direction === "right"
                  ? "translateX(20px)"
                  : "translateX(-20px)"
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={20} fill="#D4A437" color="#D4A437" />
              ))}
            </div>

            {/* Quote */}
            <p
              className="font-inter text-center text-gray-600 mb-8"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "16px", lineHeight: "30px", maxWidth: "620px", margin: "0 auto 32px" }}
            >
              "{t.quote}"
            </p>

            {/* Name / Role / Company */}
            <div className="text-center mb-6">
              <div
                className="font-playfair font-semibold mb-1"
                style={{ color: "#0B2E6F", fontSize: "24px", lineHeight: "32px", fontWeight: 400 }}
              >
                {t.name}
              </div>
              <div
                className="font-inter text-gray-400 mb-1"
                style={{ fontSize: "16px", lineHeight: "24px", fontWeight: 400 }}
              >
                {t.role}
              </div>
              <div
                className="font-inter font-medium"
                style={{ color: "#D4A437", fontSize: "18px", lineHeight: "28px", fontWeight: 400 }}
              >
                {t.company}
              </div>
            </div>

            {/* Tags */}
            <div className="flex justify-center gap-3 flex-wrap">
              {t.tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-inter px-4 py-1.5 rounded-full text-xs font-medium"
                  style={
                    tag.type === "gold"
                      ? { background: "#E6C76A", color: "#0B2E6F" }
                      : { background: "#f6f8fe", color: "#0B2E6F" }
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-9 h-9 flex items-center justify-center rounded-full border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: "#D4A437" }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} color="#D4A437" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "right" : "left")}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#D4A437" : "#e2e8f0",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 flex items-center justify-center rounded-full border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: "#D4A437" }}
              aria-label="Next"
            >
              <ChevronRight size={16} color="#D4A437" />
            </button>
          </div>

        </AnimateOnScroll>

      </div>
    </section>
  );
}