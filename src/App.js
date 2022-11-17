import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Overview/Home';
import Page404 from './pages/Pagenotfound404';
import Test from './pages/RootofEquation/Test';
import Bisection from './pages/RootofEquation/Bisection';
import FalsePosition from './pages/RootofEquation/FalsePosition';
import Onepoint from './pages/RootofEquation/Onepoint';
import NewtonRaphson from './pages/RootofEquation/NewtonRaphson';
import Secant from './pages/RootofEquation/Secant';
import CramerRule from './pages/LinearAlgebra/CramerRule';
import TestCramerRule from './pages/LinearAlgebra/TestCramerRule';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="*" element={<Page404/>}/>
        <Route exact path="/overview/home" element={<Home/>}/>
        <Route exact path="/test" element={<Test/>}/>
        <Route exact path="/rootsofequation/bisection" element={<Bisection/>}/>
        <Route exact path="/rootsofequation/falseposition" element={<FalsePosition/>}/>
        <Route exact path="/rootsofequation/onepoint" element={<Onepoint/>}/>
        <Route exact path="/rootsofequation/newtonraphson" element={<NewtonRaphson/>}/>
        <Route exact path="/rootsofequation/secant" element={<Secant/>}/>
        <Route exact path="/linearalgebra/cramerrule" element={<CramerRule/>}/>
        <Route exact path="/linearalgebra/testcramerrule" element={<TestCramerRule/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
