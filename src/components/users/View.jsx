import Axios from "axios";
import React, {useState, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';



const View = () => {
let history = useHistory();
const {id} = useParams();
const [user , setuser] = useState({

    name : "",
    username :"",
    email :"",
    phone :""
});


const {name, username, email, phone} = user ;



useEffect(() => {
    loadUser();
},[]);



const loadUser = async() =>{
    const result =  await Axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setuser(result.data)
}



    return(
        <>
        <h1>View user id {id}</h1>
        <ul>
            <li>Name :- {user.name}</li>
            <li>Name :- {user.username}</li>
            <li>Name :- {user.email}</li>
            <li>Name :- {user.phone}</li>
        </ul>

        </>
    );
}

export default View;