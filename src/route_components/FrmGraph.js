import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { ComposedChart,Bar } from "recharts";

import { useRef,forwardRef } from "react";
import ReactToPrint from "react-to-print";

import './mycss.css'  


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
        <div style={{ width: "95%", height: 415 }}> 
         <ResponsiveContainer >
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
      <div style={{ width: "95%", height: 415 }} > 
           <ResponsiveContainer>
              <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20
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

    e.target.parentNode.parentNode.style.border = "1px dashed";            
    
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
    el2[0].style.width = "96.12%";
    const el = document.querySelectorAll("#div1");
    el[0].classList.add("d-none");                                    
  }

  const fn_showgraphlab = (e) => {
      e.preventDefault();                         
      const el = document.querySelectorAll("#div1");
      el[0].className = "col-sm-3 my-2";        
      el[0].style.width = "26.12%";        
      const el2 = document.querySelectorAll("#div0");          
      el2[0].className = "col-sm-8 my-2";
      el2[0].style.width = "70%"; 
  }

  const fn_showlab = (e) => {
    e.preventDefault(); 
    const el2 = document.querySelectorAll("#div0"); 
    el2[0].classList.add("d-none");                                           
    el2[0].style.width = "0%";
    
    const el = document.querySelectorAll("#div1");
    el[0].className = "col-sm-11 my-2";        
    el[0].style.width = "96.12%";
    
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
              <button  type="button" class="btn btn-primary text-white mx-1" onClick={(e) => fn_showgraph(e)}>กราฟ</button>
              <button  type="button" class="btn btn-primary text-whitem mx-1" onClick={(e) => fn_showgraphlab(e)}>กราฟและผลแล็บ</button>              
              <button  type="button" class="btn btn-primary text-white mx-1" onClick={(e) => fn_showlab(e)}>ผลแล็บ</button>              
              <ReactToPrint            
                trigger={() =><button class="btn btn-primary text-white mx-1">พิมพ์</button>}
                content={() => componentRef.current}            
              />

            </div>      
        </div>
      </div>
    </div> 
</div>



<div class="row">

<div class="col-sm-1 my-2" style={{ width: "2.80%"}}>    
    <div class="row"> 

      <div class="col-sm-12 my-3"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">       
          <a href="#" onClick={(e) => fn_changetype(e,'1')} >
            <i class="fa fa-user fa-lg" aria-hidden="true"></i></a>         
        </div>       
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#" class="text-danger" onClick={(e) => fn_changetype(e,'2')}>
            <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-danger">
            <i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i>                    
          </a>
        </div>                
        
      </div>


      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-warning">
            <i class="fa fa-plus-square fa-lg" aria-hidden="true"></i>
          </a>
          
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-center text-primary">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-success">
          <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-secondary">
            <i class="fa fa-wheelchair fa-lg" aria-hidden="true"></i>                     
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">          
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-dark">
            <i class="fa fa-stethoscope fa-lg" aria-hidden="true"></i>
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-danger">
            <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>          
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#" onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-dark">
            <i class="fa fa-ambulance fa-lg" aria-hidden="true"></i>
          </a>
        </div>                
      </div>

      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-primary">
            <i class="fa fa-hospital-o fa-lg" aria-hidden="true"></i>          
          </a>
        </div>                
      </div>
      
      <div class="col-sm-12 my-2"> 
        <div id='divnav' class="d-inline p-2 bg-light text-primary text-center">
          <a href="#"  onClick={(e) => fn_changetype(e,'1')} class="pe-auto text-dark">
            <i class="fa fa-user-md fa-lg" aria-hidden="true"></i>  
          </a>        
        </div>                
      </div>


  
    </div>
  </div>


  <div class="col-sm-11 my-2" id="div0" style={{ width: "96.12%"}}>    
    <div class="row">  
       <div class="col-sm-12">
        <div class="card">
            <div class="card-body">  
                <h5 class="card-title">กราฟ</h5>                                 
               
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