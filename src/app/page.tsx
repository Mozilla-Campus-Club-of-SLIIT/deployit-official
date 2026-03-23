import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import features from "../config/features.json";

export default function Home() {
  return (
    <div className="bg-background-dark font-display text-gray-200">
      <div className="relative flex min-h-screen w-full flex-col bg-gradient-custom overflow-hidden grainy">
        <div
          className="decorative-mark hidden sm:block absolute top-1/4 -left-16 sm:-left-12 md:-left-8 text-orange-accent/10 opacity-60 transform -rotate-12 pointer-events-none"
          style={{ fontSize: '10rem', filter: 'blur(2px)' }}
        >
          ∞
        </div>

        <div
          className="decorative-mark hidden sm:block absolute top-1/4 -right-16 sm:-right-12 md:-right-8 text-orange-accent/10 opacity-60 transform rotate-12 pointer-events-none"
          style={{ fontSize: '10rem', filter: 'blur(2px)' }}
        >
          ∞
        </div>

        <div
          className="decorative-mark hidden sm:block absolute bottom-1/4 -left-12 sm:-left-8 md:-left-4 text-orange-accent/10 opacity-60 transform rotate-6 pointer-events-none"
          style={{ fontSize: '12rem', filter: 'blur(3px)' }}
        >
          ∞
        </div>

        <div
          className="decorative-mark hidden sm:block absolute bottom-1/4 -right-12 sm:-right-8 md:-right-4 text-orange-accent/10 opacity-60 transform -rotate-6 pointer-events-none"
          style={{ fontSize: '12rem', filter: 'blur(3px)' }}
        >
          ∞
        </div>

        <div className="layout-container flex h-full grow flex-col z-10">
          <div className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
            <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
              <Header />
              {/* end old header */}

              <main className="flex-grow flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center text-center py-28 md:py-20 px-4">
                  <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
                    <div className="flex justify-center">
                      <Image 
                        src="/deployit-logo.png" 
                        alt="Deployit" 
                        width={400} 
                        height={150} 
                        className="h-20 md:h-36 w-auto" 
                        priority
                      />
                    </div>
                    <h2 className="text-gray-300 text-lg md:text-xl font-normal leading-normal">
                      A Series of DevOps challenges where students can tackle real-world DevOps tasks and win exciting prizes.
                    </h2>
                  </div>
                  <div className="mt-6 md:mt-10">
                    {features.registrationOpen ? (
                      <Link href="https://portal.deployit.sliitmozilla.org" target="_blank" rel="noopener noreferrer" className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--orange-accent)] text-[var(--background-dark)] text-base font-bold leading-normal tracking-wide hover:brightness-95 transition-colors shadow-lg shadow-[rgba(243,156,18,0.2)]">
                        <span className="truncate">View Challenges</span>
                      </Link>
                    ) : (
                      <div className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white/5 border border-white/10 text-gray-500 text-base font-black uppercase tracking-[0.2em] opacity-60 cursor-default backdrop-blur-sm">
                        Registration Opening Soon
                      </div>
                    )}
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
