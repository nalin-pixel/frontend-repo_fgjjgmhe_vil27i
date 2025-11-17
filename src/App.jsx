import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50/30 text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* Decorative background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
