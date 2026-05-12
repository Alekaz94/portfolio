import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/project/Project"
import TechStack from "./components/techstack/TechStack"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
