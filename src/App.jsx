import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import WorkoutSchedule from './components/WorkoutSchedule.jsx';
import Packages from './components/Packages.jsx';
import Trainers from './components/Trainers.jsx';
import Events from './components/Events.jsx';
import QuickLinks from './components/QuickLiks.jsx';
import Footer from './components/Footer.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx';
import FullWeek from './components/FullWeek.jsx';
import Terms from './components/Terms.jsx';
import Privacy from './components/Privacy.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <WorkoutSchedule />
                <Packages />
                <Trainers />
                <Events />
                <QuickLinks />
                <Footer />
              </>
            }
            />
          <Route path="/Services" element={<Services />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/FullWeek" element={<FullWeek />}/>
          <Route path="/terms" element={<Terms />} />        
          <Route path="/privacy" element={<Privacy />} />        
        </Routes>
      </div>
    </>
  );
}

export default App;