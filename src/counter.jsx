import { useState} from "react";
export default function Counter(){
   const[num,setNum]= useState(5);


    const poschangeNum = ()=>{
        setNum(num+1)
    }
    const negchangeNum = ()=>{
        if(num>0)
        setNum(num-1);
    }

    return (
        <div className="">
            <p>the count is :{num}</p>
            <button onClick={poschangeNum}> Increment</button>
            <button  onClick={negchangeNum}>Decrement</button>
        </div>
    );
}