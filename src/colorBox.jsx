import "./colorBox.css"
import { useState } from "react"

function tellColor(arr){
    let ind = Math.floor(Math.random()*arr.length)
     return arr[ind];
} 

export default function ColorBox(){
    
    const color = ["red","green","yellow","orange","blue","pink","black","white","magenta","cyan"]
   
    const [color1,setColor1] = useState(tellColor(color))
    const changeColor=()=>{
        //  setColor1("orange")

    const ranColor = tellColor(color);
        setColor1(ranColor);
}

return (
<div className="colorBox" style={{backgroundColor:color1}} 
onClick={changeColor}>

</div>);
}