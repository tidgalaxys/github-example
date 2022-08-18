import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext';

import { initializeApp } from 'firebase/app';
import { getAuth,  onAuthStateChanged , signOut, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {        
  apiKey: "AIzaSyASdmSr3a_ikPzioCLE7SNldBnMQcrAxxk",
  authDomain: "cariva-arvic-dev.firebaseapp.com",
  projectId: "cariva-arvic-dev",
  storageBucket: "cariva-arvic-dev.appspot.com",
  messagingSenderId: "359520590912",
  appId: "1:1029891048164:web:736950db28859a400b22f1",
  measurementId: "G-SL6DL7DC1K"
  
};


const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

const Logout = ({handlelogin}) => {
    const {setisLoggedIn} = useContext(AuthContext);    
    const {settoken} = useContext(AuthContext);    
    handlelogin("login");
    setisLoggedIn((a) => (false)); 
    settoken('');

    signOut(auth).then(()=>{
      //alert("ออกจากระบบเรียบร้อย")
    }).catch((error)=>{
        alert(error.message)
    })
              
  return (
    <div>คุณได้ออกจากระบบเรียบร้อยแล้วครับ</div>
  )
}

export default Logout