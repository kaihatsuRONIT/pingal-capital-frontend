import Image from "next/image";
import { Users } from "lucide-react";
import { LuCircleCheckBig } from "react-icons/lu";
import AnimateOnScroll from "../AnimateOnScroll";

const badges = [
  { icon: <LuCircleCheckBig size={20} style={{ color: "#0B2E6F" }} />, value: "15+ Years", label: "Experience" },
  { icon: <Users size={20} style={{ color: "#0B2E6F" }} />, value: "10k+ Clients", label: "Trusted Us" },
];

export default function AboutDestinationSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Image */}
        <div className="w-full lg:w-[460px] flex-shrink-0">
          <div className="rounded-lg overflow-hidden" style={{ boxShadow: "0px 25px 50px -12px #00000040" }}>
            <Image
              src="/aboutDestImage.png"
              alt="Finance meeting"
              width={460}
              height={600}
              className="w-full object-cover"
              style={{ height: '600px' }}
            />
          </div>
        </div>
        <AnimateOnScroll direction="up" delay={0.1}>
          {/* Right — Content */}
          <div className="flex-1">

            {/* Heading */}
            <h2
              className="font-inter mb-5"
              style={{
                color: "#0B1C30",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "50px",
                letterSpacing: "-0.4px"
              }}
            >
              Capital That Moves You Forward
            </h2>

            {/* Paragraphs */}
            <p
              className="font-inter mb-4"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: "#434656" }}
            >
              At Pingal Capital, we believe finance is not just about loans or investments—it is about empowering people, businesses, and families to achieve their dreams with confidence. Every financial decision has the potential to create opportunities, build wealth, and secure a brighter future. Our mission is to make that journey simple, transparent, and rewarding.
            </p>
            <p
              className="font-inter text-gray-600 mb-4"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
            >
              Founded with a vision to redefine financial advisory services, Pingal Capital has grown into a trusted financial partner for individuals, entrepreneurs, professionals, SMEs, MSMEs, and corporate clients.
            </p>
            <p
              className="font-inter text-gray-600 mb-4"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
            >
              With an extensive network of leading Banks, NBFCs, Housing Finance Companies, Investment Partners, we provide unbiased guidance and seamless access to a comprehensive range of financial products. From Home Loans, Loan Against Property, Business Loans, Working Capital, and Structured Finance and Real Estate Advisory, we offer integrated solutions under one roof.
            </p>
            <p
              className="font-inter text-gray-600 mb-8"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px" }}
            >
              Capital That Moves You Forward is more than our tagline—it reflects our promise to empower every client with the right financial solutions, expert advice, and unwavering support to achieve sustainable growth and long-term prosperity
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-8">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    {badge.icon}
                  </div>
                  <div>
                    <div
                      className="font-inter font-bold"
                      style={{ color: "#0B2E6F", fontSize: "15px", lineHeight: "22px" }}
                    >
                      {badge.value}
                    </div>
                    <div
                      className="font-inter text-gray-400"
                      style={{ fontSize: "12px", lineHeight: "18px" }}
                    >
                      {badge.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </AnimateOnScroll>
      </div>
    </section>
  );
}