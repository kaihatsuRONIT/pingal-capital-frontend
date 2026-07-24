"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SubmissionsView from "@/components/SubmissionsView";
import DynamicTabRenderer from "@/components/DynamicTabRenderer";

export default function AdminPage() {
    const router = useRouter();
    const [activePage, setActivePage] = useState("home-loan");
    const [activeTab, setActiveTab] = useState("hero");
    const [content, setContent] = useState(null);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    // Pages registry — add new pages here as we build
    const pages = [
        { key: "home-loan", label: "Home Loan", tabs: ["Hero", "Info", "FAQ"] },
        { key: "nri-loan", label: "NRI Loan", tabs: ["Hero", "Info", "FAQ"] },
        { key: "loan-against-property", label: "Loan Against Property", tabs: ["Hero", "Info", "FAQ"] },
        { key: "balance-transfer", label: "Balance Transfer", tabs: ["Hero", "Info", "FAQ"] },
        { key: "non-residential-premises", label: "Non Residential Premises", tabs: ["Hero", "Info", "FAQ"] },
        { key: "loan-against-rentals", label: "Loan Against Rentals", tabs: ["Hero", "Info", "FAQ"] }
    ];

    const submissionPages = [
        { key: "submissions-home", label: "Home Form" },
        { key: "submissions-home-loan", label: "Home Loan Form" },
        { key: "submissions-nri-loan", label: "NRI Loan Form" },
        { key: "submissions-loan-against-property", label: "Loan Against Property Form" },
        { key: "submissions-balance-transfer", label: "Balance Transfer Form" },
        { key: "submissions-non-residential-premises", label: "Non Residential Premises Loan Form" },
        { key: "submissions-loan-against-rentals", label: "Loan Against Rentals Form" },
        { key: "submissions-debt-consolidation", label: "Debt Consolidation Form" },
        { key: "submissions-overdraft-facility", label: "Overdraft Facility Form" },
        { key: "submissions-business-loan", label: "Business Loan Form" },
        { key: "submissions-personal-loan", label: "Personal Loan Form" },
        { key: "submissions-cgtmse", label: "CGTMSE Form" },
        { key: "submissions-contact", label: "Contact Form" },
        { key: "submissions-join-us", label: "Join Us Form" },
    ];

    useEffect(() => {
        if (sessionStorage.getItem("admin_auth") !== "true") {
            router.push("/admin/login");
            return;
        }
        loadContent(activePage);
    }, []);

    const loadContent = (page) => {
        setContent(null);
        fetch(`/api/content?page=${page}`)
            .then((r) => r.json())
            .then((json) => setContent(json.content));
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setActiveTab("hero");
        loadContent(page);
    };

    const handleSave = async () => {
        setSaving(true);
        await fetch(`/api/content?page=${activePage}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ page: activePage, data: content }),
        });
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleImageUpload = async (e, filename) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const form = new FormData();
        form.append("file", file);
        form.append("filename", filename);
        await fetch("/api/upload", { method: "POST", body: form });
    };

    const handleLogout = () => {
        sessionStorage.removeItem("admin_auth");
        router.push("/admin/login");
    };

    const currentPage = pages.find((p) => p.key === activePage);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* Top Bar */}
            <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
                <h1 className="font-playfair text-xl font-bold" style={{ color: "#0B2E6F" }}>
                    Admin Panel
                </h1>
                <div className="flex items-center gap-4">
                    {saved && <span className="text-sm text-green-500 font-medium">Saved successfully!</span>}
                    <button
                        onClick={handleSave}
                        disabled={saving || !content}
                        className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                        style={{ background: "#0B2E6F" }}
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 border hover:bg-gray-50"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex flex-1">

                {/* Sidebar */}
                <aside className="w-56 bg-white border-r min-h-full py-6 px-3 space-y-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mb-3">Pages</p>
                    {pages.map((page) => (
                        <button
                            key={page.key}
                            onClick={() => handlePageChange(page.key)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            style={{
                                background: activePage === page.key ? "#EEF2FF" : "transparent",
                                color: activePage === page.key ? "#0B2E6F" : "#6b7280",
                            }}
                        >
                            {page.label}
                        </button>
                    ))}

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mt-6 mb-3">Submissions</p>
                    {submissionPages.map((page) => (
                        <button
                            key={page.key}
                            onClick={() => setActivePage(page.key)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            style={{
                                background: activePage === page.key ? "#EEF2FF" : "transparent",
                                color: activePage === page.key ? "#0B2E6F" : "#6b7280",
                            }}
                        >
                            {page.label}
                        </button>
                    ))}
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">

                    {/* Submissions View */}
                    {activePage.startsWith("submissions-") ? (
                        <SubmissionsView
                            formSlug={activePage.replace("submissions-", "")}
                            title={submissionPages.find(p => p.key === activePage)?.label + " Submissions"}
                        />
                    ) : (
                        <>
                            {/* Section Tabs */}
                            <div className="bg-white border-b px-8">
                                <div className="flex gap-1">
                                    {currentPage?.tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab.toLowerCase())}
                                            className="px-5 py-3.5 text-sm font-medium transition-colors"
                                            style={{
                                                color: activeTab === tab.toLowerCase() ? "#0B2E6F" : "#9ca3af",
                                                borderBottom: activeTab === tab.toLowerCase() ? "2px solid #0B2E6F" : "2px solid transparent",
                                            }}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="max-w-4xl w-full mx-auto px-8 py-10">
                                {!content ? (
                                    <div className="text-gray-400 text-sm">Loading...</div>
                                ) : (
                                    <DynamicTabRenderer
                                        activePage={activePage}
                                        activeTab={activeTab}
                                        content={content?.[activeTab]}
                                        setContent={(updated) => setContent({ ...content, [activeTab]: updated })}
                                        handleImageUpload={handleImageUpload}
                                    />
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}