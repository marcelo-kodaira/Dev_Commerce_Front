import {  Switch, Route as ModalRoute } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Route} from "./Route"
import SignUp from "../pages/Acess/SignUp";
import Login from "../pages/Acess/Login";
import Home from "../pages/Home";
import MyProducts from "../pages/MyProducts";
import NotFound from "../pages/NotFound";
import ModalProductDetails from "../components/Modal/ModalDetails";


const Routes = () =>{
  const {token} = useAuth()
  
  return(
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/register" component={SignUp}/>
    <Route path="/home" component={Home} isPrivate/>
    <ModalRoute path="/home/:id" component={ModalProductDetails}/>
    <Route path="/myproducts" component={MyProducts} isPrivate/>
    <Route component={NotFound} isPrivate={!!token}/>
  </Switch>

)
}
export default Routes