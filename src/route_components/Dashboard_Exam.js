import React , { useState}  from 'react'

import { useContext } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { Link, useRouteMatch,Switch,Route } from 'react-router-dom'




const Dashboard_Exam = () => {
  
   const {token,settoken} = useContext(AuthContext);
   
   const [getoutput,setgetoutput] = useState([]);

   const history = useHistory();
   const {path,url} = useRouteMatch();


   const fn_testapi = async (e) => { 
         
    e.preventDefault();

    //const myurl = "/api/users";
    let myurl ="/api/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2";
    //const myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=bmi&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";
    //let myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=spo2&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
    //let myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=blood_sugar&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
    
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
      // console.log(output.first_name);   
      // console.log(output.last_name);   
      // console.log(output.gender);   
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
      <strong>????????????????????????????????????????????????????????????????????? ARVIC &nbsp;</strong>

      <button onClick={fn_testapi} class='btn btn-secondary'>Press Example GetAPI from https://dashboard-dev.arvic.cariva.co.th</button>
 
      <a id='a1' href={"/FrmMainGraph"} className="nav-link text-primary active" onClick={(e) => fn_active(e,"/FrmMainGraph")}>
        <h6>????????????????????????????????????</h6>
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

export default Dashboard_Exam