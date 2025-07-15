import Navbar from './components/Navbar'
import Spline from './components/Spline'

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden max-w-full max-h-full relative">
        <Spline />
      </div>
    </>
  )
}

export default App
