import {  Switch } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Route} from "./Route"
import SignUp from "../pages/Acess/SignUp";
import Login from "../pages/Acess/Login";


const Routes = () =>{
  const {token} = useAuth()
  
  return(
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/register" component={SignUp}/>
    {/* <Route path="/dashboard" component={Dashboard} isPrivate/>
    <Route component={PageNotFound} isPrivate={!!token}/> */}
  </Switch>

)
}
export default Routes