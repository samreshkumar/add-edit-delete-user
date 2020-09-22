import Axios from "axios";
import React, {useState, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';



const Edituser = () => {
let history = useHistory();
const {id} = useParams();
const [user , setuser] = useState({

    name : "",
    username :"",
    email :"",
    phone :""
});


const {name, username, email, phone} = user ;

const onInputChange = (event) =>{
    setuser({...user,[event.target.name]: event.target.value})
}

useEffect(() => {
    loadUser();
},[]);
const formSubmit = async (event) =>{
    event.preventDefault();
    await Axios.put(`http://localhost:3003/users/${id}`, user)
    history.push("/")
}



const loadUser = async() =>{
    const result =  await Axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setuser(result.data)
}



    return(
        <>
        <h1>Edituser</h1>
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

       
        <button type="submit" className="btn btn-primary">Update User</button>
        </form>
        </>
    );
}

export default Edituser;