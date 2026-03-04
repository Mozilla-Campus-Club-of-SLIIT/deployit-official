"use client";

import React from 'react';
import Header from '../../components/Header';

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="mx-auto max-w-4xl">
                <Header />

                <div className="mt-16 mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex justify-center mb-8">
                        <img src="/deployit-logo.png" alt="Deploy(it) Logo" className="h-24 sm:h-32" />
                    </div>
                    <p className="mt-6 text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        The ultimate DevOps proving ground for the next generation of cloud Ninjas.
                    </p>
                </div>

                <div className="grid gap-12 mt-20">
                    <section className="glass-panel p-8 sm:p-12 border border-white/10 bg-black/20 backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                        </div>

                        <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                            <span className="h-2 w-8 bg-yellow-400 rounded-full"></span>
                            Mission
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8 font-medium">
                            Deploy(it) is designed to bridge the gap between academic theory and industry reality. We provide a sandbox environment where students can tackle complex infrastructure challenges, automate deployment pipelines, and master the art of reliability—all while competing for the top spot on the leaderboard.
                        </p>
                    </section>

                    <section className="glass-panel p-8 sm:p-12 border border-yellow-400/20 bg-yellow-400/5 backdrop-blur-xl relative overflow-hidden ring-1 ring-yellow-400/30">
                        <div className="absolute top-4 right-4 animate-pulse">
                            <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded tracking-[0.2em] uppercase shadow-lg">Eligibility</span>
                        </div>

                        <h2 className="text-2xl font-black text-yellow-400 mb-6 uppercase tracking-wider">
                            Who Can Participate?
                        </h2>
                        <div className="space-y-4">
                            <p className="text-white text-xl font-black leading-tight italic">
                                "Inclusion is at the core of our ecosystem."
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg font-medium">
                                Deploy(it) is open to <span className="text-white font-bold underline decoration-yellow-400 underline-offset-4">every single student</span> within the **Faculty of Computing at SLIIT**.
                            </p>
                            <div className="p-4 rounded-lg bg-black/40 border border-white/5 mt-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-200 font-bold">
                                        <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                        No Specialization Barrier
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-200 font-bold">
                                        <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Open for All Academic Years
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-200 font-bold">
                                        <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Zero-Entry Barriers
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-400 text-sm mt-4 italic">
                                Whether you're a Software Engineering fanatic, a Cybersecurity enthusiast, or just curious about how the cloud works—this series is for you.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center text-gray-600 text-xs font-black uppercase tracking-[0.3em]">
                    &copy; 2026 DEPLOY(IT) - Mozilla Campus Club of SLIIT
                </div>
            </div>
        </div>
    );
}
