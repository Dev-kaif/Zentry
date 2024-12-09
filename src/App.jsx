import Hero from './Components/Hero'
import About from './Components/About'
import { Navbar } from './Components/Navbar'
import Features from './Components/Features'
import Story from './Components/Story'

function App() {
  return (
    <div className='min-h-screen relative w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story />
    </div>
  )
}

export default App