import { useState } from "react";

const AddUserForm=(props)=>{

const initialFormState={id:null,name:"",username:""}
const [user,setUser]=useState(initialFormState);

const handleInputChange=(event)=>{
  const {name,value} = event.target

  setUser({...user,[name]:value})
}

   return(
    <form onSubmit={
        event=>{
            event.preventDefault();
            if(!user.name||!user.username) return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleInputChange} value={user.name}/>
        <label htmlFor="">UserName</label>
        <input type="text" name="username" onChange={handleInputChange} value={user.username} />
        <button>Add new user</button>
    </form>
   )
}
export default AddUserForm;