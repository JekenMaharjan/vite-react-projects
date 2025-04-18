import { Routes, Route, Link } from 'react-router-dom'
import MoodTracker from './mood-tracker/moodTracker'
import Clock from './Clock/clock'
import CounterApp from './counter-app/CounterApp'

function App() {
    return (
    <div>
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
