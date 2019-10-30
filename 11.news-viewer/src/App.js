import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

const App = ()=>{
  const [data,setData]=useState(null);
  const onClick=async()=>{
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=0ad42cab14ca4aaea560f173ee4a139d');
      setData(response);
    } catch (e) {
      console.log(e);
    }
    //axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
    //  setData(response.data);
    //});
  };
  return(
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data&&<textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  );
};

export default App;
