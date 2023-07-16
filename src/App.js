import './App.css';
import Navbarlinks from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Creater from './Components/Creater';
import Blogdetails from './Components/Blogdetailscomponent';
function App() {
  return (
   <Router>
     <div className="App">
       <div className="content">
       <Navbarlinks/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Create" component={Creater}/>
         <Route exact path="/Blogdetails/:id"  component={Blogdetails}/>
       </Switch>
       </div>
     </div>
   </Router>
  );
}

export default App;
