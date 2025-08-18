
export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("/hero-cloud.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-start max-w-4xl px-6 py-20">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Compete in the Cloud, Conquer the Challenge
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 drop-shadow">
          Join our platform to showcase your cloud computing skills, solve real-world problems, and win exciting prizes.
        </p>
        <button className="bg-[#f79f3b] hover:bg-[#e68a1a] text-[#181511] text-lg font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
          Comming Soon
        </button>
      </div>
    </section>
  );
}
