import { Component } from "react";
import { withRouter } from "react-router-dom";

class EditAccount extends Component {

state= {
 Newaccount: 
 {id:"", name:"", lastname:"", phone:"", email:""}}

componentDidMount(){
const accountForEdit = this.props.accounts.filter(acc=> acc.id == this.props.match.params.id)[0];
this.setState({Newaccount:accountForEdit})
}


changeAccount= (event)=>{
  const copyNewAccount = {...this.state.Newaccount};
  copyNewAccount[event.target.id] = event.target.value;
  this.setState({Newaccount:copyNewAccount})
}

editAccount = ()=>{
  this.props.editAccount (this.state.Newaccount);
  this.props.history.push("/");
}

 
 render(){
  return(

<div className="container">
 <div className="row">
  <div className="col-10 offset-1">
   <h2 className="display-4 m-4">Edit Account</h2>
   <div className="row">
    <div className="col-10 offset-1">

     <input onChange={this.changeAccount} type="text" className="form-control" id="name" value={this.state.Newaccount.name} 
      /> <br />
     
     <input onChange={this.changeAccount} type="text" className="form-control" id="lastname" value={this.state.Newaccount.lastname} /><br />
     
     <input onChange={this.changeAccount}  type="text" className="form-control" id="phone" value={this.state.Newaccount.phone} /> <br />
     
     <input onChange={this.changeAccount} type="text" className="form-control" id="email" value={this.state.Newaccount.email}  /> <br />
     
     <button onClick={this.editAccount} className="form-control btn btn-dark">Save</button>
    </div>
   </div>
  </div>
 </div>
</div>
  )
 }
}

export default withRouter (EditAccount);

