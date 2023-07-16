import './App.css';
import Navbarlinks from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
     <Navbarlinks />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
