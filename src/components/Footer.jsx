export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Clive Wilson Switchboards Ltd. All rights reserved.</p>
        <div className="text-sm text-gray-600">AS/NZS 61439 compliant. NZ-made.</div>
      </div>
    </footer>
  )}
