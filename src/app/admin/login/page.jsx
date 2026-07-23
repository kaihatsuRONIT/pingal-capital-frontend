"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            sessionStorage.setItem("admin_auth", "true");
            router.push("/admin");
        } else {
            setError("Incorrect password. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
                <h1 className="font-playfair text-2xl font-bold mb-1" style={{ color: "#0B2E6F" }}>
                    Admin Login
                </h1>
                <p className="text-sm text-gray-400 mb-6">Enter your password to access the admin panel.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none focus:border-blue-400"
                            style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
                            required
                        />
                    </div>

                    {error && <p className="text-xs text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#0B2E6F" }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}