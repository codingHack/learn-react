import React,{useState,useEffect} from 'react';

const Counter = () =>{
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log('렌더링 완료');
    });
    //마운트 될때만 하고싶을떄에는 두번째 인자로 빈 배열을 보내주면된다.
    //특정값이 업데이트 될 때만 하고싶을 때에는 두번쨰 인자로 전달해주면된다.
    return(
        <div>
        값은 {value} 입니다.
        <button onClick={()=>setValue(value+1)}>증가</button>
        <button onClick={()=>setValue(value -1)}>감소</button>
        </div>
    );
};

export default Counter;