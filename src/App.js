import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home'
import Accomodation from './pages/accomodation/Accomodation'
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accomodation/:id' element={<Accomodation/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
