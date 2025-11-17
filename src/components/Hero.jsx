export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Custom industrial and commercial switchboards
            </h1>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Clive Wilson Switchboards Ltd is a New Zealand manufacturer based in Invercargill. Since 1971 we’ve designed, built, and tested main switchboards (MSBs), motor control centres (MCCs), distribution boards, and automation solutions for critical sites across Aotearoa. All boards are engineered in-house to AS/NZS 61439 and built for long service life in tough NZ conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Request a quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Our switchboards
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <img src="/hero-switchboard.jpg" alt="Industrial switchboard" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
