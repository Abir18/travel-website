import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
// import NotFound from './components/NotFound/NotFound';
// import PlaceOrder from './components/PlaceOrder/PlaceOrder';
// import MyOrder from './components/MyOrder/MyOrder';
// import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
// import AddNewService from './components/AddNewService/AddNewService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/manage-all-order">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/add-new-service">
              <AddNewService></AddNewService>
            </Route> */}
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
