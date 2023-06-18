import { useEffect, useState } from "react"

const EditUserForm=(props)=>{
    const[user,setUser]=useState(props.currentUser)


    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    const handleInputChange=(event)=>{
        const {name,value} = event.target
      
        setUser({...user,[name]:value})
      }

      return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handleInputChange} value={user.name}/>
            <label htmlFor="">UserName</label>
            <input type="text" name="username" onChange={handleInputChange} value={user.username} />
            <button>update user</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancle</button>
        </form>
      )

}

export default EditUserForm;