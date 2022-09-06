import React, { PureComponent,useEffect, useState } from 'react';
import { FunctionComponent } from "react";

import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { ComposedChart, Bar,BarChart } from "recharts";
import FrmGraph from './FrmGraph';
import axios from 'axios';
import { useContext } from 'react'
import AuthContext from './AuthContext';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import {  format, parse, setDayOfYear } from "date-fns";

import { useParams} from "react-router-dom"




// import './mycss.css'

// manual help
// https://gofutureacademy.atlassian.net/wiki/spaces/AVD/pages/32735236/API+Endpoints
// https://www.figma.com/file/FDzAgwNZh258mOc0td1VXG/ARVIC-DASHBOARD-(2022-09-03-Dr.Kavin-version)

//https://recharts.org/en-US/guide/customize
//https://codesandbox.io/s/recharts-area-chart-with-date-axis-6o55k?file=/src/CustomTooltip.js:221-611

function FrmMainGraph() {

    const {id} = useParams();
    const [isloading,setisloading] = useState(false);
    const {token,settoken} = useContext(AuthContext);
    const [data,setdata] = useState([]);
    
    const [originaldata,setoriginaldata] = useState([]);    
    const [originaldata2,setoriginaldata2] = useState([]);
    const [originaldata3,setoriginaldata3] = useState([]);
    const [originaldata4,setoriginaldata4] = useState([]);
    const [originaldata5,setoriginaldata5] = useState([]);
    const [originaldata6,setoriginaldata6] = useState([]);
    const [originaldata7,setoriginaldata7] = useState([]);
    const [originaldata8,setoriginaldata8] = useState([]);
    const [originaldata9,setoriginaldata9] = useState([]);
    const [originaldata10,setoriginaldata10] = useState([]);
    const [originaldata11,setoriginaldata11] = useState([]);
    const [originaldata12,setoriginaldata12] = useState({});
    
    

    useEffect(() => {
        async function fetchData() { 

            // const myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=bmi&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";           
            let myurl ="/api/observations/graph/users/" + id + "?type=bmi&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";

            //const myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=bmi&start_date=2022-08-01&end_date=2022-08-31&source=wearable";            
            //const myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=water_consumption&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";
            //const myurl ="/api/observations/graph/users/3v9GeJUg8IUnfi7M6IvLJsCcdQT2?type=bp&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";            
            //water_consumption ปริมาณน้ำดื่ม
            //bp ความดันโลหิต
                                   
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
              //console.log('output',output);
              //setdata(output.data)
              //console.log(output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata(outputarr.reverse());                     
                           
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
        async function fetchData2() { 
          
            let myurl2 ="/api/observations/graph/users/" + id + "?type=walking_step&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl2,{        
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
              //console.log('output',output);
              //setdata(output.data)
              //console.log(output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata2(outputarr);                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
        async function fetchData3() { 
          
            let myurl3 ="/api/observations/graph/users/" + id + "?type=water_consumption&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl3,{        
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
              //console.log('output',output);
              //setdata(output.data)
              //console.log(output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata3(outputarr);                     
                                             
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
            
        async function fetchData4() { 
          
            let myurl4 ="/api/observations/graph/users/" + id + "?type=sleeping_total_minute&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl4,{        
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
              //console.log('การนอน',output);
              //setdata(output.data)
              //console.log('การนอน',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata4(outputarr);                     
                                 

    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
         
        async function fetchData5() { 
          
            let myurl5 ="/api/observations/graph/users/" + id + "?type=bp&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl5,{        
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
              //console.log('bp',output);
              //setdata(output.data)
              //console.log('bp',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata5(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }

        async function fetchData6() { 
          
            let myurl6 ="/api/observations/graph/users/" + id + "?type=spo2&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl6,{        
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
              //console.log('spo2',output);
              //setdata(output.data)
              //console.log('spo2',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata6(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
        
        async function fetchData7() { 
          
            let myurl7 ="/api/observations/graph/users/" + id + "?type=blood_sugar&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl7,{        
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
              console.log('blood_sugar',output);
              //setdata(output.data)
              console.log('blood_sugar',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata7(outputarr.reverse());                     
            
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }
        
        async function fetchData8() { 
          
            let myurl8 ="/api/observations/graph/users/" + id + "?type=hba1c&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl8,{        
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
              //console.log('hba1c',output);
              //setdata(output.data)
              //console.log('hba1c',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata8(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }

        async function fetchData9() { 
          
            let myurl9 ="/api/observations/graph/users/" + id + "?type=cholesterol&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl9,{        
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
              //console.log('cholesterol',output);
              //setdata(output.data)
              //console.log('cholesterol',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata9(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }

        async function fetchData10() { 
          
            let myurl10 ="/api/observations/graph/users/" + id + "?type=egfr&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl10,{        
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
              //console.log('egfr',output);
              //setdata(output.data)
              //console.log('egfr',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata10(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }

        async function fetchData11() { 
          
            let myurl11 ="/api/observations/graph/users/" + id + "?type=creatinine&start_date=2022-08-01&end_date=2022-08-31&source=phr-input";                       
                                   
            await axios.get(myurl11,{        
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
              //console.log('creatinine',output);
              //setdata(output.data)
              //console.log('creatinine',output.data);
                         
            let outputarr = output.data.map( e => {  
                return {'date':e.dateTime,'value':e.value}                
            })            
            setoriginaldata11(outputarr.reverse());                     
                                 
            //setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }


        async function fetchData12() { 
                      
            let myurl12 ="/api/users/" + id 
                       
                                   
            await axios.get(myurl12,{        
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
                         
                let outputarr = {'firstname':output.first_name,'lastname':output.last_name,'gender':output.gender};                
                
                setoriginaldata12(outputarr);                     
                                    
                setisloading(true);
    
            }).catch(err => {
                  
              console.log(err.message);                                   
          }) 
        
        }

        fetchData();      
        fetchData2();      
        fetchData3();      
        fetchData4();      
        fetchData5();      
        fetchData6();      
        fetchData7();      
        fetchData8();      
        fetchData9();      
        fetchData10();      
        fetchData11();    
        fetchData12();  
    
    }, [token]); 

  

    if(isloading === false) {
        return "Please wait for Loading......";
    }
    else{
        return(
            <>
                <FrmMainGraphData 
                    originaldata={originaldata}                     
                    originaldata2={originaldata2}                    
                    originaldata3={originaldata3} 
                    originaldata4={originaldata4} 
                    originaldata5={originaldata5} 
                    originaldata6={originaldata6} 
                    originaldata7={originaldata7}                    
                    originaldata8={originaldata8} 
                    originaldata9={originaldata9} 
                    originaldata10={originaldata10} 
                    originaldata11={originaldata11} 
                    originaldata12={originaldata12} 
                    
                                                                
                />
            </>

        )

    }

}



const CustomizedDot = (props) => {
    const { cx, cy, value  } = props;    
    //value[30]   
    if (value === 27.04) {
      return (
        <svg
          x={cx - 10}
          y={cy - 10}
          // width and height for rect and emoji
          //width={20}  
          //height={15}
          width={200}
          height={200}
          fill="#8F00FF"

          viewBox="0 0 1024 1024"
        >     
        {/* <rect x="10" y="10" width="100%" height="100%" rx="100px" fill ="#8F00FF" /> */}
        
        <circle cx="50" cy="50" r="30" stroke="#000" stroke-width="2" fill="#8F00FF"/>

        {/* <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" /> */}
        </svg>
      );
    }
  
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        {/* <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" /> */}
      </svg>
    );
  };

const dateFormatter = date => {        
    let result = format(new Date(date), "dd MMM");
    let result2 = result.replace("Aug", "ส.ค."); 
    return result2;
    return format(new Date(date), "dd MMM");

};


const data4 = [
    {
      name: "1 มค.",
      // value1: 1,
      // value2: 2,
      // value3: 3,
      value4: 3,
      value5: 3,
      value6: 0,
      value7: 3,
      value8: 0,
      value9: 3,
          
  
    },
    {
      name: "2 มค.",
      value4: 3,
      value5: 5,
      value6: 0,
      value7: 2,
      value8: 0,
      value9: 3,
    },
    {
      name: "3 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2,
      value8: 0,
      value9: 3,
    },
    {
     name: "4 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2,
      value8: 0,
      value9: 3,
    },
    {
      name: "5 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2,
      value8: 0,
      value9: 3,
    },
    {
        name: "6 มค.",
        value4: 1,
        value5: 3,
        value6: 0,
        value7: 2,
        value8: 0,
        value9: 3,
      },
      {
       name: "7 มค.",
        value4: 1,
        value5: 3,
        value6: 0,
        value7: 2,
        value8: 0,
        value9: 3,
      },
      {
        name: "8 มค.",
        value4: 1,
        value5: 3,
        value6: 0,
        value7: 2,
        value8: 0,
        value9: 3,
      }

  ];
  


const data3 = [
    {
      name: "1 มค.",
      // value1: 1,
      // value2: 2,
      // value3: 3,
      value4: 3,
      value5: 3,
      value6: 0,
      value7: 3,
          
  
    },
    {
      name: "2 มค.",
      value4: 3,
      value5: 5,
      value6: 0,
      value7: 2
    },
    {
      name: "3 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2
    },
    {
     name: "4 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2
    },
    {
      name: "5 มค.",
      value4: 1,
      value5: 3,
      value6: 0,
      value7: 2
    }

  ];
  

const data2 = [
    {
        month: '2015.01',
        a: 4000,
        b: 2400,
        c: 2400,
    },
    {
        month: '2015.02',
        a: 3000,
        b: 1398,
        c: 2210,
    },
    {
        month: '2015.03',
        a: 2000,
        b: 9800,
        c: 2290,
    },
    {
        month: '2015.04',
        a: 2780,
        b: 3908,
        c: 2000,
    },
    {
        month: '2015.05',
        a: 1890,
        b: 4800,
        c: 2181,
    },
    {
        month: '2015.06',
        a: 2390,
        b: 3800,
        c: 2500,
    },
    {
        month: '2015.07',
        a: 3490,
        b: 4300,
        c: 2100,
    },
];

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {

    const ratio = total > 0 ? value / total : 0;
    return toPercent(ratio, 2);
};
const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);
    return (
        <div className="customized-tooltip-content">
            <p className="total">{`${label} (Total: ${total})`}</p>
            <ul className="list">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const data_old = [
    {
        name: '2022-08-31',
        value: 2400
    },

    {
        name: '2022-08-30',
        value: 2200
    },
    {
        name: '2022-08-29',
        value: 1400
    },

    {
        name: '2022-08-28',
        value: 2000
    },


];

const FrmMainGraphData = ({originaldata,originaldata2,originaldata3,originaldata4,originaldata5,originaldata6,originaldata7,originaldata8,originaldata9,originaldata10,originaldata11,originaldata12}) => {
    
    const fn_callbackme = (e) => {
        //alert("callbackeme");
    }
       
    function ModalDataAttributesExample({lcpara}) {        
        return(
        <div className="addEmployee">
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ดูรายละเอียด</button>
            <div className="modal fade" id="staticBackdrop" 
             data-bs-backdrop="static" 
             data-bs-keyboard="false" 
             tabIndex="-1" 
             aria-labelledby="staticBackdropLabel"
             aria-hidden="true">
             <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                  {/* <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Modal title </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div> */}
                  <div className="modal-body"> 
                   
                    <FrmGraph lcpara={lcpara} fn_callbackme ={fn_callbackme}/>               
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-primary" onClick={fn_callbackme}>Understood</button> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
        )
    }
    

    return (
        <div class="container-fluid my-2">

            <div class="row">
           

                <div class="col-sm-9">
                    <div class="row my-2">

                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">                                    
                                    {/* <h5 class="card-title">ภาพรวมคนไข้  <a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5> */}
                                    <h5 class="card-title">ภาพรวมคนไข้  
                                        <div class="card-text float-end">
                                            <div class="d-flex flex-row">
                                                <div class="text-sm">
                                                    ประเภทข้อมูลสุขภาพ &nbsp;
                                                </div>
                                                <div>
                                                    <select class="form-select-sm" aria-label="Default select example">                                                        
                                                        <optgroup label="จากชุดตรวจวัดส่วนตัว">     
                                                        <option value="phr-input" selected>- ที่บันทึกเอง</option>                                                        
                                                        <option value="wearable">- จากแอปและอุปกรณ์</option>
                                                        <option value="checkpoint-input">- จากแล็บและสถานพยาบาล</option>                                                        
                                                        </optgroup>
                                                                                                                                                                                 
                                                        <optgroup label="จากชุดตรวจวัด Kiosk">                                                       
                                                            <option value="Kiosk">- จากชุดตรวจวัด Kiosk</option>
                                                            <option value="carekit">- จากชุดตรวจวัด Carekit</option>                                                                                                                        
		                                                </optgroup>
                                                        
                                                        
                                                    </select>
                                                  
                                                </div>                                            
                                            </div>
                                        
                                       
                                       
                                        </div>
                                    </h5>

                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="card">
                                <div class="card-body">
                                    {/* <h5 class="card-title">ดัชนีมวลกาย น้ำหนัก , ส่วนสูง <a class="float-end" href="#">ดูรายละเอียด</a></h5> */}
                                    <h5 class="card-title">ดัชนีมวลกาย น้ำหนัก , ส่วนสูง <a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                                
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" dot={<CustomizedDot/>} />
                                                
                                                {/* <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" 
                                                dot={{ stroke: '#8F00FF', strokeWidth: 1, r: 0,strokeDasharray:''}} /> */}
                                                
                                               
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-6">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">จำนวนก้าว<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={originaldata2}>
                                        <CartesianGrid stroke="#f5f5f5" />
                                        
                                        <XAxis 
                                            dataKey="date" 
                                            tickFormatter={dateFormatter}                                                                                                        
                                            padding={{ left: 30, right: 30 }}
                                        
                                        />
                                                                                
                                        <YAxis />
                                        <Tooltip />
                                        {/* <Legend /> */}
                                        {/* <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="value2" stackId="a" fill="#222" />
                                        <Bar dataKey="value3" stackId="a" fill="goldenrod" /> */}
                                        
                                        <Bar dataKey="value" barSize={20} stackId="a" fill="#FFA500" radius={[45, 45, 0, 0]} />
                                        
                                    
                                        
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ปริมาณน้ำดื่ม<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={originaldata}>
                                        
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="date"  padding={{ left: 10, right: 10 }} tickFormatter={dateFormatter} />
                                        <YAxis />
                                        <Tooltip />
                                        
                                        {/* <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="value2" stackId="a" fill="#222" />
                                        <Bar dataKey="value3" stackId="a" fill="goldenrod" /> */}                                        
                                        <Bar dataKey="value" barSize={20} stackId="a" fill="#CCCCFF" radius={[45, 45, 0, 0]} />
                                                                                                                   
                                        </BarChart>
                                    </ResponsiveContainer>

                                    </div>

                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">การนอน<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={originaldata}>
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="date" padding={{ left: 10, right: 10 }} tickFormatter={dateFormatter}/>
                                        <YAxis />
                                        <Tooltip />                                                                               
                                        
                                        <Bar dataKey="value" barSize={20} stackId="a" fill="#00FF00" radius={[45, 45, 0, 0]} />
                                        
                                        
                                        
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ความดันโลหิตและชีพจร<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                            >
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis dataKey="date" padding={{ left: 30, right: 30 }} tickFormatter={dateFormatter} />
                                                <YAxis yAxisId="left" />
                                                <YAxis yAxisId="right" orientation="right" />
                                                <Tooltip />                                               

                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" dot={<CustomizedDot/>} />
                                               
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">(SPO2)อ็อกซิเจนในเลือด<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                            >
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis dataKey="date" padding={{ left: 30, right: 30 }}  tickFormatter={dateFormatter}/>
                                                <YAxis yAxisId="left" />
                                                <YAxis yAxisId="right" orientation="right" />
                                                <Tooltip />                                              

                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#CCCCFF" dot={<CustomizedDot/>} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>




                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">น้ำตาลในเลือด FBS<a class="float-end" href="#"><ModalDataAttributesExample lcpara=''/></a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata7}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                               
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#FF0000" dot={<CustomizedDot/>} />                                                
                                                                                                                                           
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">น้ำตาลสะสมในเลือด (HbAic)<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                               
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#FF0000" dot={<CustomizedDot/>} />                                                
                                                                                                                                           
                                            </LineChart>
                                        </ResponsiveContainer>
                                      
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">คลอเรสเตอรอล<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                                
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" dot={<CustomizedDot/>} />
                                                
                                                {/* <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" 
                                                dot={{ stroke: '#8F00FF', strokeWidth: 1, r: 0,strokeDasharray:''}} /> */}
                                                
                                               
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">eGFR<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                                
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" dot={<CustomizedDot/>} />
                                                
                                                {/* <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" 
                                                dot={{ stroke: '#8F00FF', strokeWidth: 1, r: 0,strokeDasharray:''}} /> */}
                                                
                                               
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Creatinine<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                            <LineChart
                                                width={500}
                                                height={300}
                                                data={originaldata}
                                                
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <CartesianGrid stroke="#f5f5f5" />
                                                <XAxis 
                                                    dataKey="date"                                                                                                      
                                                    tickFormatter={dateFormatter}                                                                                                        
                                                    padding={{ left: 30, right: 30 }}                                                                                                        
                                                    
                                                />
                                                <YAxis yAxisId="left" />
                                                <Tooltip />                                                                                               
                                                {/* <Legend /> */}
                                                
                                                <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" dot={<CustomizedDot/>} />
                                                
                                                {/* <Line  yAxisId="left" type="monotone"  strokeWidth={2} dataKey="value" stroke="#8F00FF" 
                                                dot={{ stroke: '#8F00FF', strokeWidth: 1, r: 0,strokeDasharray:''}} /> */}
                                                
                                               
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>

                <div class="col-sm-3 my-2">
                    <div class="row">

                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Profile</h5>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4 my-2">
                            <img src="https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body bg-primary text-white text-center">
                                <h5 class="card-title">นาย {originaldata12.firstname}&nbsp; {originaldata12.lastname}  </h5>
                                <p class="card-text">1-58XXXXX534-8</p>
                                <p class="card-text">ผู้มีสิทธิประกันสังคม</p>
                                <p class="card-text">รพ.เลิศสิน</p>
                            </div>
                        </div>

                        <div class="col-sm-12 my-2"> 
                            <div class="row justify-content-start">
                                <div class="col-sm-3 col-item my-1">
                                    <div class="card">
                                        <div class="card-body">      
                                            <div class="card-text text-center">เพศ</div>        
                                        </div>
                                        <div class="card-footer text-center">        
                                            {originaldata12.gender}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-item my-1">
                                    <div class="card">
                                        <div class="card-body">      
                                            <div class="card-text text-center">อายุ</div>        
                                        </div>
                                        <div class="card-footer text-center">        
                                            27 ปี
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-item my-1">
                                    <div class="card">
                                        <div class="card-body">      
                                            <div class="card-text text-center">น้ำหนัก</div>        
                                        </div>
                                        <div class="card-footer text-center">        
                                            75 กก.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-item my-1">
                                    <div class="card">
                                        <div class="card-body">      
                                            <div class="card-text text-center">สูง</div>        
                                        </div>
                                        <div class="card-footer text-center">        
                                            170 CM.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-item my-1">
                                    <div class="card">
                                        <div class="card-body">      
                                            <div class="card-text text-center">ฺBMI</div>        
                                        </div>
                                        <div class="card-footer text-center">        
                                            21.3 กก./u2
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                      


                        <div class="col-sm-12 my-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">โรคประจำตัว</h5>
                                    <p class="card-text">ไม่พบ</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-12 my-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ประวัติแพ้ยา</h5>
                                    <p class="card-text">ไม่มี</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-sm-12 my-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ยาที่ใช้อยู่</h5>
                                    <p class="card-text">ไม่เคยใช้</p>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </div>


    )
};

export default FrmMainGraph