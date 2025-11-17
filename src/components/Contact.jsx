import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back to you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-600/5 blur-2xl" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-95">
                Send enquiry
              </button>
              {status === 'loading' && <span className="ml-3 text-sm text-slate-600">Sending…</span>}
              {status === 'success' && <span className="ml-3 text-sm text-green-700">Thanks — we’ll be in touch.</span>}
              {status && status !== 'loading' && status !== 'success' && (
                <span className="ml-3 text-sm text-red-600">{String(status)}</span>
              )}
            </div>
          </form>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-indigo-600/5 blur-2xl" />
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-slate-600">Phone: 03 218 7613</p>
            <p className="mt-1 text-sm text-slate-600">Email: info@clivewilson.co.nz</p>
            <p className="mt-1 text-sm text-slate-600">Address: 68 Mavora Crescent, Invercargill</p>
            <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <img src="/factory.jpg" alt="Workshop" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
