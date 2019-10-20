import React,{useState} from 'react';

const InputHandler = () =>{
    const [username,setUsername]=useState('윤성재');
    const onChangeUserName=e=>setUsername(e.target.value);
    return(
        <div>
            <input 
            type="text" 
            name="username" 
            placeholder="사용자명"
            value={username}
            onChange={onChangeUserName}
        />
        <div>{username}</div>      
        </div>
    );
};

export default InputHandler;