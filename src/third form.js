import React,{useState} from "react";

function Form1(){
    const [fullName,setText]=useState(
        {
            fName:"",
            lName:""
        }
    )
    function onChange(event){
        const newValue =event.target.value
        const inputValue= event.target.name

        setText(prevValue=>{
            if(inputValue==="fName"){
                return{
                    fName:newValue,
                    lName:prevValue.lName
                }}

                else if(inputValue==="lName"){
                    return{
                        fName:prevValue.fName,
                        lName:newValue
                    }
                }
        })
    }
    
   

    return(
        <div>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
      <input name="fName" onChange={onChange} type="text" placeholder="first name" />
      <input name="lName" onChange={onChange} type="text" placeholder="last name"/>
      </form>
      </div>
    )
}
export default Form1;