import ColorBox from "./colorBox";
import "./colorBoxGrid.css"
export default function ColorBoxGrid(){
    const boxex = [];
    for(let i=0;i<25;i++){
        boxex[i] = <ColorBox/>
    }
   return <div className="ColorBoxGrid"> 
    {boxex}
    
</div>
       
}