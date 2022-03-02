import Header from "./components/header";
import Listes from "./components/list/Listes";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
    <div className='text-sm-center p-3 bg-dark'>
        <h4 className='text-uppercase text-center fw-bold text-white'> deez-web </h4>
    </div>
      <Navbar />
      <Header/>
    
    </div>
  );
}

export default App;
