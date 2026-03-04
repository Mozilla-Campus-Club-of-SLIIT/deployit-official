"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

// Use 127.0.0.1 to avoid potential IPv6 resolution delays with 'localhost'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8080";

export default function ChallengesPage() {
  const [liveChallenges, setLiveChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const comingSoonChallenges = [
    {
      id: 'dockerthon',
      title: 'Dockerthon',
      subtitle: 'Containerize, optimize, and ship a production ready app',
      difficulty: 'Intermediate',
      tags: ['Docker', 'Containers', 'CI/CD'],
    },
    {
      id: 'cicd-sprint',
      title: 'CI/CD Sprint',
      subtitle: 'Design and implement a robust CI/CD pipelines',
      difficulty: 'Advanced',
      tags: ['GitHub Actions', 'Pipelines', 'Testing'],
    },
    {
      id: 'kubethon',
      title: 'Kubethon',
      subtitle: 'Deploy a scalable microservices to Kubernetes',
      difficulty: 'Advanced',
      tags: ['Kubernetes', 'Helm', 'Scaling'],
    },
    {
      id: 'securestack',
      title: 'SecureStack',
      subtitle: 'Harden an application stack and demonstrate fixes',
      difficulty: 'Intermediate',
      tags: ['Security', 'Hardening', 'SCA'],
    },
    {
      id: 'observability-hunt',
      title: 'Observability Hunt',
      subtitle: 'Add observability and trace a production issue',
      difficulty: 'Beginner',
      tags: ['Logging', 'Tracing', 'Metrics'],
    },
  ];

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        console.log(`[NETWORK] Attempting to fetch challenges from ${API_URL}...`);
        const response = await fetch(`${API_URL}/api/challenges`, {
          cache: 'no-store' // Disable caching to ensure we see the latest data
        });

        if (response.ok) {
          const data = await response.json();
          console.log("[NETWORK] Challenges loaded:", data);
          if (Array.isArray(data)) {
            // Take only first 2 for display as requested
            setLiveChallenges(data.slice(0, 2));
          }
        } else {
          setError(`Server responded with ${response.status}`);
        }
      } catch (error: any) {
        console.error("[NETWORK ERROR] Failed to fetch challenges:", error);
        setError("Could not connect to the Lab API. Please ensure the Go backend is running on port 8080.");
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-7xl">
        <Header />

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            DevOps <span className="text-yellow-400">Challenges</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Prove your Ninja dominance. From containerization sprints to distribution pipelines.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://portal.deployit.sliitmozilla.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-black uppercase tracking-widest text-black transition-all duration-300 bg-yellow-400 rounded-xl hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Go to Portal
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Dynamic Section Message */}
        {error && (
          <div className="mb-12 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center text-sm font-bold">
            ⚡ {error}
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Loading Skeleton or Placeholder */}
          {loading && (
            <div className="col-span-full py-12 text-center text-gray-500 italic animate-pulse">
              Synchronizing with cloud-run-engine...
            </div>
          )}

          {/* Live Challenges from Backend */}
          {!loading && liveChallenges.length > 0 && liveChallenges.map((c) => (
            <article key={c.id} className="group relative rounded-2xl bg-black/40 border border-yellow-500/20 p-0 overflow-hidden hover:shadow-2xl hover:border-yellow-400/40 transition-all duration-300">
              <div className="absolute top-4 right-4 z-20">
                <span className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                  </span>
                  Live Now
                </span>
              </div>

              <div className="h-48 bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center border-b border-white/5">
                <img src="/file.svg" alt="Challenge" className="h-16 w-16 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500" style={{ filter: 'invert(85%) sepia(50%) saturate(2000%) hue-rotate(3deg) brightness(100%) contrast(100%)' }} />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{c.title}</h2>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed font-medium">{c.description || c.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">{c.difficulty}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/5 px-2 py-1 rounded border border-yellow-400/10">{c.score} PTS</span>
                </div>

                <div className="flex items-center justify-end mt-auto pt-4 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-6 w-6 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {!loading && liveChallenges.length === 0 && !error && (
            <div className="col-span-full mb-12 p-8 rounded-2xl bg-white/2 border border-white/5 text-center">
              <p className="text-gray-500 text-sm">No production challenges available at this moment. Roadmap challenges are listed below.</p>
            </div>
          )}

          {/* Coming Soon Challenges */}
          {comingSoonChallenges.map((c) => (
            <article key={c.id} className="group relative rounded-2xl bg-black/20 border border-white/5 p-0 overflow-hidden hover:border-white/10 transition-all duration-300">
              <div className="h-48 bg-white/2 flex items-center justify-center border-b border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={`/challenges/${c.id}.svg`} alt={`${c.title} illustration`} className="h-24 w-auto object-contain opacity-30 group-hover:opacity-50" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">{c.title}</h2>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{c.subtitle}</p>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-1 rounded border border-white/5 self-start">{c.difficulty}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 mb-8">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-gray-500 bg-white/3 px-2 py-1 rounded uppercase tracking-tighter">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest italic opacity-50">Unavailable</span>
                  <button className="inline-flex items-center rounded-lg bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-500 cursor-not-allowed">Coming Soon</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
