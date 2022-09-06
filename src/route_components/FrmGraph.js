import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { ComposedChart,Bar } from "recharts";

import { useRef,forwardRef } from "react";
import ReactToPrint from "react-to-print";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './mycss.css'  


// https://www.npmjs.com/package/react-datepicker

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MyLineChart = forwardRef(({data}, ref) => {  
  
  return (              
                 
        <div ref={ref}>
        <br></br>
        <div style={{ width: "100%", height: 415 }}> 
         <ResponsiveContainer >
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 87,
                  bottom: 50,
                  left: 90
              }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />

                <Line connectNulls yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line connectNulls yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer> 
         </div>   
         
         <div className="row justify-content-around">
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                120
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    
         </div>
         
         
         </div>
        
    )
  });


  const MyComposedChart = forwardRef(({data}, ref) => {        
    return (
    <div ref={ref}>
      <br></br>
      <div style={{ width: "100%", height: 415 }} > 
           <ResponsiveContainer>
              <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                      top: 10,
                      right: 87,
                      bottom: 50,
                      left: 90
                  }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
           </ResponsiveContainer>
           </div>

           <div className="row justify-content-around">
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                120
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-item">
                        <div className="card-stats card">
                            <div className="card-body">      
                                <p className="card-text text-center">BMI</p>        
                            </div>
                            <div className="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    
        
            
        </div>
    </div>
      )
    });


const FrmGraph = ({lcpara,fn_callbackme}) => {

  const [startDate, setStartDate] = useState(new Date());

  const componentRef = useRef(); 
  

  const [typegraph,settypegraph] = useState("1");

  const fn_changetype = (e,type) => {
    e.preventDefault(); 

    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.target.parentNode);
    //console.log(e.target.parentNode.parentNode);    
     
    var el = document.querySelectorAll('#divnav');
    [].forEach.call(el, function(el) {
      el.style.border = "0px";       
    });

    var el2 = document.querySelectorAll('#divnava');
    [].forEach.call(el2, function(el2) {      
      el2.style.color = "blue";      
      el2.style.backgroundColor= "white";
    });

    //e.target.parentNode.parentNode.style.border = "1px dashed";            
    e.target.parentNode.parentNode.style.border = "1px #FFFFFF";            
    e.target.parentNode.style.color= "white";
    e.target.parentNode.style.backgroundColor= "purple";         
    
    settypegraph(type);

  }

  const fn_print = (e) => {
    e.preventDefault(); 
    
  }

  const fn_showgraph = (e) => {
    e.preventDefault(); 
    fn_callbackme();
    const el2 = document.querySelectorAll("#div0");    
    el2[0].className = "col-sm-11 my-2"; 
    el2[0].style.width = "97.2%";
    const el = document.querySelectorAll("#div1");
    el[0].classList.add("d-none");                                    
  }

  const fn_showgraphlab = (e) => {
      e.preventDefault();                         
      const el = document.querySelectorAll("#div1");
      el[0].className = "col-sm-3 my-2";        
      el[0].style.width = "23.2%";        
      const el2 = document.querySelectorAll("#div0");          
      el2[0].className = "col-sm-8 my-2";
      el2[0].style.width = "74%"; 
  }

  const fn_showlab = (e) => {
    e.preventDefault(); 
    const el2 = document.querySelectorAll("#div0"); 
    el2[0].classList.add("d-none");                                           
    el2[0].style.width = "0%";
    
    const el = document.querySelectorAll("#div1");
    el[0].className = "col-sm-11 my-2";        
    el[0].style.width = "97.2%";
    
  }


return(
<div class="container-fluid my-2">   

  <div class="row">  
    <div class="col-sm-12 my-2">
    <div class="float-start"><img src="https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"  width="50" height="100" class="img-fluid rounded-start" alt="..." /></div>
      <div class="float-start">      
          <div>&nbsp;&nbsp;นาย สมชาย สุขภาพดี  {lcpara}</div>
          <div>&nbsp;&nbsp;1-58XXXXX534-8</div>          
      </div>
    </div>
  </div>


<div class="row">
  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">             
           <div class="text-center">
              <button  type="button" class="btn btn-outline-primary mx-1" onClick={(e) => fn_showgraph(e)}><i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;กราฟ</button>
              <button  type="button" class="btn btn-outline-primary mx-1" onClick={(e) => fn_showgraphlab(e)}><i class="fa fa-table" aria-hidden="true"></i>&nbsp;กราฟและผลแล็บ</button>              
              <button  type="button" class="btn btn-outline-primary mx-1" onClick={(e) => fn_showlab(e)}><i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;ผลแล็บ</button>                           
            </div>      
        </div>
      </div>
    </div> 
</div>


<div class="row">
<div class="col-sm-1 my-1" style={{ width: "2.8%"}}> 
     <div class="row">
      <div class="col-sm-12 my-1"> 
        {/* <ul class="nav flex-column border border-light"> */}
        <ul class="nav flex-column">
          <li  id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" aria-current="page" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-heart" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'2')}><i class="fa fa-stethoscope" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-user-md" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-wheelchair" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-user" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-hospital-o" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-ambulance" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          </li>
          <li id='divnav' class="nav-item text-center">
            <a id='divnava' class="nav-link" href="#" onClick={(e) => fn_changetype(e,'1')}><i class="fa fa-heartbeat" aria-hidden="true"></i></a>
          </li>
          
        </ul>
      </div>
     </div>    
