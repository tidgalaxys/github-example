import React, {useState,useEffect} from 'react';
import DataTable,  { createTheme  } from 'react-data-table-component';
import {Redirect} from 'react-router-dom';
import {CSVLink} from "react-csv";



const data2 = [
    {
        id: 1,        
        title: 'tid',
        year: '1988',   
        PlayerImageURL: 'https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg',   
    },
    
    {
        id: 2,
        title: 'boy',
        year: '1984',
    },
    {
      id: 3,
      title: 'aum',
      year: '1983',
    },
    {
      id: 4,
      title: 'prae',
      year: '1982',
    },
    {
      id: 5,
      title: 'Cat',
      year: '1981',
    },
    {
      id: 6,
      title: 'cat',
      year: '1980',
    },
    {
      id: 7,
      title: 'ติ๊ด',
      year: '1984',
    },
    {
      id: 8,
      title: 'ทดสอบ',
      year: '1984',
    },
    {
      id: 9,
      title: 'แพร',
      year: '1985',
    },
    {
      id: 10,
      title: 'samsung',
      year: '1987',
    },
    {
      id: 11,
      title: 'haval',
      year: '1984',
    },
    {
      id: 12,
      title: 'MG',
      year: '1989',
    },
    {
      id: 13,
      title: 'Toyota',
      year: '1984',
    },
    {
      id: 14,
      title: 'Honda',
      year: '1983',
    },
    {
      id: 15,
      title: 'Mistu',
      year: '1981',
    },
    {
      id: 16,
      title: 'Porche',
      year: '1981',
    },
    {
      id: 17,
      title: 'Suzuki',
      year: '1982',
    },
    {
      id: 18,
      title: 'haval',
      year: '1986',
    },
    
]


const Dashboard = () => {

    const [q, setq] = useState("");
    const [data,setdata] = useState([]);
    const [searchcolumns,setsearchcolumns] = useState(["id","title","year"]);
  
     
    useEffect(() => {
       setdata(data2);
       
      },[]);


 
      const columns = [
        {
          name: 'id',
          selector: row => row.id,
          sortable: true,
          left: true,
          cell:(row)=><p>{row.id} &nbsp;<img src={row.PlayerImageURL} width={60} /></p>,        
          
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
          
        },
    
        {
          name: 'PlayerImageURL',
          accessor: 'PlayerImageURL',   
          cell:(row)=><img src={row.PlayerImageURL} width={60} />,         
    
      },
    
        {
          name: "Actions",            
          cell:(row)=><button onClick={clickHandler} id={row.id} title={row.title}>Action</button>,
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        }
    ];
      const customStyles = {
        headRow: {
          style: {
            border: 'none',
          },
        },
        headCells: {
          style: {
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',        
            color: '#202124',        
          },
        },
        rows: {
          highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
          },
        },
        pagination: {
          style: {
            border: 'none',
          },
        },
      };
    

    const clickHandler = (e) => {
    
        ////const fieldName = e.target.getAttribute('id');
        console.log(e.target.id);
        console.log(e.target.title);
        ////console.log(fieldName);
     
          
    };
    
      // การสอนใช้ selectableRows
      // https://react-data-table-component.netlify.app/?path=/docs/selectable-basic--basic
    const handleChange = ({ selectedRows }) => {    
        console.log('Selected Rows: ', selectedRows);
        selectedRows.map( (e) => {
            console.log(e.id + ":" + e.title + ":" + e.year);
    
        })
    };      

    function search(rows){
        const columns = rows[0] && Object.keys(rows[0]); // เอา ทุก columns
        
        return rows.filter( (row) =>         
          
          // ค้นหา แบบ ทุก columns
          //columns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)  
          
          // ค้นหา แบบ กำหนดว่าจะเอา Column ไหนบ้าง
          searchcolumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
          
          // ค้นหา แบบ Manual
          //row.title.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
          //row.year.toLowerCase().indexOf(q) > -1 
        
        );
    }
     
  

  return (
    <div class="container-fluid my-1"> 
        {/* <div class="mt-1">เมนูหลัก</div> */}

        <div class="row">  
            <div class="col-sm-12 my-2">
            <div class="float-start"><img src="https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"  width="50" height="100" class="img-fluid rounded-start" alt="..." /></div>
            <div class="float-start">      
                <div>&nbsp;&nbsp;<b>นพ. สมชาย สุขภาพดี </b></div>
                <div>&nbsp;&nbsp;แพทย์อายุรกรรม รพ.XXX</div>          
            </div>
            </div>
        </div>

        <div class="row">  
        <div class="col-sm-12 my-1"> 
            <div class="row justify-content-start">
                <div class="col-sm-3 col-item my-1">
                    <div class="card">
                        <div class="card-body">      
                            <div class="card-text text-start">คนไข้ทั้งหมด</div>        
                        </div>
                        <div class="card-footer text-end">        
                            120
                        </div>
                    </div>
                </div> 
                <div class="col-sm-3 col-item my-1">
                    <div class="card">
                        <div class="card-body">      
                            <div class="card-text text-start">คนไข้ที่มีความเสี่ยง</div>        
                        </div>
                        <div class="card-footer text-end">        
                            24
                        </div>
                    </div>
                </div> 
                <div class="col-sm-3 col-item my-1">
                    <div class="card">
                        <div class="card-body">      
                            <div class="card-text text-start">คนไข้ผู้หญิง</div>        
                        </div>
                        <div class="card-footer text-end">        
                          18  
                        </div>
                    </div>
                </div> 
                <div class="col-sm-3 col-item my-1">
                    <div class="card">
                        <div class="card-body">      
                            <div class="card-text text-start">คนไข้ผู้ชาย</div>        
                        </div>
                        <div class="card-footer text-end">        
                            6
                        </div>
                    </div>
                </div> 
            </div>
        </div>   
        </div>


        <div class="row">  
            <div class="col-sm-12 my-1">
                <div class="card">
                    <div class="card-body">  
                        <div className="row justify-content-around">
                            <div className="col-sm-10 col-item">   
                                <div class="card-text text-start">
                                คนไข้ของคุณ...                               
                                </div> 
                            </div>
                            <div className="col-sm-2 col-item">   
                                <div class="card-text text-end">
                                    <div class="d-flex flex-row">
                                        <div class="p-2">
                                            <input type="text" placeholder="ค้นหา" className="form-control" id='txt1' value={q} onChange={(e) => setq(e.target.value)}/>
                                        </div> 
                                                                               
                                        <div class="p-2">
                                            <CSVLink
                                                data= {search(data)}
                                                filename={"test.csv"}
                                                target="_blank">
                                                <i class="fa fa-file-excel-o fa-2x" aria-hidden="true"></i>
                                            </CSVLink>                                        
                                        </div>
                                    </div>

                                    

                                        
                                                    
                                      
                                    
                                </div>
                            
                            </div>
                        
                        </div>
                                             

                    <DataTable
                            // title="Patient Lists"
                            columns={columns}
                            //data={data}            
                            data={search(data)}
                            //defaultSortField="id"            
                            //defaultSortAsc={true}
                            onRowClicked={ (rowData) => {              
                            console.log(rowData.id);
                            }}   
                            // selectableRows 
                            onSelectedRowsChange={handleChange}          
                            pagination 
                            fixedHeader            
                            highlightOnHover
                            pointerOnHover            
                            striped
                            responsive                     
                            customStyles={customStyles}
                                                
                        />
                       
                       
                    </div>
                </div>
            </div>
        </div>       
  


  </div>

  )
}

export default Dashboard