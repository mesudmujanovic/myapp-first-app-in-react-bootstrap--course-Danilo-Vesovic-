import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import AccountsTable from "./AccountsTable";
import AddAccount from "./AddAccount";
import EditTable from "./EditTable";
import EditAccount from "./EditAccount";
import { render } from "react-dom";
import "./style.css"

class App extends Component {
  state={
accounts:[
   {id:1,name:"Mesud",lastname:"Mujanovic",phone:"11-11-11",email:"mujanovic@gmail.com"},

    {id:2,name:"Danilo",lastname:"Vesovic",phone:"33-22-22",email:"vesovic@gmail.com"}
]}
  

addSaveAcc= (acc)=>{
  this.setState({accounts:[...this.state.accounts,acc]})
}

deleteAccount = (id) =>{
const copyDelete = [...this.state.accounts];
const NewcopyDelete = copyDelete.filter (account => {return(account.id !== id)})
this.setState({accounts:NewcopyDelete})
}

editAccount= (acc)=>{
const copyEdit = [...this.state.accounts];
let accountPoistion = copyEdit.map(account => account.id).indexOf(acc.id)
copyEdit[accountPoistion] = acc;
this.setState({accounts:copyEdit})
}



 render(){
  return(

<BrowserRouter>
  <Header/>

  <Route path={"/"} exact>
<AccountsTable accounts={this.state.accounts}/>
  </Route>

  <Route path={"/add"}>
    <AddAccount addSaveAcc={this.addSaveAcc} accounts={this.state.accounts}/>
  </Route>


 <Switch>

 <Route path={"/edit/:id"}>
  <EditAccount editAccount={this.editAccount} accounts={this.state.accounts}/>
  </Route>

<Route path={"/edit"}>
    <EditTable deleteAccount={this.deleteAccount} accounts={this.state.accounts}/>
  </Route>

 </Switch>


</BrowserRouter>

  )
 }
}





export default App;
