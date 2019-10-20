import React,{useState} from 'react';
import './App.css';
import { setState } from 'expect/build/jestMatchersObject';

function App() {

  const [mount,setMount]=useState([
    {id:1,text:'constructor'},
    { id: 2, text: 'getDrivedStateFromProps' },
    { id: 3, text: 'render' },
    { id: 4, text: 'componentDidMount' }
  ]);

  const [update,setUpdate]=useState([
    {id:1, text:'getDrivedStateFromProps'},
    { id: 2, text: 'shouldComponentUpdate' },
    { id: 3, text: 'render' },
    { id: 4, text: 'getSnapShotBeforeUpdate' },
    { id: 5, text: 'componentDidUpdate' }
  ]);

  const [unmount,setUnmount]=useState([
    {id:1,text:'componentWillUnmount'}
  ]);

  const mountList=mount.map(m=><li key={m.id}>{m.text}</li>);
  const updateList=update.map(m=><li key={m.id}>{m.text}</li>);
  const unmountList=unmount.map(m=><li key={m.id}>{m.text}</li>)


  return (
    <div>
      <ul>
      MOUNT
        {mountList}
      </ul>
      <ul>
        UPDATE
        {updateList}
      </ul>
      <ul>
        UNMOUNT
        {unmountList}
      </ul>
    </div>
  );
}

export default App;
