import React,{useState} from "react";

function Form(){
    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    function onChange(event){
        let fName=(event.target.value)
        setText(fName)
    }
    function onChanges(event){
        let lName=(event.target.value)
        setText2(lName)
    }

    return(
        <div>
      <h1>Hello {text+" "+text2}</h1>
      <form>
      <input onChange={onChange} type="text" placeholder="first name"/>
      <input onChange={onChanges} type="text" placeholder="last name"/>
      </form>
      </div>
    )
}
export default Form;