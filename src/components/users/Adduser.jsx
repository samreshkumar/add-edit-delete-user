import Axios from "axios";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';



const Adduser = () => {
let history = useHistory();
const [user , setuser] = useState({

    name : "",
    username :"",
    email :"",
    phone :""
});


const {name, username, email, phone} = user ;

const onInputChange = (event) =>{
    const {name, value} = event.target;
    
    setuser((Prvalue)=>{
        return{
            ...Prvalue,
            [name]: value,
        }
    })
}


const formSubmit = async (event) =>{
    event.preventDefault();
    await Axios.post("http://localhost:3003/users/", user)
    history.push("/")
}



    return(
        <>
        <h1>AddUser</h1>
        <form style={{padding:"100px 30px"}} onSubmit={formSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Name" name="name"  onChange={onInputChange} value={name}/>

        </div>
        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" name="username"  onChange={onInputChange} value={username}/>

        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter email id" name="email"  onChange={onInputChange} value={email}/>
        </div>
        <div className="form-group">
            <label>Phone no</label>
            <input type="tel" className="form-control" id="exampleInputPassword1" placeholder="Enter phone No" name="phone"  onChange={onInputChange} value={phone}  />
        </div>

       
        <button type="submit" className="btn btn-primary">AddUser</button>
        </form>
        </>
    );
}

export default Adduser;