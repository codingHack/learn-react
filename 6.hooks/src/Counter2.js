import React,{useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'INC':
            return {value:state.value+1};
        case 'DEC':
            return {value:state.value-1};
        default:
            return state;
    }
}

const Counter2=()=>{
    const [state,dispatch] = useReducer(reducer,{value:0});

    return(
        <div>
            카운터 값{state.value}입니다.
            <button onClick={()=>dispatch({type:'INC'})}>증가</button>
            <button onClick={()=>dispatch({type:'DEC'})}>감소</button>
        </div>
    );
};

export default Counter2;