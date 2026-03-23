"use client";

import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import features from "../../config/features.json";

export default function AboutPage() {
    const missionText = "Deploy(it) is designed to bridge the gap between academic theory and industry reality. We provide a sandbox environment where students master the art of reliability through complex, real-world infrastructure challenges" + (features.showLeaderboard ? "—all while competing for the top spot on the leaderboard." : ".");

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-transparent font-display text-gray-200">
            <div className="mx-auto max-w-5xl">
                <Header />

                {/* Hero Section */}
                <div className="mt-20 mb-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                        BEYOND THE <br />
                        <span className="text-yellow-400">INTERFACE</span>
                    </h1>
                    <p className="mt-8 text-gray-400 text-lg sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
                        We don&apos;t just teach DevOps; we forge the next generation of cloud commandos through trial by fire.
                    </p>
                </div>

                <div className="grid gap-16">
                    {/* Mission & Vision Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/[0.07]">
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
                            
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                            </div>
                            
                            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">The Mission</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                {missionText}
                            </p>
                        </section>

                        <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/[0.07]">
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
                            
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                            </div>
                            
                            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">The Vision</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                To establish SLIIT as a powerhouse for DevOps talent, creating a culture where automation, scaling, and observability are first-class citizens in every student&apos;s engineering arsenal.
                            </p>
                        </section>
                    </div>

                    {/* Eligibility & Inclusivity */}
                    <section className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-transparent p-10 sm:p-16 backdrop-blur-2xl">
                        <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-[100px]"></div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="mb-4 inline-block rounded-full bg-yellow-400/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-yellow-400 border border-yellow-400/20">
                                    Open Ecosystem
                                </span>
                                <h2 className="mb-6 text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                                    Who Can <br />
                                    <span className="text-yellow-400">Participate?</span>
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-gray-300 font-medium">
                                    Deploy(it) is open to <span className="text-white font-black underline decoration-yellow-400 decoration-2 underline-offset-8">every single student</span> within the Faculty of Computing at SLIIT.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "All Specializations",
                                        "All Academic Years",
                                        "Zero Entry Barriers",
                                        "Collaborative Spirit"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 font-bold text-gray-200">
                                            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="rounded-2xl border border-white/5 bg-black/40 p-8 shadow-2xl">
                                <p className="text-2xl font-black italic leading-tight text-white opacity-90 leading-relaxed">
                                    &quot;Whether you&apos;re a Software Engineering fanatic, a Cybersecurity enthusiast, or just curious about how the cloud works—this series is for you.&quot;
                                </p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/10">
                                        <Image 
                                            src="/sadeesha.png" 
                                            alt="Sadeesha Perera" 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black uppercase tracking-widest text-white">Sadeesha Perera</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 mt-0.5">SLIIT Mozilla President & Organizer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Origin Story */}
                    <section className="text-center py-20">
                        <div className="inline-block h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>
                        <h2 className="mb-8 text-3xl font-black uppercase tracking-widest text-white">The Origin Story</h2>
                        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-400 font-medium">
                            Born out of the <span className="text-white">Mozilla Campus Club of SLIIT</span>, Deploy(it) started as a simple idea: to make infrastructure fun. Today, it has evolved into a premier event that defines the cutting edge of student-led technical excellence.
                        </p>
                    </section>
                </div>

                {/* Footer Copy */}
                <div className="mt-20 border-t border-white/5 pt-12 text-center text-gray-600 text-xs font-black uppercase tracking-[0.4em]">
                    &copy; 2026 DEPLOY(IT) - Mozilla Campus Club of SLIIT
                </div>
            </div>
        </div>
    );
}
