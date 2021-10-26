import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
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

import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tests">
              <Tests></Tests>
            </PrivateRoute>
           <Route path='/services'>
          <Services></Services>
           </Route>
           <PrivateRoute path="/doctors">
          <Doctors></Doctors>
           </PrivateRoute>
           <PrivateRoute path="/appoinment">
          <Appoinment></Appoinment>
           </PrivateRoute>
           <Route path="/contactus">
             <ContactUs></ContactUs>
           </Route>
           <Route path="/login">
            <Login></Login>
           </Route>
           <PrivateRoute path="/booking/:serviceId">
             <Booking></Booking>
           </PrivateRoute>
           <Route path="*">
              <NotFound></NotFound>             
           </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
