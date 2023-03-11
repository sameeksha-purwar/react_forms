import React,{useState} from "react";
function App() {
   const [change,setChange]=useState("")
   const [headingText,setHeading]=useState("")
   function handleChange(event){
    setChange(event.target.value)
   }
   function handleClick(){
    setHeading(change)
   }
  return (
    <div>
      <h1>Hello{headingText}</h1>
      <input
      onChange={handleChange}
      type="text"
      placeholder="what is your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
