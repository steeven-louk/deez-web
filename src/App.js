import Header from "./components/header";
//import Listes from "./components/list/Listes";
//import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Album from "./pages/album/Album";
import Artiste from "./pages/artiste";
import Track from "./pages/track";

function App() {
  return (
    <div className="App">
    <div className='text-sm-center p-3 bg-dark'>
        <h4 className='text-uppercase text-center fw-bold text-white'> deez-web </h4>
    </div>

  
     
   <Routes>
      <Route path="*" exact element={<Header/>} />
      <Route path="/album/:id" element={ <Album />} />
      <Route path="/artiste/:id" element = {<Artiste />} />
      <Route path="/track/:id" element = {<Track />} />
      
    </Routes>
    
    
    </div>
  );
}

export default App;
/***
 *  
 */