
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background-dark font-display text-gray-200">
      <div className="relative flex min-h-screen w-full flex-col bg-gradient-custom overflow-hidden grainy">
        <div
          className="absolute top-1/4 -left-16 sm:-left-12 md:-left-8 text-orange-accent/10 opacity-60 transform -rotate-12 pointer-events-none"
          style={{ fontSize: '10rem', filter: 'blur(2px)' }}
        >
          ∞
        </div>
        <div
          className="absolute top-1/4 -right-16 sm:-right-12 md:-right-8 text-orange-accent/10 opacity-60 transform rotate-12 pointer-events-none"
          style={{ fontSize: '10rem', filter: 'blur(2px)' }}
        >
          ∞
        </div>
        <div
          className="absolute bottom-1/4 -left-12 sm:-left-8 md:-left-4 text-orange-accent/10 opacity-60 transform rotate-6 pointer-events-none"
          style={{ fontSize: '12rem', filter: 'blur(3px)' }}
        >
          ∞
        </div>
        <div
          className="absolute bottom-1/4 -right-12 sm:-right-8 md:-right-4 text-orange-accent/10 opacity-60 transform -rotate-6 pointer-events-none"
          style={{ fontSize: '12rem', filter: 'blur(3px)' }}
        >
          ∞
        </div>

        <div className="layout-container flex h-full grow flex-col z-10">
          <div className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
            <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 py-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <Link href="/" className="flex items-center gap-2" aria-label="Go to home">
                    <img src="/deployit-logo.png" alt="Deployit" className="h-6 sm:h-8" />
                    {/* decorative 'x' separator between logos */}
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
                  {/* Login button removed per request */}
                </div>

                <button className="md:hidden flex items-center justify-center size-10 rounded-lg text-white hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </header>

              <main className="flex-grow flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                  <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
                    <div className="flex justify-center">
                      <img src="/deployit-logo.png" alt="Deployit" className="h-20 md:h-36" />
                    </div>
                    <h2 className="text-gray-300 text-lg md:text-xl font-normal leading-normal">
                      A Series of DevOps challenges organized by the Mozilla Campus Club of SLIIT  for students to tackle real world DevOps tasks.
                    </h2>
                  </div>
                  <div className="mt-6 md:mt-10">
                    <Link href="/challenges" className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--orange-accent)] text-[var(--background-dark)] text-base font-bold leading-normal tracking-wide hover:brightness-95 transition-colors shadow-lg shadow-[rgba(243,156,18,0.2)]">
                      <span className="truncate">View Challenges</span>
                    </Link>
                  </div>
                </div>
               
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
