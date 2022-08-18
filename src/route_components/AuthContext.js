import React, { createContext,useState } from "react";
const AuthContext = createContext();
export default AuthContext;

export  const AuthContextProvider = (props) => {    
    const [gnuserid,setgnuserid] = useState(0);
    const [gcusername,setgcusername] = useState('');
    const [gcemail,setgcemail] = useState('');
    const [token,settoken] = useState('');
    const [isLoggedIn,setisLoggedIn] = useState(false);

    return(

        <AuthContext.Provider value = {{isLoggedIn,setisLoggedIn,token,settoken,gcusername,setgcusername,gnuserid,setgnuserid,gcemail,setgcemail}}>
            {props.children}
        </AuthContext.Provider>
    )

}