import Hero from "./components/Hero"
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Navbar />
      <Features />
    </main>
  )
}

export default App