"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, LayoutDashboard, FileText, Edit3, LogOut, ChevronDown } from "lucide-react";
import Link from "next/link";

const statusColors = {
    new: { bg: "#FEF9EC", color: "#D97706" },
    contacted: { bg: "#E0F7FA", color: "#0891B2" },
    closed: { bg: "#F0FDF4", color: "#16A34A" },
};

export default function AdminSubmissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState("");
    const [filterType, setFilterType] = useState("");
    const [selected, setSelected] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetchSubmissions();
    }, [filterStatus, filterType]);

    const fetchSubmissions = async () => {
        setLoading(true);
        const params = new URLSearchParams();
        if (filterStatus) params.set("status", filterStatus);
        if (filterType) params.set("formType", filterType);

        const res = await fetch(`/api/submissions?${params.toString()}`);
        if (res.status === 401) { router.push("/admin/login"); return; }
        const { submissions } = await res.json();
        setSubmissions(submissions || []);
        setLoading(false);
    };

    const updateStatus = async (id, status) => {
        await fetch(`/api/submissions/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        fetchSubmissions();
        if (selected?._id === id) setSelected({ ...selected, status });
    };

    const deleteSubmission = async (id) => {
        if (!confirm("Delete this submission?")) return;
        await fetch(`/api/submissions/${id}`, { method: "DELETE" });
        setSelected(null);
        fetchSubmissions();
    };

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
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
                        { label: "Submissions", icon: <FileText size={18} />, href: "/admin/submissions", active: true },
                        { label: "Content Editor", icon: <Edit3 size={18} />, href: "/admin/content" },
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
                <div className="mb-6">
                    <h1 className="font-playfair font-bold" style={{ color: "#0B2E6F", fontSize: "28px" }}>Submissions</h1>
                    <p className="font-inter text-gray-400 text-sm mt-1">Manage all form submissions</p>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-6">
                    <div className="relative">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="font-inter text-sm px-4 py-2.5 pr-8 rounded-xl border outline-none appearance-none bg-white"
                            style={{ borderColor: "#e2e8f0", color: "#0B2E6F" }}
                        >
                            <option value="">All Statuses</option>
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2 top-3 pointer-events-none" style={{ color: "#0B2E6F" }} />
                    </div>

                    <div className="relative">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="font-inter text-sm px-4 py-2.5 pr-8 rounded-xl border outline-none appearance-none bg-white"
                            style={{ borderColor: "#e2e8f0", color: "#0B2E6F" }}
                        >
                            <option value="">All Types</option>
                            <option value="general">General</option>
                            <option value="mortgage">Mortgage</option>
                            <option value="home-loan">Home Loan</option>
                            <option value="nri">NRI Loan</option>
                            <option value="balance-transfer">Balance Transfer</option>
                            <option value="debt-consolidation">Debt Consolidation</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2 top-3 pointer-events-none" style={{ color: "#0B2E6F" }} />
                    </div>
                </div>

                <div className="flex gap-6">

                    {/* Table */}
                    <div className="flex-1 bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A" }}>
                        <table className="w-full">
                            <thead>
                                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                                    {["Name", "Email", "Type", "Date", "Status"].map((h, i) => (
                                        <th key={i} className="font-inter text-xs font-semibold text-left px-5 py-4" style={{ color: "#888" }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan={5} className="font-inter text-center text-gray-400 text-sm py-10">Loading...</td></tr>
                                ) : submissions.length === 0 ? (
                                    <tr><td colSpan={5} className="font-inter text-center text-gray-400 text-sm py-10">No submissions found.</td></tr>
                                ) : (
                                    submissions.map((s) => (
                                        <tr
                                            key={s.id}
                                            onClick={() => setSelected(s)}
                                            className="cursor-pointer transition-colors hover:bg-gray-50"
                                            style={{ borderBottom: "1px solid #f0f0f0", background: selected?.id === s.id ? "#EEF2FF" : "" }}
                                        >
                                            <td className="font-inter text-sm font-medium px-5 py-3.5" style={{ color: "#0B2E6F" }}>{s.fullName}</td>
                                            <td className="font-inter text-sm text-gray-500 px-5 py-3.5">{s.email}</td>
                                            <td className="font-inter text-sm text-gray-500 px-5 py-3.5 capitalize">{s.formType}</td>
                                            <td className="font-inter text-sm text-gray-400 px-5 py-3.5">{new Date(s.createdAt).toLocaleDateString()}</td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className="font-inter text-xs px-2.5 py-1 rounded-full font-medium"
                                                    style={{ background: statusColors[s.status]?.bg, color: statusColors[s.status]?.color }}
                                                >
                                                    {s.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Detail Panel */}
                    {selected && (
                        <div className="w-80 flex-shrink-0 bg-white rounded-2xl p-6" style={{ boxShadow: "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A" }}>
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-playfair font-bold" style={{ color: "#0B2E6F", fontSize: "16px" }}>Details</h3>
                                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
                            </div>

                            <div className="space-y-3 mb-6">
                                {[
                                    { label: "Name", value: selected.fullName },
                                    { label: "Email", value: selected.email },
                                    { label: "Phone", value: selected.phone },
                                    { label: "Company", value: selected.companyName },
                                    { label: "Funding", value: selected.fundingRequirement },
                                    { label: "Type", value: selected.formType },
                                    { label: "Date", value: new Date(selected.createdAt).toLocaleString() },
                                ].map((field, i) => field.value && (
                                    <div key={i}>
                                        <div className="font-inter text-xs text-gray-400 mb-0.5">{field.label}</div>
                                        <div className="font-inter text-sm font-medium" style={{ color: "#0B2E6F" }}>{field.value}</div>
                                    </div>
                                ))}

                                {selected.businessNeeds && (
                                    <div>
                                        <div className="font-inter text-xs text-gray-400 mb-0.5">Message</div>
                                        <div className="font-inter text-sm text-gray-600 leading-relaxed">{selected.businessNeeds}</div>
                                    </div>
                                )}
                            </div>

                            {/* Status Update */}
                            <div className="mb-4">
                                <div className="font-inter text-xs text-gray-400 mb-2">Update Status</div>
                                <div className="flex gap-2 flex-wrap">
                                    {["new", "contacted", "closed"].map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => updateStatus(selected._id, s)}
                                            className="font-inter text-xs px-3 py-1.5 rounded-full font-medium border transition-colors"
                                            style={{
                                                background: selected.status === s ? statusColors[s].bg : "transparent",
                                                color: statusColors[s].color,
                                                borderColor: statusColors[s].color,
                                            }}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Delete */}
                            <button
                                onClick={() => deleteSubmission(selected._id)}
                                className="font-inter flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition-colors"
                            >
                                <Trash2 size={14} />
                                Delete Submission
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}