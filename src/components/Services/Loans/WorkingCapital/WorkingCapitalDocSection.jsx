import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckCircle, AlertCircle, User, Briefcase, BarChart2, FileText } from "lucide-react";

const categories = [
    {
        icon: <User size={22} style={{ color: "#0B2E6F" }} />,
        title: "KYC Documents",
        items: [
            "PAN Card — Applicant & Co-Applicant",
            "Aadhaar Card — Applicant & Co-Applicant",
            "Passport size photographs",
            "Address proof (Utility bill / Rent agreement)",
        ],
    },
    {
        icon: <Briefcase size={22} style={{ color: "#0B2E6F" }} />,
        title: "Business Documents",
        items: [
            "Business Registration Certificate",
            "GST Registration Certificate",
            "Partnership Deed / MOA & AOA (if applicable)",
            "Shop & Establishment Certificate",
            "Trade License (if applicable)",
        ],
    },
    {
        icon: <BarChart2 size={22} style={{ color: "#0B2E6F" }} />,
        title: "Financial Documents",
        items: [
            "Last 2-3 years ITR with computation",
            "Audited Balance Sheet & P&L Statement",
            "Last 12 months bank statements",
            "GST returns for last 12 months",
            "Existing loan sanction letters (if any)",
        ],
    },
    {
        icon: <FileText size={22} style={{ color: "#0B2E6F" }} />,
        title: "For Secured Working Capital",
        items: [
            "Property documents (Title Deed / Sale Deed)",
            "Latest property tax receipt",
            "Approved building plan",
            "Stock statements / Debtors list",
            "Insurance policy of collateral (if applicable)",
        ],
    },
];

const eligibility = [
    "Business vintage of at least 1-2 years",
    "Minimum annual turnover as per lender norms",
    "Good credit score (650+ preferred)",
    "Positive cash flow and repayment capacity",
    "Valid GST registration for most products",
    "No major defaults or NPAs in credit history",
];

export default function WorkingCapitalDocumentationSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#0B2E6F" }}>
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Heading */}
                <AnimateOnScroll direction="right" delay={0.1}>
                    <div className="text-center">
                        <h2
                            className="font-playfair text-white mb-3"
                            style={{ fontSize: "42px", fontWeight: 700, lineHeight: "56px" }}
                        >
                            Documents Required
                        </h2>
                        <p
                            className="font-inter text-blue-200 mx-auto"
                            style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "480px" }}
                        >
                            Prepare these essentials to ensure a smooth and fast working capital loan approval.
                        </p>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Documents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-8"
                                style={{
                                    background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                                    boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease",

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
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "#EEF2FF" }}
                                    >
                                        {cat.icon}
                                    </div>
                                    <h3
                                        className="font-playfair font-bold"
                                        style={{ color: "#0B2E6F", fontSize: "17px", lineHeight: "26px" }}
                                    >
                                        {cat.title}
                                    </h3>
                                </div>

                                {/* Items */}
                                <ul className="space-y-2.5">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <CheckCircle size={15} style={{ color: "#D4A437", flexShrink: 0, marginTop: "3px" }} />
                                            <span
                                                className="font-inter text-gray-600"
                                                style={{ fontSize: "13px", lineHeight: "22px" }}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={0.1}>
                    {/* Eligibility */}
                    <div
                        className="rounded-2xl p-8"
                        style={{
                            background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                            boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                        }}
                    >
                        <h3
                            className="font-playfair font-bold mb-6"
                            style={{ color: "#0B2E6F", fontSize: "22px", lineHeight: "32px" }}
                        >
                            Eligibility Criteria
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {eligibility.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle size={16} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                                    <span
                                        className="font-inter text-gray-600"
                                        style={{ fontSize: "14px", lineHeight: "22px" }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* Disclaimer */}
                    <div
                        className="flex items-start gap-3 rounded-xl px-5 py-4"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        <AlertCircle size={18} style={{ color: "#D4A437", flexShrink: 0, marginTop: "2px" }} />
                        <p
                            className="font-inter text-blue-200"
                            style={{ fontSize: "13px", lineHeight: "22px" }}
                        >
                            Document requirements may vary depending on the lender and type of working capital facility. Our advisors will guide you through the exact checklist based on your business profile.
                        </p>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}