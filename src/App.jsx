/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

function App() {
  
  let [buttonvalue, setButtonValue] = useState("");

  const getValue = (item)=> {
    if(item ==='C')
    {
      setButtonValue("");
    }
    else if(item === '=')
    {
        const result = eval(buttonvalue);
        console.log(result);
        setButtonValue(result);
        
    }
    else {
      const newitem = buttonvalue + item;
       setButtonValue(newitem);
    }

  }

  return (
    <div className={styles.calculator}>
   <Display getvalue = {buttonvalue}></Display>
    <Button passValue = {getValue}></Button>
    </div>
  );
}

export default App;
