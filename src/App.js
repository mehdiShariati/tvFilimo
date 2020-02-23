import React,{useEffect} from 'react';
import Header from "./components/header/header.component";
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom";
import SignIn from "./pages/sing-in/sign-in.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import {fetchLoginData} from "./redux/user/user.action";
import {connect} from "react-redux";
import Profile from "./components/profile/profile.component";
import HomePage from "./pages/home/homePage.component";
import VideoDetail from "./pages/video-details/video-detail.component";
import {startFetchingContents} from "./redux/content/content.actions";
import VideoPlayerWrapper from "./components/video-player-wrapper/video-player-wrapper.component";
import { withNavigation } from 'react-tv-navigation';
import SearchPage from "./pages/search/searchPage.components";

const SignInpageWithSpinner=WithSpinner(SignIn);

const HomePageWithSpinner=WithSpinner(HomePage);


function App({focused, stealFocus,isContentLoaded,startgettingData,startFetchingLoginData,Loading,LoginCred,currentUSer,profile}) {

  useEffect(()=>{
    if(!Loading){
      startFetchingLoginData();
     
    }
    startgettingData();
    
  },[]);



  return (
   <div>
    

      <Header focusPath={"headerItem"} user={currentUSer} profiles={profile}/>

      <Switch>
       <Route exact path="/search" component={SearchPage} />
      <Route exact path="/w/:movieId" component={VideoPlayerWrapper} />
      <Route exact path="/" render={props=><HomePageWithSpinner isLoading={!isContentLoaded} {...props} />} />
      <Route exact path="/signin" render={props=>currentUSer ? (<Redirect to="/" />) : (<SignInpageWithSpinner isLoading={!Loading} {...props} data={LoginCred} />)}  />
      {currentUSer ? (<Route exact path="/profile" component={Profile} />) : '' }
      <Route exact path="/m/:movieId" component={VideoDetail } />

      
      

      </Switch>
      </div>
  );

}
const mapDispatchToprops=dispatch=>({

startFetchingLoginData:()=>dispatch(fetchLoginData()),
startgettingData:()=>dispatch(startFetchingContents())
});

const mapStateToProps=state=>({
  Loading:state.user.isLoginDataFetched,
  LoginCred:state.user.loginData ,
  currentUSer:state.user.currentUser,
  profile:state.user.userProfile,
  contents:state.contents.content,
  isContentLoaded:state.contents.isDataFetching


});

const withNav=withNavigation(App);
export default connect(mapStateToProps,mapDispatchToprops)(withNav);
