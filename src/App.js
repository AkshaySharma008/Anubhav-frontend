import { Switch,Route,Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar";
import OverlayModal from "./Component/OverlayModal";
import { mainRoute } from "./routes";

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
       {/* {
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
      <Redirect to='/' />  */}
      <OverlayModal 
        modalContent={{
            heading: 'Successfully Submitted',
            icon: 'fa-smile-o',
            text: 'Chutiya',
        }}
        show="true"
        />
     </Switch>
    </>
  );
}

export default App;
