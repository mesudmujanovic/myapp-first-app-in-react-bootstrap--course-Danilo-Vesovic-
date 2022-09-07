import React from "react";
import Accounts from "./Accounts";


const AccountsTable = ({accounts})=>{
  const allAccounts = accounts.map(account=>{
    return(
      <Accounts account={account}/>
    )
  })
return(
  <div className="container">
    <div className="row">
      <div className="col-10 offset-1">
        <h3 className="diaplay-4 m-4">acounts</h3>
        <div className="row">
          <div className="col-10 offset-1">
            <table className="table table-striped-columns">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Namw</th>
                  <th>LastName</th>
                  <th>Phone</th>
                  <th>Email</th>
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
export default AccountsTable;