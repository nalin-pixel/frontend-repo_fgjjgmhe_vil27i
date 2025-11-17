const industries = [
  'Food and beverage manufacturing',
  'Heavy industrial and processing plants',
  'Utilities and infrastructure',
  'Commercial buildings and large facilities',
  'Contractors, consultants, and specifiers',
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Industries we work with</h2>
          <p className="mt-3 text-gray-600">Boards engineered for tough NZ environments and critical uptime.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
