import React from "react";
import {Route,Redirect} from "react-router-dom";
import{isAuthenticated} from "./index";

//children means multiple things can be renderd.so we dont need all.
const AdminRoute=({ component:Component, ...rest }) =>{
    return (
      <Route
        {...rest}
        render={  props =>
          isAuthenticated() && isAuthenticated().user.role===1 ? (
           < Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };
  export default AdminRoute;