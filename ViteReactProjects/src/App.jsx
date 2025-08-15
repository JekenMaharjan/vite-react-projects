import { Routes, Route, Link } from 'react-router-dom'
import MoodTracker from './moodTracker/MoodTracker'
import Clock from './clock/Clock'
import CounterApp from './counterApp/CounterApp'

function App() {
    return (
    <div 
    className='h-screen w-screen flex flex-col items-center justify-center'
    style={{ background: "linear-gradient(135deg, #7c18ffbd 0%, #a3a3a3ff 100%)" }}
    >
        {/* Navigation Links */}
        <div className="navBar">
            <nav clas>
                <Link to="/counter-app">CounterApp</Link> 
                <Link to="/mood-tracker">MoodTracker</Link>
                <Link to="/clock">Clock</Link> 
            </nav>
        </div>
        
      
        {/* Page Routes */}
        <Routes>
            <Route path="/counter-app" element={<CounterApp/>} />
            <Route path="/mood-tracker" element={<MoodTracker/>} />
            <Route path="/clock" element={<Clock/>} />
        </Routes>
    
    </div>
  )
}

export default App
