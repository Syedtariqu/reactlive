import React from 'react';
import "./"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  { Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
<>
<BrowserRouter>
  <NavBar/>
<Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service' element={<Service />}></Route>
      
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route  path='/redirect' element={ <Navigate  to='/'/>}></Route> */}
  </Routes>
<Footer/> 
</BrowserRouter> 
</>
  );
}

export default App;
