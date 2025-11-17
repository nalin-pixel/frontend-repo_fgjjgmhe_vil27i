export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 py-12">
      <div className="absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-b from-blue-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Clive Wilson Switchboards Ltd. All rights reserved.</p>
        <div className="text-sm text-slate-600">AS/NZS 61439 compliant • NZ-made</div>
      </div>
    </footer>
  )}
