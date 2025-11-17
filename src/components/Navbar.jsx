import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Switchboards' },
    { href: '#industries', label: 'Industries' },
    { href: '#why', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-items-center font-bold">CW</div>
            <span className="sr-only">Clive Wilson Switchboards</span>
            <span className="hidden sm:block font-semibold tracking-tight">Clive Wilson Switchboards</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+64" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700">
              <Phone size={16} /> <span>Call</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              <Mail size={16} /> Request a quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                <Mail size={16} /> Request a quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
