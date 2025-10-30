import Link from 'next/link';

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
        {/* Header (same as home) */}
        <header className="mb-8 flex items-center justify-between whitespace-nowrap px-4 sm:px-6 py-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="flex items-center gap-3 text-white">
            <Link href="/" className="flex items-center gap-2" aria-label="Go to home">
              <img src="/deployit-logo.png" alt="Deployit" className="h-6 sm:h-8" />
              <span className="mx-2 text-gray-300 flex items-center" aria-hidden="true">
                <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
                  <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <img src="/sliitmozila-light-logo.png" alt="SLIIT Mozilla" className="h-6 sm:h-8 opacity-95" />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-6">
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="/">Home</a>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">About</a>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="/challenges">Challenges</a>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Rules</a>
            </nav>
          </div>

          <button className="md:hidden flex items-center justify-center size-10 rounded-lg text-white hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

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
