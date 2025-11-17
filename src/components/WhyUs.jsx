import { Wrench, ShieldCheck, Ruler, Factory, Layers, Handshake } from 'lucide-react'

const points = [
  {
    title: '50+ years of engineering',
    desc: 'Founded in 1971 with a long track record in NZ industry.',
    icon: Factory,
  },
  {
    title: 'NZ-made, built in-house',
    desc: 'Design, fabrication, wiring, and testing done locally for tight quality control.',
    icon: Wrench,
  },
  {
    title: 'AS/NZS 61439 compliant',
    desc: 'Boards designed and built to current NZ/AU switchboard standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom, not catalogue',
    desc: 'Every board engineered to site, load, and future expansion needs.',
    icon: Ruler,
  },
  {
    title: 'Reliability and longevity',
    desc: 'Do it once, do it right—easy maintenance and long service life.',
    icon: Layers,
  },
  {
    title: 'End-to-end support',
    desc: 'Concept to manufacture, upgrades, and replacements.',
    icon: Handshake,
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why choose us</h2>
          <p className="mt-3 text-slate-600">Straight-up, technical but approachable. Trusted specialist in serious industrial gear.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-600/5 blur-2xl transition group-hover:bg-blue-600/10" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-700 ring-1 ring-indigo-100">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