</div>


  <div class="col-sm-11 my-2" id="div0" style={{ width: "97.18%"}}>    
    <div class="row">  
       <div class="col-sm-12">
        <div class="card">
            <div class="card-body"> 
                             
            {/* <h5 class="card-title text-start">กราฟ</h5> */}
          
                          <div className="row justify-content-around">
                            <div className="col-sm-2 col-item">   
                                <div class="card-text text-start">
                                <select  className="form-select" name=""> 
                                           <option value='0' selected>ดัชนีมวลกาย(ฺBMI)</option>                      
                                           <option value='1'>กราฟน้ำหนัก</option>                      
                                           <option value='1'>กราฟส่วนสูง</option>                      
                                           </select>
                                </div> 
                            </div>
                            <div className="col-sm-6 col-item">   
                            </div>
                            <div className="col-sm-4 col-item">   
                                <div class="card-text text-end">
                                    <div class="d-flex flex-row">                                                                                                                     
                                        <div class='p-2'>
                                        <select className="form-select" name=""> 
                                          <option value='0'>ประเภทข้อมูล</option>                      
                                           <option value='1'>ข้อมูลที่บันทึกเอง</option>                      
                                           <option value='2'>ข้อมูลจากชุดตรวจวัด</option>                      
                                           <option value='3'>ข้อมูลจากแอพและอุปกรณ์</option>                      
                                           <option value='4'>ข้อมูลจากสถานพยาบาล</option>                      
                                           </select>
                                        </div>

                                        <div class='p-2'>
                                        <DatePicker className="form-select" name=""
                                          selected={startDate}
                                          onChange={(date) => setStartDate(date)}
                                          dateFormat="MM/yyyy"
                                          showMonthYearPicker
                                        />                                   
                                       
                                         
                                        </div>

                                        <div class='p-2'>
                                          <ReactToPrint            
                                            trigger={() =><button class="btn btn-primary text-white mx-1"><i class="fa fa-print fa-lg" aria-hidden="true"></i></button>}
                                            content={() => componentRef.current}            
                                          />
                                         
                                        </div>

                                    </div>                                                                            
                                    
                                </div>
                            
                            </div>
                        
                          </div>

                                                                    
                {
                  typegraph === "1" ? 
                  (
                    <MyLineChart ref={componentRef} data={data} /> 
                    // <MyLineChart data={data} /> 

                  ) : null                    
                 
                }

                {
                  typegraph === "2" ? 
                  (                    
                    <MyComposedChart ref={componentRef} data={data} /> 
                  ) : null                    
                 
                }                
             
                    {/* <ResponsiveContainer>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />

                            <Line connectNulls yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line connectNulls yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer> */}
                
                

                {/* <div class="row justify-content-around">
                    <div class="col-sm-1 col-item">
                        <div class="card-stats card">
                            <div class="card-body">      
                                <p class="card-text text-center">BMI</p>        
                            </div>
                            <div class="card-footer text-center">        
                                120
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1 col-item">
                        <div class="card-stats card">
                            <div class="card-body">      
                                <p class="card-text text-center">BMI</p>        
                            </div>
                            <div class="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1 col-item">
                        <div class="card-stats card">
                            <div class="card-body">      
                                <p class="card-text text-center">BMI</p>        
                            </div>
                            <div class="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1 col-item">
                        <div class="card-stats card">
                            <div class="card-body">      
                                <p class="card-text text-center">BMI</p>        
                            </div>
                            <div class="card-footer text-center">        
                                190
                            </div>
                        </div>
                    </div>
                    
                </div> */}

        
                     
            </div>
        </div>
      </div>      
  
    </div>
  </div>
  
    <div className="col-sm-3 my-2 d-none" id="div1">
      <div className="row">  
        <div className="col-sm-12">
          <div className="card">
              <div className="card-body">  
                  <h5 className="card-title">ผลแล็บ</h5>        
              </div>
          </div>
        </div>       
    
    </div>    
  </div>

</div> 

</div>    


)};

export default FrmGraph