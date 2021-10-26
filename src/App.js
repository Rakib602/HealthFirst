import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Common/Header';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';
import Login from './Components/Login/Login';
import Footer from './Components/Common/Footer';
import Tests from './Components/Tests/Tests';
import Appoinment from './Components/Appoinment/Appoinment';
import NotFound from './Components/NotFound';
import Booking from './Components/Booking/Booking';
import ContactUs from './Components/ContactUs';
import Pharmacy from './Components/Pharmacy';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/tests">
              <Tests></Tests>
            </Route>
           <Route path='/services'>
          <Services></Services>
           </Route>
           <Route path="/doctors">
          <Doctors></Doctors>
           </Route>
           <Route path="/appoinment">
          <Appoinment></Appoinment>
           </Route>
           <Route path="/login">
            <Login></Login>
           </Route>
           <Route path="/booking/:serviceId">
             <Booking></Booking>
           </Route>
           <Route path="/ambulance">
             <ContactUs></ContactUs>
           </Route>
           <Route path="/icu">
             <ContactUs></ContactUs>
           </Route>
           <Route path="/pharmacy">
             <Pharmacy></Pharmacy>
           </Route>
           <Route path="*">
              <NotFound></NotFound>             
           </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
