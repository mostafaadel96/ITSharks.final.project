import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Singlepost from "./Components/Singlepost";
import Getpostbycatagory from "./Components/Getpostbycatagory"
import {BrowserRouter , Routes ,Route} from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="" element={ <Home />} />
      <Route path="/home" element={ <Home />} />
      <Route path="/category/:category" element={ <Getpostbycatagory />} />
      <Route path="/single/:id" element={ <Singlepost /> } />
    </Routes>
      
    
      <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
