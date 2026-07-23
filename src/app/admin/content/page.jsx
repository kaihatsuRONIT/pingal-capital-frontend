"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, FileText, Edit3, LogOut, Save, ChevronDown } from "lucide-react";
import Link from "next/link";

const pages = [
    { value: "home", label: "Home Page" },
    { value: "about", label: "About Page" },
    { value: "mortgage", label: "Mortgage Loan" },
    { value: "home-loan", label: "Home Loan" },
    { value: "nri", label: "NRI Loan" },
    { value: "balance-transfer", label: "Balance Transfer" },
    { value: "debt-consolidation", label: "Debt Consolidation" },
];

// Default content structure per page
const defaultContent = {
    home: {
        heroHeading: "Capital That Moves You Forward",
        heroSubtext: "Empowering businesses with strategic funding solutions, financial expertise, and growth-focused capital partnerships.",
        heroBadge: "Get Funding",
        stats: [
            { value: "500+", label: "Businesses Funded" },
            { value: "₹1000+ Cr", label: "Capital Facilitated" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+ Years", label: "Experience" },
        ],
    },
    about: {
        heroHeading: "Company Profile",
        heroSubtext: "Building trust through precision, innovation, and unwavering commitment to your financial growth.",
        founderName: "Ajay Sahore",
        founderRole: "Founder & CEO",
        founderQuote: "At Pingal Capital, we don't just manage wealth; we build legacies.",
        mission: "To Empower Customer With Smart, Flexible Financial And Insurance Solutions To Match Their Expectations & Need Under One Roof.",
        vision: "To Be A Leading Financial And Insurance Service Provider Known For Innovation, Customer Satisfaction & Empathy.",
    },
    mortgage: {
        heroHeading: "Secure Your Future with Pingal Capital Mortgage Strategies",
        heroSubtext: "Your Trusted Partner for Mortgage & Home Loans",
        heroBadge: "Bespoke Financing",
    },
    "home-loan": {
        heroHeading: "Turn Your Dream Home Into Reality with Pingal Capital",
        heroSubtext: "Affordable Home Loans Tailored to Your Needs",
        heroBadge: "Home Financing",
    },
    nri: {
        heroHeading: "Tailored Finance for Non-Resident Indians",
        heroSubtext: "Your Trusted NRI Financial Partner",
        heroBadge: "NRI Financing",
    },
    "balance-transfer": {
        heroHeading: "Balance Transfer & Top-Up Loans for Better Financial Terms",
        heroSubtext: "Switch Smarter. Save More. Access Extra Funds.",
        heroBadge: "Smart Refinancing",
    },
    "debt-consolidation": {
        heroHeading: "Simplify Your Debts Into One Smart Solution",
        heroSubtext: "One Loan. One EMI. Total Control.",
        heroBadge: "Debt Management",
    },
};

export default function AdminContentEditor() {
    const [selectedPage, setSelectedPage] = useState("home");
    const [content, setContent] = useState(defaultContent["home"]);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchContent(selectedPage);
    }, [selectedPage]);

    const fetchContent = async (page) => {
        setLoading(true);
        setSaved(false);
        console.log(page)
        const res = await fetch(`/api/content?page=${page}`);
        if (res.status === 401) { router.push("/admin/login"); return; }

        const json = await res.json().catch(() => ({}));
        const data = json?.content;
        setContent(data || defaultContent[page] || {});
        setLoading(false);
    };

    const handleSave = async () => {
        setSaving(true);
        await fetch("/api/content", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ page: selectedPage, data: content }),
        });
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const updateField = (key, value) => {
        setContent((prev) => ({ ...prev, [key]: value }));
    };

    const updateArrayField = (key, index, subKey, value) => {
        setContent((prev) => {
            const arr = [...(prev[key] || [])];
            arr[index] = { ...arr[index], [subKey]: value };
            return { ...prev, [key]: arr };
        });
    };

    const renderField = (key, value) => {
        if (Array.isArray(value)) {
            return (
                <div key={key} className="mb-6">
                    <label className="font-inter text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: "#888" }}>
                        {key}
                    </label>
                    <div className="space-y-3">
                        {value.map((item, i) => (
                            <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ background: "#F9FAFB", border: "1px solid #e2e8f0" }}>
                                {Object.keys(item).map((subKey) => (
                                    <div key={subKey} className="flex-1">
                                        <label className="font-inter text-xs text-gray-400 mb-1 block capitalize">{subKey}</label>
                                        <input
                                            type="text"
                                            value={item[subKey]}
                                            onChange={(e) => updateArrayField(key, i, subKey, e.target.value)}
                                            className="font-inter w-full px-3 py-2 text-sm rounded-lg border outline-none focus:border-blue-400"
                                            style={{ borderColor: "#e2e8f0", background: "#fff", color: "#333" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        const isLong = value?.length > 80;

        return (
            <div key={key} className="mb-5">
                <label className="font-inter text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "#888" }}>
                    {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                {isLong ? (
                    <textarea
                        value={value}
                        onChange={(e) => updateField(key, e.target.value)}
                        rows={3}
                        className="font-inter w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-blue-400 resize-none"
                        style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    />
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => updateField(key, e.target.value)}
                        className="font-inter w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-blue-400"
                        style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                    />
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen" style={{ background: "#F3F4F6" }}>

            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full w-60 flex flex-col" style={{ background: "#0B2E6F" }}>
                <div className="px-6 py-7 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <div className="font-playfair text-white font-bold text-lg">Pingal Capital</div>
                    <div className="font-inter text-blue-300 text-xs mt-0.5">Admin Panel</div>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-1">
                    {[
                        { label: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/admin" },
                        { label: "Submissions", icon: <FileText size={18} />, href: "/admin/submissions" },
                        { label: "Content Editor", icon: <Edit3 size={18} />, href: "/admin/content", active: true },
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-inter text-sm transition-colors"
                            style={{
                                color: item.active ? "#fff" : "rgba(255,255,255,0.75)",
                                background: item.active ? "rgba(255,255,255,0.12)" : "transparent",
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="px-4 py-6 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-inter text-sm w-full hover:bg-white/10 transition-colors"
                        style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main */}
            <div className="ml-60 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="font-playfair font-bold" style={{ color: "#0B2E6F", fontSize: "28px" }}>Content Editor</h1>
                        <p className="font-inter text-gray-400 text-sm mt-1">Edit page content directly from here</p>
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="font-inter flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                        style={{
                            background: saved ? "#16A34A" : "#0B2E6F",
                            color: "#fff",
                            opacity: saving ? 0.7 : 1,
                        }}
                    >
                        <Save size={16} />
                        {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
                    </button>
                </div>

                {/* Page Selector */}
                <div className="relative mb-8 w-64">
                    <select
                        value={selectedPage}
                        onChange={(e) => setSelectedPage(e.target.value)}
                        className="font-inter text-sm px-4 py-3 pr-10 rounded-xl border outline-none appearance-none bg-white w-full"
                        style={{ borderColor: "#e2e8f0", color: "#0B2E6F" }}
                    >
                        {pages.map((p) => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 pointer-events-none" style={{ color: "#0B2E6F" }} />
                </div>

                {/* Fields */}
                <div
                    className="bg-white rounded-2xl p-8"
                    style={{ boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A" }}
                >
                    {loading ? (
                        <p className="font-inter text-gray-400 text-sm">Loading content...</p>
                    ) : (
                        Object.entries(content).map(([key, value]) => renderField(key, value))
                    )}
                </div>
            </div>
        </div>
    );
}