"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

// Use direct IP for better connectivity across local network configurations
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8080";

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch(`${API_URL}/api/users`, {
                    cache: 'no-store'
                });
                if (response.ok) {
                    const data = await response.json();
                    // Sort users by total score in descending order
                    const sortedData = (data || []).sort((a: any, b: any) => (b.totalScore || 0) - (a.totalScore || 0));
                    setLeaderboard(sortedData);
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
                                    leaderboard.map((user, index) => (
                                        <tr key={user.id} className="group hover:bg-white/5 transition-colors duration-200">
                                            <td className="px-6 py-6">
                                                <div className="flex items-center gap-3">
                                                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black shadow-inner
                                                        ${index === 0 ? 'bg-yellow-400 text-black' :
                                                            index === 1 ? 'bg-gray-300 text-black' :
                                                                index === 2 ? 'bg-amber-800 text-white' :
                                                                    'bg-white/5 text-gray-400'}`}>
                                                        {index + 1}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 font-medium text-white group-hover:text-yellow-400 transition-colors">
                                                {user.displayName || "Anonymous Ninja"}
                                            </td>
                                            <td className="px-6 py-6 text-right">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-400 border border-yellow-400/20">
                                                    {user.totalScore || 0} PTS
                                                </span>
                                            </td>
                                        </tr>
                                    ))
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
