import { Zap, PanelBottom, Workflow, Boxes } from 'lucide-react'

const services = [
  {
    title: 'Main Switchboards (MSBs)',
    desc: 'Custom engineered MSBs for commercial and industrial sites, designed for present load and future expansion.',
    icon: PanelBottom,
  },
  {
    title: 'Motor Control Centres (MCCs)',
    desc: 'Form 2–4 assemblies with robust busbar systems, protection, and intelligent control.',
    icon: Workflow,
  },
  {
    title: 'Mechanical/Distribution Boards',
    desc: 'Lighting and power distribution, MSSBs, and mechanical services boards for large facilities.',
    icon: Boxes,
  },
  {
    title: 'Automation & Control',
    desc: 'PLC panels, process control integration, and upgrades/replacements of existing boards.',
    icon: Zap,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Switchboards and control</h2>
          <p className="mt-3 text-slate-600">Industrial and commercial switchboards built to AS/NZS 61439.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-600/5 blur-2xl transition group-hover:bg-indigo-600/10" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 ring-1 ring-blue-100">
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
