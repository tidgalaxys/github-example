import React , { useState}  from 'react'

import { useContext } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { Link, useRouteMatch,Switch,Route } from 'react-router-dom'



const Dashboard = () => {
  
   const {token,settoken} = useContext(AuthContext);
   
   const [getoutput,setgetoutput] = useState([]);

   const history = useHistory();
   const {path,url} = useRouteMatch();


   const fn_testapi = async (e) => { 
         
    e.preventDefault();

    const myurl = "/api/users"
    
    await axios.get(myurl,{        
      'withCredentials': false,        
      headers: {     
        "authorization": `Bearer ${token}`,  
        'Content-Type': 'application/json',            
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',          
      }

    }).then( (response) => {          
      let output = response.data            
      console.log('output',output);       
      setgetoutput(output.items);
           
    }).catch(err => {
          
      console.log(err.message);                           

  }) 

  }


  
  const fn_active = (e,strpage) => {
    
    e.preventDefault();                           
     history.push(strpage);
                      
  }



  return (
    <div className='container-fluid mt-4'>
      
      <i class="fa fa-home" style={{fontSize: '35px'}} aria-hidden="true"></i>
      <strong>ยินดีต้อนรับเข้าสู่ระบบ ARVIC &nbsp;</strong>

      <button onClick={fn_testapi} class='btn btn-secondary'>Press Example GetAPI from https://dashboard-dev.arvic.cariva.co.th</button>
 
      <a id='a1' href={"/FrmMainGraph"} className="nav-link text-primary active" onClick={(e) => fn_active(e,"/FrmMainGraph")}>
        <h6>ตัวอย่างกราฟ</h6>
      </a> 

      {
        getoutput && getoutput.map( (e) => {
           return(          
            <>
            <p>UID: {e.uid}:</p>
            <p>First_Name: {e.first_name}</p>
            <p>Last_Name: {e.last_name}</p>
            <hr></hr>
            </>
           
           )

        })
      }
      


    </div>
  )
}

export default Dashboard