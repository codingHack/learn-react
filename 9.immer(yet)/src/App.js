import React,{useRef,useState} from 'react';
import './App.css';

const App=()=> {
  const nextId=useRef(1);
  const [form,setForm]=useState({name:'',username:''});
  const [data,setData]=useState({
    array:[],
    uselessValue:null
  });

  const onChange=useCallback(
    e=>{
      const{name,value}=e.target;
      setForm({
        ...form,
        [name]:[value]
      });
    },
    [form]
  );

  return (
    <div>
      
    </div>
  );
}

export default App;
