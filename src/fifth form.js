import React,{useState} from "react";

function Form3(){
const [fullDetail,setDetail]=useState({
    fName:"",
    lName:"",
    eMail:""
})
function onWrite(event){
   const newValue=event.target.value
   const inputValue=event.target.name

   setDetail(prevValue=>({
            ...prevValue,
            [newValue]:inputValue}
   )
   );
}

return(
<div>
<h1>Hello {fullDetail.fName} {fullDetail.lName}</h1>
<p>{fullDetail.eMail}</p>
<input onChange={onWrite} name="fName" placeholder="First Name" type="text"/>
<input onChange={onWrite} name="lName" placeholder="First Name" type="text"/>
<input onChange={onWrite} name="eMail" placeholder="eMail" type="eMail"/>
</div>)

}
export default Form3;