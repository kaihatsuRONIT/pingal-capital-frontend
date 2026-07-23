import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Briefcase, Store, CreditCard, DollarSign, Building, BarChart2, FileText } from "lucide-react";
import { IoMdCash } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
import { RiBankLine, RiHome3Fill } from "react-icons/ri";

const categories = [
  {
    icon: <Briefcase size={22} style={{ color: "#0B2E6F" }} />,
    title: "Salaried Professionals",
    items: [
      {
        icon: <CreditCard size={18} style={{ color: "#0B2E6F" }} />,
        title: "Identity Documents",
        description: "Pan Card, Aadhar Card, Driving License, and Voter ID of the applicant.",
      },
      {
        icon: <DollarSign size={18} style={{ color: "#0B2E6F" }} />,
        title: "Income Verification",
        description: "Last 6 months' salary slips and 2 years of Form 16 from your employer.",
      },
      {
        icon: <Building size={18} style={{ color: "#0B2E6F" }} />,
        title: "Banking & Employment",
        description: "1 year latest bank statement and official Office ID card.",
      },
    ],
  },
  {
    icon: <Store size={22} style={{ color: "#0B2E6F" }} />,
    title: "Self-Employed & HNIs",
    items: [
      {
        icon: <FileText size={18} style={{ color: "#0B2E6F" }} />,
        title: "Identity & Governance",
        description: "PAN, Aadhaar, DL, and Voter ID for all applicants. Company PAN, MOA, AOA, Director List, Shareholding Pattern, and GST Certificate.",
      },
      {
        icon: <BarChart2 size={18} style={{ color: "#0B2E6F" }} />,
        title: "Financial & Tax",
        description: "3 Years latest ITR with Computation & Financials of Firm; 1-year bank statements (Current & Savings). 1 Year Latest GST Returns and Professional Degree/Certifications",
      },
      {
        icon: <CreditCard size={18} style={{ color: "#0B2E6F" }} />,
        title: "Executive Financials",
        description: "Director KYC Documents. 3 Years latest ITR with Computation & Financials for all individual directors.",
      },
    ],
  },
];

export default function DocumentationSection() {
  return (
    <div className="mb-20">
      <section className="py-20 px-6" style={{ background: "#0B2E6F" }}>
        <div className="max-w-6xl mx-auto">

          <AnimateOnScroll direction="right" delay={0.1}>

            {/* Heading */}
            <h2
              className="font-playfair text-white text-center mb-3"
              style={{ fontSize: "42px", fontWeight: 700, lineHeight: "56px" }}
            >
              Streamlined Documentation
            </h2>

            {/* Subtext */}
            <p
              className="font-inter text-center text-blue-200 mb-12 mx-auto"
              style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "15px", lineHeight: "26px", maxWidth: "480px" }}
            >
              We value your time. Prepare these essentials to ensure a seamless approval experience.
            </p>


          </AnimateOnScroll>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="rounded-2xl p-8"
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
                <AnimateOnScroll direction="up" delay={0.1}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8 pl-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#EEF2FF" }}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      className="font-inter font-bold"
                      style={{ color: "#0B2E6F", fontSize: "20px", lineHeight: "28px" }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-6">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-10">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "#EEF2FF", opacity: "40%" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4
                            className="font-inter font-semibold mb-1"
                            style={{ color: "#0B1C30", fontSize: "14px", lineHeight: "22px" }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="font-inter text-gray-500"
                            style={{ fontSize: "72px", fontWeight: 500, lineHeight: "90px", fontSize: "13px", lineHeight: "22px" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
function TrustedPartners() {
  return (
    <div style={{ background: "#eef0f7", padding: "2rem 2.5rem", fontFamily: "sans-serif" }}>
      <p style={{ textAlign: "center", fontSize: 11, letterSpacing: "0.15em", color: "#8a90a8", textTransform: "uppercase", marginBottom: "35px", fontWeight: 500 }}>
        Trusted by institutional partners
      </p>
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
        {[
          { Icon: RiBankLine, label: "Deutsche Bank" },
          { Icon: IoMdCash, label: "Tata Capital" },
          { Icon: RiHome3Fill, label: "HDFC Home" },
          { Icon: IoShieldOutline, label: "Chola" },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#a0a8c4",
              transition: "color 0.25s ease, transform 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#1a2472";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#a0a8c4";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon size={36} />
            <span style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: "32px" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}