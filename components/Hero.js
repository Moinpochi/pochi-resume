export default function Hero() {
  return (
    <section className="section h-screen flex items-center justify-center">
      <div className="text-center">
        <img src="/profile.png" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Pochi Moin</h1>
        <p className="mt-2">Leadership Enthusiast & Web Developer</p>
        <a href="/resume.pdf" download className="mt-4 inline-block bg-white text-black px-4 py-2 rounded">
          Download CV
        </a>
      </div>
    </section>
  );
}
