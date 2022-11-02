import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Testt from './pages/Testt';
import Bisection from './pages/RootofEquation/Bisection';
import FalsePosition from './pages/RootofEquation/FalsePosition';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/test" element={<Testt/>}/>
        <Route exact path="/rootsofequation/bisection" element={<Bisection/>}/>
        <Route exact path="rootsofequation/falseposition" element={<FalsePosition/>}/>
      </Routes>
    </Router>
  );
}

export default App;
