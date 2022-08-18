import React from 'react'
import { useState } from 'react'

import {BrowserRouter as Router,Route ,Switch} from "react-router-dom"
import Login from "./route_components/Login"
import Dashboard from "./route_components/Dashboard"
import Patientlists from "./route_components/Patientlists"
import Manageuser from "./route_components/Manageuser"
import Questionaire from "./route_components/Questionaire"

import FrmMainGraph from './route_components/FrmMainGraph'



import Navbar from './route_components/Navbar'

import Notfound from './route_components/Notfound'
import Logout from './route_components/Logout'


import {AuthContextProvider} from './route_components/AuthContext'
import PrivateRoute from './route_components/PrivateRoute'




const App = () => {
  const [statuslogin,setstatuslogin] = useState('login');
    
  const handlelogin = (para1) => {
    setstatuslogin((a) => (para1));  
  }
    
  return (
    <div>
      

     <AuthContextProvider>
      <Router>            
        <Navbar statuslogin={statuslogin}/>
        <Switch>

          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
                  

          <PrivateRoute path="/Dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/Patientlists">
            <Patientlists />
          </PrivateRoute>

          <PrivateRoute path="/Manageuser">
            <Manageuser />
          </PrivateRoute>

          <PrivateRoute path="/Questionaire">
            <Questionaire />
          </PrivateRoute>
               
 
          <PrivateRoute path="/FrmMainGraph">
            <FrmMainGraph />
          </PrivateRoute>



          <Route path="/login">
            <Login handlelogin={handlelogin} />
          </Route>  

          
          <PrivateRoute path="/logout">
            <Logout handlelogin={handlelogin} />
          </PrivateRoute> 

          

          <Route>
            <Notfound />
          </Route>      

         

      </Switch>       
    </Router>
    </AuthContextProvider>
    
    </div>
    
  )
}

export default App


