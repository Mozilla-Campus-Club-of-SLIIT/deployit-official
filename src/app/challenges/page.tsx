import Link from 'next/link';
import Header from '../../components/Header';

export default function ChallengesPage() {
  const challenges = [
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

        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Challenges</h1>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Browse our curated DevOps challenges. From containerization sprints to full CI/CD pipelines. Pick one and prove your skills.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <article key={c.id} className="group relative rounded-xl bg-black/20 border border-white/6 p-0 overflow-hidden hover:shadow-lg hover:border-white/20 transition">
              {/* image */}
              <div className="h-40 bg-white/3 flex items-center justify-center">
                <img src={`/challenges/${c.id}.svg`} alt={`${c.title} illustration`} className="h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{c.title}</h2>
                    <p className="mt-2 text-sm text-gray-300">{c.subtitle}</p>
                  </div>
                  <div className="text-sm text-gray-400 bg-white/5 px-2 py-1 rounded-md self-start">{c.difficulty}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs text-gray-200 bg-white/6 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-[var(--orange-accent)] hover:underline">---</a>
                  <button className="ml-4 inline-flex items-center rounded-md bg-[var(--orange-accent)] px-3 py-2 text-sm font-semibold text-[var(--background-dark)] hover:brightness-95">Coming Soon</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
