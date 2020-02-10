import React,{useEffect} from 'react';
import Header from "./components/header/header.component";
import './App.css';
import {Switch,Route} from "react-router-dom";
import SignIn from "./pages/sing-in/sign-in.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import {fetchLoginData} from "./redux/user/user.action";
import {connect} from "react-redux";

const SignInpageWithSpinner=WithSpinner(SignIn);
function App({startFetchingLoginData,Loading,LoginCred}) {

  useEffect(()=>{
    startFetchingLoginData();
  },[]);



  return (
   <div>
      <Header />

      <Switch>

      <Route exact path="/signin" render={props=><SignInpageWithSpinner isLoading={!Loading} {...props} data={LoginCred} />}  />


      </Switch>
      </div>
  );

}
const mapDispatchToprops=dispatch=>({

startFetchingLoginData:()=>dispatch(fetchLoginData())

});

const mapStateToProps=state=>({
  Loading:state.user.isLoginDataFetched,
  LoginCred:state.user.loginData 


})


export default connect(mapStateToProps,mapDispatchToprops)(App);
