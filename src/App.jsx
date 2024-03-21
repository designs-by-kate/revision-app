
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import HTMLmodule from './pages/HTMLmodule/HTML';
import CSSmodule from './pages/CSSmodule/CssCourse';
import JSmodule from './pages/JSmodule/JavaScript';
import { QuizProvider } from './pages/Quiz/QuizContext';
import Quiz from './pages/Quiz/Quiz';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/html" element={<HTMLmodule />}/>
        <Route path="/css" element={<CSSmodule />}/>
        <Route path="/javascript" element={<JSmodule />}/>
        <Route path="/quiz" element={<QuizProvider><Quiz /></QuizProvider>} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </Router>
    </div>
  )
}

export default App;
