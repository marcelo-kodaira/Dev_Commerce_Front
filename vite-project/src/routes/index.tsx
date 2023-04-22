import {  Switch } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Route} from "./Route"
import SignUp from "../pages/Acess/SignUp";
import Login from "../pages/Acess/Login";
import Home from "../pages/Home";
import MyProducts from "../pages/MyProducts";


const Routes = () =>{
  const {token} = useAuth()
  
  return(
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/register" component={SignUp}/>
    <Route path="/home" component={Home} isPrivate/>
    <Route path="/myproducts" component={MyProducts} isPrivate/>
    {/* <Route component={PageNotFound} isPrivate={!!token}/> */}
  </Switch>

)
}
export default Routes