export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              NZ-made • Since 1971 • AS/NZS 61439
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Custom industrial and commercial switchboards
            </h1>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">
              Clive Wilson Switchboards Ltd is a New Zealand manufacturer based in Invercargill. Since 1971 we’ve designed, built, and tested main switchboards (MSBs), motor control centres (MCCs), distribution boards, and automation solutions for critical sites across Aotearoa. All boards are engineered in-house to AS/NZS 61439 and built for long service life in tough NZ conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-95">
                Request a quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-white">
                Our switchboards
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
              <img src="/hero-switchboard.jpg" alt="Industrial switchboard" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
