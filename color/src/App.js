
import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

function App() {
   
  const [colorvalue, setcolorvalue] = useState('')
  
  return (
    <div>  
      <Square 
      colorvalue = {colorvalue}
     
      />
      <Input
       colorvalue = {colorvalue}
       setcolorvalue ={setcolorvalue}
       
      />
</div>
       
  );
}

export default App;
