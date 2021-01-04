import { Switch,Route,Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { mainRoute } from "./routes";

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
       {
         mainRoute.map((route,index)=>{
           return(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
           )
         })
       }
      <Redirect to='/' /> 
     </Switch>
    </>
  );
}

export default App;
