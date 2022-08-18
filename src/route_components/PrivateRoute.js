import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import AuthContext from './AuthContext'
import { Redirect } from 'react-router-dom'


const PrivateRoute = ({children,...rest}) => {
    const {isLoggedIn} = useContext(AuthContext);

  return (
    <Route {...rest} render = { (props) => {
        return isLoggedIn ? children : <Redirect to = "/login" />;
    }} 
    />
  );
};

export default PrivateRoute;