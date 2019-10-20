import React,{useState} from 'react';
import './App.css';

function App() {
  //컴포넌트 map 사용
  //var numbers=[1,2,3,4,5];
  //var processed = numbers.map((num,index) => <li key={index}>{num*num}</li>);
  //return (
    //<ul>{processed}</ul>
  //);
  const [names,setNames]=useState([
    {id:1, text:'눈'},
    { id: 2, text: '코' },
    { id: 3, text: '입' },
    { id: 4, text: '귀' }
  ]);

  const [inputText,setInputText]=useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = (e)=>setInputText(e.target.value);

  const onRemove =id=>{
    const nextNames=names.filter(name=>name.id!==id);
    setNames(nextNames);
  };

  const nameList=names.map(name=><li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>)

  const onClick=()=>{
    const nextNames=names.concat({
      id:nextId,
      text:inputText
    });
    setNextId(nextId+1);
    setNames(nextNames);
    setInputText("");
  };
  return(
    <div>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
      </ul>
    </div>
  );
}

export default App;
