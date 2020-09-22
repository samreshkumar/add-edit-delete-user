import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Home = () =>{

const [users, setusers] = useState([]);

useEffect(() => {
    loadData()
}, []);

const loadData = async() =>{
    const result = await axios.get("http://localhost:3003/users");
    setusers(result.data.reverse())
}

const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadData()
}



    return(
        <>
        <h1>Welcome to Home page</h1>
        <div className="minheight">
        <table className="table border shadow">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           {
               users.map((user, index)=>(
                   <tr>
                       <td>{index + 1}</td>
                       <td>{user.name}</td>
                       <td>{user.username}</td>
                       <td>{user.email}</td>
                       <td>
                           <Link className="btn btn-primary mr-2" to={`/user/view/${user.id}`}>view</Link>
                           <Link className="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`}>Edit</Link>
                           <Link className="btn btn-danger mr-2" onClick={()=> deleteUser(user.id)}>Delete</Link>
                       
                       </td>
                   </tr>
               ))
           }
        </tbody>
        </table>
        </div>
        </>
    );
}


export default Home;