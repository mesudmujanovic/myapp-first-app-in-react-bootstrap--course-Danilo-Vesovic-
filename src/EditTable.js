// import React from "react";
// import Accounts from "./Accounts";

// const EditTable = ({accounts,deleteAccount}) =>{
//  const allAccounts= accounts.map (account=>{
//   return(
//    <Accounts account={account} edit={true} deleteAccount={deleteAccount} key={account.id}/>
//   )
//  })
//  return(
//   <div className="container">
//     <div className="row">
//       <div className="col-10 offset-1">
//         <h3 className="diaplay-4 m-4">Edit/Delete</h3>
//         <div className="row">
//           <div className="col-10 offset-1">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Id</th>
//                   <th>Namw</th>
//                   <th>LastName</th>
//                   <th>Phone</th>
//                   <th>Email</th>
//                   <th>Action</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allAccounts}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//  )
// }

// export default EditTable;

import React from "react";
import Accounts from "./Accounts";

const EditTable = ({accounts,deleteAccount}) =>{
 const allAccounts= accounts.map (account =>{
  return(
   <Accounts account={account} edit={true} deleteAccount={deleteAccount}/>
  )
 })
 return(
  <div className="container">
   <div className="row">
    <div className="col-10 offset-1">
     <h3>Edit/Delete</h3>
     <div className="row">
      <div className="col-10 offset-1">
       <table className="table">
        <thead>
         <tr>
          <td>Id</td>
           <td>Name</td>
            <td>LastName</td>
             <td>Phone</td>
              <td>Email</td>
              <td>Action</td>
              <td>Action</td>
         </tr>
        </thead>
        <tbody>
     {allAccounts}
        </tbody>
       </table>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
export default EditTable;