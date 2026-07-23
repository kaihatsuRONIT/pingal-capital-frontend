"use client";
import { Star } from "lucide-react";

const values = [
  { title: "Integrity", description: "Doing what's right, always" },
  { title: "Client-Centricity", description: "Your goals drive our solutions" },
  { title: "Excellence", description: "Precision and performance" },
  { title: "Innovation", description: "Smarter financial solutions" },
  { title: "Trust", description: "Lasting relationships" },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="font-playfair text-center mb-3"
          style={{ fontSize: "60px", fontWeight: 700, lineHeight: "48px" }}
        >
          <span style={{ color: "#0B1C30" }}>CORE </span>
          <span style={{ color: "#D4A437" }}>VALUES</span>
        </h2>

        {/* Subtext */}
        <p
          className="font-inter text-center text-gray-400 mb-14 mx-auto"
          style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
        >
          At Pingal Capital, our goal is to make real estate and funding solutions simple, trustworthy, and accessible for everyone.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-2xl p-6 border-1 border-[#C3C5D9]"
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0px 12px 24px -4px #0000002A, 0px 20px 30px -3px #0000001A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "#0B2E6F",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "rotate(360deg)"}
                onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}
              >
                <Star size={20} fill="#fff" color="#fff" />
              </div>

              {/* Title */}
              <h3
                className="font-inter"
                style={{ color: "#0B2E6F", fontSize: "16px", fontWeight: 700, lineHeight: "24px" }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="font-inter text-gray-400 text-center"
                style={{ fontWeight: 500, fontSize: "12px", lineHeight: "16px" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}