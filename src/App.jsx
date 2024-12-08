import Hero from './Components/Hero'
import About from './Components/About'
import { Navbar } from './Components/Navbar'

function App() {
  return (
    <div className='min-h-screen relative w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App