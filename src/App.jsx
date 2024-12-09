import Hero from './Components/Hero'
import About from './Components/About'
import { Navbar } from './Components/Navbar'
import Features from './Components/Features'
import Story from './Components/Story'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='min-h-screen relative w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App