// import React from "react";
// import { Component } from "react";


// class AddAccount extends Component {

// state = {
//  newAccounts:
//   {id:"",name:"",lastname:"",phone:"",email:""}
 
// }

// changeHendler= (event)=>{
//  const id = event.target.id;
//  let newCopy = {...this.state.newAccounts};
//  newCopy[id] = event.target.value;
//  this.setState({newAccounts:newCopy})
// }

// addNewAccount = ()=>{
//   this.props.addNewAcc(this.state.newAccounts);

 
// }


//  render(){
//   return(
// <div className="contaier">
//  <div className="row">
//   <div className="col-10 offset-1">
//    <h3 className="display-4 m-4">Add Accounts</h3>
  
//    <input onChange={this.changeHendler} type="text" id="id" className="form-control" placeholder="id"/><div>Your ID</div> <br />
   
//    <input onChange={this.changeHendler} type="text" className="form-control" id="name" placeholder="name" /><div>Your name</div>
//    <br />
   
//    <input onChange={this.changeHendler} type="text" className="form-control" id="lastname" placeholder="lastname"/> <div>Your lastname</div> <br />
   
//    <input onChange={this.changeHendler} type="text" className="form-control" 
//    id="phone" placeholder="phone"/> <div>Your phone</div> <br />
   
//    <input onChange={this.changeHendler} type="text" className="form-control" id="email" placeholder="email" /> <div>Your email</div>
   
//    <button onClick={this.addNewAccount} className="btn btn-dark form-control">Save</button>
//   </div>
//  </div>
// </div>
//   )
//  }
// }

// export default AddAccount;

import React from "react";
import { Component } from "react";

class AddAccount extends Component{

state = {
 newAccounts:
  {id:"",name:"",lastname:"",phone:"",email:""}
  }

ChangeAcc = (event)=>{
  const id = event.target.id;
let copyAcc = {...this.state.newAccounts};
copyAcc[id] = event.target.value;
this.setState({newAccounts:copyAcc})
}

buttonSave = () =>{
  this.props.addSaveAcc(this.state.newAccounts);
}


  render(){
    return(
<div className="container">
  <div className="row">
    <div className="col-10 offset-1">
      <h3>Add Accounts</h3>


<input onChange={this.ChangeAcc} type="text" className="form-control" placeholder="id" id="id"/> <br />

<input onChange={this.ChangeAcc} type="text" className="form-control" placeholder="name" id="name"/> <br />

<input onChange={this.ChangeAcc} type="text"  className="form-control" placeholder="lastname" id="lastname" /><br />

<input onChange={this.ChangeAcc} type="text"  className="form-control" placeholder="phone" id="phone"/><br />

<input onChange={this.ChangeAcc} type="text"  className="form-control" placeholder="email" id="email" /> <br />
<br />
<button onClick={this.buttonSave} className="btn btn-danger form-control">Save</button>

    </div>
  </div> 
</div>
    )
  }
}

export default AddAccount;