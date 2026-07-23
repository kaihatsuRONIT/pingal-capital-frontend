import AnimateOnScroll from "@/components/AnimateOnScroll";
import { User, FileText, Home, AlertCircle, CheckCircle } from "lucide-react";

const categories = [
    {
        icon: <User size={22} style={{ color: "#0B2E6F" }} />,
        title: "Identity & Visa Documents",
        items: [
            "Valid Passport & Visa",
            "OCI / PIO Card (if applicable)",
            "PAN Card — Applicant & Co-Applicant",
            "Aadhar Card (if available)",
        ],
    },
    {
        icon: <FileText size={22} style={{ color: "#0B2E6F" }} />,
        title: "Income & Financial Proof",
        items: [
            "Overseas and Indian Bank Statements (6–12 months)",
            "Salary Slips / Income Proof from abroad",
            "ITRs filed in India (if applicable)",
            "Employment Contract or Appointment Letter",
            "Work Permit / Residence Permit abroad",
        ],
    },
    {
        icon: <Home size={22} style={{ color: "#0B2E6F" }} />,
        title: "Property Documents",
        items: [
            "Title Deed / Sale Deed of the property",
            "Approved Building Plan",
            "Builder Buyer Agreement (for under-construction)",
            "Allotment Letter issued by Builder",
            "Payment Receipts made to Builder",
            "Previous Property Chain Documents",
        ],
    },
    {
        icon: <FileText size={22} style={{ color: "#0B2E6F" }} />,
        title: "Power of Attorney (POA)",
        items: [
            "POA attested by Indian Consulate (if applying remotely)",
            "POA holder's ID proof and address proof",
            "Authorization letter for documentation management",
        ],
    },
];

const eligibility = [
    "Valid NRI / PIO / OCI status",
    "Stable overseas income and credit profile",
    "Age, repayment capacity, and financial documentation",
    "Property value and type (for secured loans)",
    "Local co-applicant or a POA holder in India for documentation management",
];

export default function NRILoanDocumentationSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#0B2E6F" }}>
            <div className="max-w-6xl mx-auto space-y-12">
                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* Heading */}
                    <div className="text-center">
                        <h2
                            className="font-playfair text-white mb-3"
                            style={{ fontSize: "42px", fontWeight: 700, lineHeight: "56px" }}
                        >
                            Documents Commonly Required
                        </h2>
                        <p
                            className="font-inter text-blue-200 mx-auto"
                            style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "520px" }}
                        >
                            Prepare these essentials to ensure a seamless NRI loan approval experience. Requirements may vary depending on the bank and loan type.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Documents Grid */}
                <AnimateOnScroll direction="up" delay={0.1}>

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
                                        className="font-inter font-bold"
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
                            Eligibility Factors for NRI Loan Services
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
                            Document requirements may vary depending on the bank and loan type. Our advisors will guide you through the exact checklist based on your specific situation.
                        </p>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}