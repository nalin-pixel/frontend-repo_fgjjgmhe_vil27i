const industries = [
  'Food and beverage manufacturing',
  'Heavy industrial and processing plants',
  'Utilities and infrastructure',
  'Commercial buildings and large facilities',
  'Contractors, consultants, and specifiers',
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Industries we work with</h2>
          <p className="mt-3 text-slate-600">Boards engineered for tough NZ environments and critical uptime.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/5 blur-xl" />
              <p className="text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
