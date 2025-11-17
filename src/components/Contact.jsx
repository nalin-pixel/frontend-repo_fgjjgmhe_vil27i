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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-3 text-gray-600">Tell us about your project and we’ll get back to you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Send enquiry
              </button>
              {status === 'loading' && <span className="ml-3 text-sm text-gray-600">Sending…</span>}
              {status === 'success' && <span className="ml-3 text-sm text-green-700">Thanks — we’ll be in touch.</span>}
              {status && status !== 'loading' && status !== 'success' && (
                <span className="ml-3 text-sm text-red-600">{String(status)}</span>
              )}
            </div>
          </form>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">Phone: 03 218 7613</p>
            <p className="mt-1 text-sm text-gray-600">Email: info@clivewilson.co.nz</p>
            <p className="mt-1 text-sm text-gray-600">Address: 68 Mavora Crescent, Invercargill</p>
            <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
              <img src="/factory.jpg" alt="Workshop" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
