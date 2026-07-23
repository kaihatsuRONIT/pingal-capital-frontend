"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function SubmissionsView({ formSlug, title }) {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch(`/api/submissions?form_slug=${formSlug}`)
            .then((r) => r.json())
            .then((d) => {
                setSubmissions(d.submissions || []);
                setLoading(false);
            });
    }, [formSlug]);

    const filtered = submissions.filter((s) =>
        Object.values(s.data).some((v) =>
            String(v).toLowerCase().includes(search.toLowerCase())
        )
    );

    // Derive column keys from first submission
    const columns = submissions.length > 0 ? Object.keys(submissions[0].data) : [];

    return (
        <div className="flex-1 px-8 py-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-[#0B2E6F]" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "Work Sans, sans-serif" }}>
                        {submissions.length} total submission{submissions.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0B2E6F] w-56"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                />
            </div>

            {/* Table */}
            {loading ? (
                <div className="text-sm text-gray-400">Loading...</div>
            ) : filtered.length === 0 ? (
                <div className="text-sm text-gray-400">No submissions found.</div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                                    #
                                </th>
                                {columns.map((col) => (
                                    <th
                                        key={col}
                                        className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {col.replace(/([A-Z])/g, " $1").trim()}
                                    </th>
                                ))}
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                                    Submitted At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((s, i) => (
                                <tr
                                    key={s.id}
                                    onClick={() => setSelected(s)}
                                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer hover:border-1 hover:border-red"
                                >
                                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                                    {columns.map((col) => (
                                        <td key={col} className="px-4 py-3 text-gray-700 max-w-xs truncate">
                                            {s.data[col] || "—"}
                                        </td>
                                    ))}
                                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                                        {new Date(s.created_at).toLocaleString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={16} color="#6b7280" />
                        </button>

                        {/* Header */}
                        <h3
                            className="text-base font-semibold text-[#0B2E6F] mb-1"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                            Submission Details
                        </h3>
                        <p
                            className="text-xs text-gray-400 mb-6"
                            style={{ fontFamily: "Work Sans, sans-serif" }}
                        >
                            {new Date(selected.created_at).toLocaleString("en-IN", {
                                day: "2-digit", month: "short", year: "numeric",
                                hour: "2-digit", minute: "2-digit",
                            })}
                        </p>

                        {/* Fields */}
                        <div className="flex flex-col gap-4">
                            {Object.entries(selected.data).map(([key, value]) => (
                                <div key={key}>
                                    <p
                                        className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        {key.replace(/([A-Z])/g, " $1").trim()}
                                    </p>
                                    <p
                                        className="text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2.5"
                                        style={{ fontFamily: "Work Sans, sans-serif" }}
                                    >
                                        {value || "—"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
    </div>
    );
}