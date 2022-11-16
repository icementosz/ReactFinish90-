import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Testt from './pages/Testt';
import Page404 from './pages/Pagenotfound404';
import Bisection from './pages/RootofEquation/Bisection';
import FalsePosition from './pages/RootofEquation/FalsePosition';
import CramerRule from './pages/LinearAlgebra/CramerRule';
import TestCramerRule from './pages/LinearAlgebra/TestCramerRule';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Testt/>}/>
        <Route exact path="*" element={<Page404/>}/>
        <Route exact path="/rootsofequation/bisection" element={<Bisection/>}/>
        <Route exact path="/rootsofequation/falseposition" element={<FalsePosition/>}/>
        <Route exact path="/linearalgebra/cramerrule" element={<CramerRule/>}/>
        <Route exact path="/linearalgebra/testcramerrule" element={<TestCramerRule/>}/>
      </Routes>
    </Router>
  );
}

export default App;
