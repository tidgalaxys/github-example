import React, { PureComponent } from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { ComposedChart, Bar,BarChart } from "recharts";
import FrmGraph from './FrmGraph';


// import './mycss.css'

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

const FrmMainGraph = () => {

    const fn_callbackme = (e) => {
        //alert("callbackeme");
    }

    function ModalDataAttributesExample({lcpara}) {        
        return(
        <div className="addEmployee">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">ดูรายละเอียด</button>
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
                                    <h5 class="card-title">ภาพรวมคนไข้ </h5>
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
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-6">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">จำนวนก้าว<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={data4}>
                                        <CartesianGrid />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {/* <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="value2" stackId="a" fill="#222" />
                                        <Bar dataKey="value3" stackId="a" fill="goldenrod" /> */}
                                        <Bar dataKey="value4" barSize={20}  stackId="a" fill="transparent" />
                                        <Bar dataKey="value5" barSize={20} stackId="a" fill="#DAF7A6" />
                                        <Bar dataKey="value6" barSize={20} stackId="a" fill="transparent" />
                                        <Bar dataKey="value7" barSize={20} stackId="a" fill="#DAF7A6" radius={[45, 45, 0, 0]} />
                                       
                                        
                                        
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ปริมาณน้ำดื่ม<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={data4}>
                                        <CartesianGrid />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {/* <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="value2" stackId="a" fill="#222" />
                                        <Bar dataKey="value3" stackId="a" fill="goldenrod" /> */}
                                        <Bar dataKey="value4" barSize={20} stackId="a" fill="transparent" />
                                        <Bar dataKey="value5" barSize={20} stackId="a" fill="#CCCCFF " />
                                        <Bar dataKey="value6" barSize={20} stackId="a" fill="transparent" />
                                        <Bar dataKey="value7" barSize={20} stackId="a" fill="#CCCCFF " radius={[45, 45, 0, 0]} />
                                        
                                       
                                        
                                       
                                        </BarChart>
                                    </ResponsiveContainer>

                                    </div>

                                </div>
                            </div>

                        </div>



                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">การนอน<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart width={500} height={300} data={data4}>
                                        <CartesianGrid />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {/* <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="value2" stackId="a" fill="#222" />
                                        <Bar dataKey="value3" stackId="a" fill="goldenrod" /> */}
                                        <Bar dataKey="value4" barSize={20} stackId="a" fill="transparent" />
                                        <Bar dataKey="value5" barSize={20} stackId="a" fill="#58a0df" />                                        
                                        <Bar dataKey="value6" barSize={20} stackId="a" fill="transparent" />
                                        <Bar dataKey="value7" barSize={20} stackId="a" fill="#FF5733"  />
                                        <Bar dataKey="value8" barSize={20} stackId="a" fill="#FF5733"  />
                                        <Bar dataKey="value9" barSize={20} stackId="a" fill="#FFAA33" radius={[45, 45, 0, 0]} />
                                        
                                        
                                        
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ความดันโลหิตและชีพจร<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
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
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">(SPO2)อ็อกซิเจนในเลือด<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
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
                                </div>
                            </div>

                        </div>




                        <div class="col-sm-6 my-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">น้ำตาลในเลือด FBS<a class="float-end" href="#">ดูรายละเอียด</a></h5>
                                    <div style={{ width: "100%", height: 300 }}>
                                        <ResponsiveContainer>
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
                                <h5 class="card-title">นาย สมชาย สุขภาพดี</h5>
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
                                            ชาย
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