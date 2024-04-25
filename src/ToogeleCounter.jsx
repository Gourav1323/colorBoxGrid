import { useState} from "react";
export default function TooglerCounter(){
    const[isHappy,setIsHappy] = useState(true)
    const[cnt,setCnt] = useState(0)
    const toggle = ()=>{setIsHappy(!isHappy);
    setCnt(cnt+1)
}
  
    return (
    <>
    <h1 className="Toggler"  onClick={toggle} style={{cursor:"pointer"}}> 
    {isHappy?"😊":"😞"} 
        {/* 😊😞 */}
    </h1>
    <h1>num of times state changed : {cnt}</h1>
    
    </>
    );
}