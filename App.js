import { useState,useEffect } from "react";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    Axios("https://jsonplaceholder.typicode.com/comments").then((res)=>
    {console.log(res.data);
    setData(res.data); 
  });
  };
  const column=[{
    dataField:"email",
    text:"employee email",
    sort: true,
  },
  {
    dataField:"postId",
    text:"employee id",
    sort:true,
  },
  {
    dataField:"name",
    text:"employee name",
    sort:true,
    editable:false,
  },
  {
    dataField:"email",
    text:"dropdown",
    editor:{
      type:Type.SELECT,
      Option:[{
        value:"A",
        label:"A"
      },
      {
        value:"B",
        label:"B"
      }]
    }
  }
];
  return (
    <div className="App">
      <BootstrapTable
       keyfield="id" 
       data={data} 
       column={column} 
       striped 
       hover 
       condensed
       pagination={paginationFactory()}
       cellEdit={cellEditFactory({
        mode:"dbclick",
        nonEditableRows:()=>[1,2,3],
       })}/>
    </div>
  )
}

export default App;
