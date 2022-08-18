import React, {useState} from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext';
//import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import Axios from 'axios';

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



const Login = ({handlelogin}) => {

  const [inpuserpass,setinpuserpass] = useState({
    username: '',
    password: ''
  });


    
  const {setisLoggedIn} = useContext(AuthContext);  
  const {settoken} = useContext(AuthContext);
  const {setgcusername} = useContext(AuthContext);  
  const {setgnuserid} = useContext(AuthContext);  
  const {setgcemail}  = useContext(AuthContext);  

  const [txthandleerror,settxthandleerror] = useState('')


  
  const history = useHistory();

//   if(!isLoggedIn) {
//     return  <Redirect to="/" />

// }


  const handletxtonchange = (e) => {
    e.preventDefault(); 
   
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...inpuserpass }; 
    newFormData[fieldName] = fieldValue;    
    setinpuserpass(newFormData);
    

  }



  async function fn_login(e) {
      e.preventDefault(); 
      //console.log(inpuserpass);   
      //inpuserpass.username
      //inpuserpass.password   
            
      const email= "akavin@gmail.com";  
      const password= "P@gsHS!KP#kK9kqg5MpeYAdG";       
      signInWithEmailAndPassword(auth,email,password)
      .then((result)=>{
        //alert("ลงชื่อเข้าใช้เรียบร้อย")
        // console.log(result);          
        // console.log(result.user);
        // console.log(result.user.accessToken);
        
        setgnuserid((b) => (result.user.uid));
        setgcusername((a) => (result.user.displayName));
        setgcemail((a) => (result.user.email));
        settoken((a) => (result.user.accessToken));
                
        setisLoggedIn((a) => (true));  //login success
        history.push('/dashboard');
        handlelogin(`${result.user.displayName} Logout`); // change status for logout to press quit system 


    }).catch((error)=>{
        alert(error.message)
   
    })  

      
    
  }
   

  return (
    <div className="container-fluid">
    <div className="row align-items-center mt-5">
      <div className="col-sm-4">         
      </div>
      
      <div className="col-sm-4">
      <div className="card">
      <h4>
      <div className="card-header bg-secondary">      
      <span class="text-white">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-lock" aria-hidden="true"></i>&nbsp;&nbsp;ARVIC</span>
      </div></h4>
      
      <div className="card-body">
        <form method="post" autocomplete="off" onSubmit={fn_login}>
        <div className="input-group mb-3">
             
                <input type="text" placeholder="เบอร์โทรศัพท์มือถือ/เลขบัตรประชาชน"  name="username" className="form-control" onChange={handletxtonchange}  autofocus="autofocus" required />            
        </div> 


        <div className="input-group mb-3">
               
                <input type="password" placeholder="ระบุรหัสผ่าน"  name="password" className="form-control" onChange={handletxtonchange}  autofocus="autofocus" required />            
        </div> 
     
            
        <div className="input-group mb-3">          
              <button type='submit' className="form-control btn btn-success" id="myBtn">เข้าสู่ระบบ&nbsp;&nbsp;<i class="fa fa-sign-in" aria-hidden="true"></i></button>                     
        </div>
        
        </form>
        {txthandleerror !== '' ? (<p className='text-danger'>{txthandleerror}</p>) : ''}
      </div>
    
    </div>
  </div>

  <div className="col-sm-4">        
  </div>


</div>

</div>
  )
}

export default Login