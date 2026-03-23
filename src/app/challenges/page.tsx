import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';

export default function ChallengesPage() {
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoonChallenges.map((c) => (
            <article key={c.id} className="group relative rounded-2xl bg-black/20 border border-white/5 p-0 overflow-hidden hover:border-white/10 transition-all duration-300">
              <div className="h-48 bg-white/2 flex items-center justify-center border-b border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={`/challenges/${c.id}.svg`} 
                  alt={`${c.title} illustration`} 
                  width={150} 
                  height={100} 
                  className="h-24 w-auto object-contain opacity-30 group-hover:opacity-50" 
                />
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
