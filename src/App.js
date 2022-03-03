//import Header from "./components/header";
//import Listes from "./components/list/Listes";
//import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
//import Album from "./pages/album/Album";
import Artiste from "./pages/artiste";

function App() {
  return (
    <div className="App">
    <div className='text-sm-center p-3 bg-dark'>
        <h4 className='text-uppercase text-center fw-bold text-white'> deez-web </h4>
    </div>

  
   <Routes>
     <Route path="/" exact element = {<Artiste />} />
   </Routes>
    
    
    </div>
  );
}

export default App;
/***
 *  <Routes>
      <Route path="/" exact element={<Header/>} />
      <Route path="/album/:id" exact element={ <Album />} />
      
    </Routes>
 */