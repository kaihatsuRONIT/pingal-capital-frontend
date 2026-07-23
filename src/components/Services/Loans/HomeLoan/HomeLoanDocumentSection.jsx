import AnimateOnScroll from "@/components/AnimateOnScroll";
import { User, Briefcase, Building2, Home } from "lucide-react";

const categories = [
    {
        icon: <User size={22} style={{ color: "#0B2E6F" }} />,
        title: "Salaried Individuals",
        items: [
            "Pan Card — Applicant & Co Applicant",
            "Aadhar Card — Applicant & Co Applicant",
            "Driving License — Applicant & Co Applicant",
            "Voter ID Card — Applicant & Co Applicant",
            "6 Months' Salary Slip",
            "2 Years Form 16 from Employer",
            "1 Year's Latest Bank Statement",
            "Office ID Card",
        ],
    },
    {
        icon: <Briefcase size={22} style={{ color: "#0B2E6F" }} />,
        title: "Self Employed / Businessmen & Professionals",
        subsections: [
            {
                label: "Individual Documents",
                items: [
                    "Pan Card — Applicant & Co Applicant",
                    "Aadhar Card — Applicant & Co Applicant",
                    "Driving License — Applicant & Co Applicant",
                    "Voter ID Card — Applicant & Co Applicant",
                    "3 Years Latest ITR with Computation & Financials of Firm",
                    "1-Year Latest Bank Statement (Current & Savings Account)",
                    "GST Certificate & 1 Year Latest GST Return",
                    "Professional Degree",
                ],
            },
            {
                label: "In case of Private Limited Company",
                items: [
                    "Company PAN Card",
                    "MOA, AOA, List of Directors and Shareholding Pattern",
                    "GST Certificate",
                    "3 Years Latest ITR with Computation & Financials of Company",
                    "Director KYC Documents",
                    "All Directors — 3 Years Latest ITR with Computation & Financials",
                ],
            },
        ],
    },
    {
        icon: <Building2 size={22} style={{ color: "#0B2E6F" }} />,
        title: "Property Documents — Builder Purchase",
        items: [
            "Builder Buyer Agreement",
            "Allotment Letter issued by Builder",
            "Payment Receipts made to Builder",
        ],
    },
    {
        icon: <Home size={22} style={{ color: "#0B2E6F" }} />,
        title: "Property Documents — Resale Purchase",
        items: [
            "Agreement to Sale",
            "Recent Sale / Lease Deed",
            "Previous Property Chain",
        ],
    },
];

function CheckItem({ text }) {
    return (
        <li className="flex items-start gap-2.5">
            <span style={{ color: "#D4A437", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✓</span>
            <span
                className="font-inter text-gray-600"
                style={{ fontSize: "13px", lineHeight: "22px" }}
            >
                {text}
            </span>
        </li>
    );
}

export default function HomeLoanDocumentationSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#0B2E6F" }}>
            <div className="max-w-6xl mx-auto">
                <AnimateOnScroll direction="right" delay={0.1}>
                    {/* Heading */}
                    <h2
                        className="font-playfair text-white text-center mb-3"
                        style={{ fontSize: "42px", fontWeight: 700, lineHeight: "56px" }}
                    >
                        Documents Required
                    </h2>
                    <p
                        className="font-inter text-center text-blue-200 mb-12 mx-auto"
                        style={{ fontSize: "15px", lineHeight: "26px", maxWidth: "480px" }}
                    >
                        Prepare these essentials to ensure a seamless approval experience for your Mortgage & Home Loan.
                    </p>
                </AnimateOnScroll>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-8"
                            style={{
                                background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
                                boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
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

                            {/* Plain items */}
                            {cat.items && (
                                <ul className="space-y-2">
                                    {cat.items.map((item, i) => (
                                        <CheckItem key={i} text={item} />
                                    ))}
                                </ul>
                            )}

                            {/* Subsections */}
                            {cat.subsections && (
                                <div className="space-y-6">
                                    {cat.subsections.map((sub, si) => (
                                        <div key={si}>
                                            <div
                                                className="font-inter font-semibold mb-3"
                                                style={{ color: "#0B2E6F", fontSize: "13px", lineHeight: "20px" }}
                                            >
                                                {sub.label}
                                            </div>
                                            <ul className="space-y-2">
                                                {sub.items.map((item, i) => (
                                                    <CheckItem key={i} text={item} />
                                                ))}
                                            </ul>
                                            {si < cat.subsections.length - 1 && (
                                                <hr className="mt-5" style={{ borderColor: "#e2e8f0" }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}