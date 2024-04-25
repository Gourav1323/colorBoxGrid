import { useState} from "react";
export default function Toogler(){
    const[isHappy,setIsHappy] = useState(true)
    const toggle = ()=>{setIsHappy(!isHappy)}
    return <h1 className="Toggler"  onClick={toggle} style={{cursor:"pointer"}}> 
    {isHappy?"😊":"😞"} 
        {/* 😊😞 */}
    </h1>;
}