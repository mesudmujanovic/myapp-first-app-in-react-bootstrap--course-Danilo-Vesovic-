



import React from "react";
import { Link } from "react-router-dom";

const Accounts = ({account,edit,deleteAccount})=>{

const actionButons = edit ? ( 
  <>
  <td>
    <button onClick={()=>{deleteAccount(account.id)}} className="btn btn-dark">Delete</button>
  </td>

   <td>
    <Link to={"/edit/" + account.id} className="btn btn-dark">Edit</Link>
  </td>
  </>
 ):null; 


 return(

<tr>
        <td>{account.id}</td>
        <td>{account.name}</td>
        <td>{account.lastname}</td>
        <td>{account.phone}</td>
        <td>{account.email}</td>
        {actionButons}
      </tr>
 )
}


export default Accounts;
