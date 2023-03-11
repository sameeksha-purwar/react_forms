import React,{useState} from "react";

function Form2(){
const [fullDetail,setDetail]=useState({
    fName:"",
    lName:"",
    eMail:""
})
function onWrite(event){
   const newValue=event.target.value
   const inputValue=event.target.name

   setDetail(prevValue=>{
    if(inputValue==="fName"){
        return{
        fName:newValue,
        lName:prevValue.lName,
        eMail:prevValue.eMail
        }
    }
    if (inputValue==="lName") {
        return {
            fName:prevValue.fName,
            lName:newValue,
            eMail:prevValue.eMail
        }
    }
    if(inputValue==="eMail"){
        return{
        fName:prevValue.fName,
        lName:prevValue.lName,
        eMail:newValue
        }
    }
   })
}

return(
<div>
<h1>Hello {fullDetail.fName} {fullDetail.lName}</h1>
<p>{fullDetail.eMail}</p>
<input onChange={onWrite} name="fName" placeholder="First Name" type="text" value={fullDetail.fName}/>
<input onChange={onWrite} name="lName" placeholder="First Name" type="text"/>
<input onChange={onWrite} name="eMail" placeholder="eMail" type="eMail"/>
</div>)

}
export default Form2;