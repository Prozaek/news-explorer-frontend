import React from "react";
import { Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const jwt =  localStorage.getItem("jwt");
   
    return (
      <Route>
        {
          jwt
          ? <Component {...props} /> 
          : <Redirect
          to={{
            pathname: "/",
            openAuth: props.onOpenAuthorization() 
          }}/>  
        }
      </Route>
    );
  };
  
  export default ProtectedRoute;
