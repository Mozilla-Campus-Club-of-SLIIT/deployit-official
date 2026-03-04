"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8080";

const RANK_STYLE: Record<number, { bg: string; text: string; label: string }> = {
    0: { bg: "bg-yellow-400", text: "text-black", label: "🥇" },
    1: { bg: "bg-gray-300", text: "text-black", label: "🥈" },
    2: { bg: "bg-amber-700", text: "text-white", label: "🥉" },
};

function Avatar({ photoUrl, displayName, size = 40 }: { photoUrl?: string; displayName: string; size?: number }) {
    const [imgError, setImgError] = useState(false);
    const initials = (displayName || "?")
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    if (photoUrl && !imgError) {
        return (
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid rgba(255,255,255,0.1)",
                    position: "relative",
                }}
            >
                <Image
                    src={photoUrl}
                    alt={displayName}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={() => setImgError(true)}
                    unoptimized
                />
            </div>
        );
    }

    // Initials fallback
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                flexShrink: 0,
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                border: "2px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: size * 0.35,
                fontWeight: 700,
                color: "#f59e0b",
            }}
        >
            {initials}
        </div>
    );
}

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                // Use the public /api/leaderboard endpoint (no JWT needed)
                const response = await fetch(`${API_URL}/api/leaderboard`, {
                    cache: "no-store",
                });
                if (response.ok) {
                    const data = await response.json();
                    setLeaderboard(data || []);
                } else {
                    setError("Synchronization failed.");
                }
            } catch (error) {
                console.error("Failed to fetch leaderboard", error);
                setError("Network error: Link to Core Engine lost.");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="mx-auto max-w-7xl">
                <Header />

                <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        <span className="text-yellow-400">Leaderboard</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Precision, speed, and mastery. The Ninja elite of Deploy(it).
                    </p>
                </div>

                {error && (
                    <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center text-xs font-black uppercase tracking-widest">
                        ⚠️ INFRA ALERT: {error}
                    </div>
                )}

                <div className="glass-panel overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl animate-in zoom-in-95 duration-500">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-bottom border-white/5 bg-white/5">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Rank</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Ninja</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Reputation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {loading ? (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-gray-500 italic text-sm tracking-wide">
                                            Synchronizing global rankings...
                                        </td>
                                    </tr>
                                ) : leaderboard.length === 0 && !error ? (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-gray-500 italic text-sm tracking-wide">
                                            No field data recorded yet.
                                        </td>
                                    </tr>
                                ) : (
                                    leaderboard.map((user, index) => {
                                        const rank = RANK_STYLE[index];
                                        return (
                                            <tr
                                                key={user.id}
                                                className="group hover:bg-white/5 transition-colors duration-200"
                                                style={{
                                                    background: index < 3 ? `rgba(245,158,11,${0.03 - index * 0.01})` : undefined,
                                                }}
                                            >
                                                {/* Rank */}
                                                <td className="px-6 py-5" style={{ width: "80px" }}>
                                                    <span
                                                        className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black shadow-inner
                                                            ${rank ? `${rank.bg} ${rank.text}` : "bg-white/5 text-gray-400"}`}
                                                    >
                                                        {rank ? rank.label : index + 1}
                                                    </span>
                                                </td>

                                                {/* Ninja — avatar + name */}
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar
                                                            photoUrl={user.photoUrl}
                                                            displayName={user.displayName || "Anonymous"}
                                                            size={40}
                                                        />
                                                        <div>
                                                            <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                                                {user.displayName || "Anonymous Ninja"}
                                                            </div>
                                                            {user.role === "admin" && (
                                                                <div className="text-xs text-yellow-500/70 font-bold uppercase tracking-widest mt-0.5">
                                                                    Admin
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Score */}
                                                <td className="px-6 py-5 text-right">
                                                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-400 border border-yellow-400/20">
                                                        {user.totalScore || 0} PTS
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-xs font-medium uppercase tracking-[0.2em] opacity-50">
                    &copy; 2026 DEPLOY(IT)
                </div>
            </div>
        </div>
    );
}
