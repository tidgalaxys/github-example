import React, {useState,useEffect} from 'react';

import DataTable,  { createTheme  } from 'react-data-table-component';

import {Redirect} from 'react-router-dom';

import {CSVLink} from "react-csv";


// react slider ใช้ สำหรับเลือกช่วงอายุ min and max
// https://zillow.github.io/react-slider/
//https://www.npmjs.com/package/react-slider


//npm install react-data-table-component styled-components
//"react-data-table-component": "^6.11.7  version นี้้ striped จะมีสีขาวข่ึ้นมาก่อน : 7.5.2",
// https://react-data-table-component.netlify.app/?path=/docs/getting-started-installation--page
// https://www.youtube.com/watch?v=d1r0aK5awWk&ab_channel=devmentorlive



const Patientlists = () => {

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
 
  /*
  // การใช้ Redirect ตัวอย่าง
  // https://stackoverflow.com/questions/59712916/navigating-to-a-new-page-onclick-of-the-item-in-react-data-table-component 
  const [redirState, setState] = useState(false);
  const [shortName, setData] = useState('');
  let redirecting = redirState ? (<Redirect push to={`/admin/productspage/${shortName}`}/>) : '';
  */
/*
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    button: {
      default: '#2aa198',
      hover: 'rgba(0,0,0,.08)',      
      focus: 'rgba(255,255,255,.12)',
      disabled: 'rgba(255, 255, 255, .34)',
    },
    sortFocus: {
      default: '#2aa198',
    },
  });
*/

  createTheme('solarized', {
    text: {
      primary: 'black',
         
    },
    background: {
      default: 'white',
    },   
    striped: {      
      default:  '#F9F9F9',
    },   
    divider: {
      default:  '#c7e2f5',
    },

  });


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

/*
  const customStyles4 = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  */
  const customStyles3 = {    
    
    headCells: {
      style: {
        fontSize: '20px',
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingLeft: '0 8px'
      },
    },
    cells: {
      style: {
        fontSize: '15px',
        paddingLeft: '0 8px',
      },
    },
  };


  const customStyles2 = {
    title: {
      style: {
        fontColor: 'red',
        fontWeight: '900',
      }
    },
    rows: {
      style: {
        minHeight: '50px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize: '20px',
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingLeft: '0 8px'
      },
    },
    cells: {
      style: {
        fontSize: '17px',
        paddingLeft: '0 8px',
      },
    },
  };

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

// const data2 = [
//   {
//       id: 1,        
//       title: 'tid',
//       PlayerImageURL: 'https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg',   
//       year: '1988',   
      
//   }
// ]
  

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
      title: 'man',
      year: '1983',
    },
    {
      id: 4,
      title: 'girl',
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
      title: 'xyz',
      year: '1984',
    },
    {
      id: 8,
      title: 'ทดสอบ',
      year: '1984',
    },
    {
      id: 9,
      title: 'baby',
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

  const [q, setq] = useState("");
  const [data,setdata] = useState([]);
  const [searchcolumns,setsearchcolumns] = useState(["id","title","year"]);

 

  useEffect(() => {
     setdata(data2);
     
    },[]);


    //const x = [1,2,3];
    //x.some( (e) => console.log(e));


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
   
   

          
    const conditionalRowStyles = [
      {
        when: row => row.id === 1,
        style: {
          backgroundColor: 'white',
          color: 'black',
          cursor: 'pointer',                                     
        },
      }    
   
    ];

       
    function handleclicktest(e,mystr)  {
      e.preventDefault();

      console.log(mystr);
      alert(mystr);

  }

  /*
  const handleclicktest = (e,mystr) =>  {
    e.preventDefault();

    console.log(mystr);
    

}

*/


  return (
    <div>
      <br></br>
      <input type="text" id='txt1' value={q} onChange={(e) => setq(e.target.value)}/>
        <button onClick={(e) => handleclicktest(e,'tid')}>Search</button>       
     
        <CSVLink
            data= {search(data)}
            filename={"test.csv"}
            target="_blank">
            <i class="fa fa-file-excel-o fa-2x" aria-hidden="true"></i></CSVLink>

       <DataTable
            title="Patient Lists"
            columns={columns}
            //data={data}            
            data={search(data)}
            defaultSortField="id"            
            defaultSortAsc={true}
            onRowClicked={ (rowData) => {              
              console.log(rowData.id);
              }}   
            selectableRows 
            onSelectedRowsChange={handleChange}          
            pagination 
            fixedHeader            
            highlightOnHover
		        pointerOnHover            
            striped
            responsive           
            //theme="solarized"           
            //conditionalRowStyles={conditionalRowStyles}
            customStyles={customStyles}
            //dense
            //noHeader
                     
              
        />


        

           {/* <Datatables data={search(data)} /> */}
    </div>
  
  )
}


export default Patientlists