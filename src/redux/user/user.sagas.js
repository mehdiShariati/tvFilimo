import {takeLatest,put,call} from "redux-saga/effects";
import userTypes from "./user.types";
import {loginDataReady,errorOnFetching,checkUserisLogInFailure,checkUserisLogInSuccess,addtoUserProfile} from "./user.action";
import axios from 'axios';


export function* startFetchingData(){
try{
    const loginData=yield axios.get('https://www.filimo.com/etc/api/verifycodeget/devicetype/tvweb');
    yield put(loginDataReady(loginData.data.verifycodeget));

}catch(error){
    yield put(errorOnFetching(error.message));
}




  

}
export function* fetchingLogindataas(){

    yield takeLatest(userTypes.FETCH_ACTIVE_CEREDENTIALS,startFetchingData);
}



export function* checkUserStatus({payload}){
if(!payload) return;
 try {

    const checkAuth=yield axios.get(`https://www.filimo.com/etc/api/verifycodecheck/ref_type/tv/code/${payload}/devicetype/tvweb`);
     
                console.log(checkAuth.data.verifycodecheck);

              
        if(!checkAuth.data.verifycodecheck.hasOwnProperty('type')){
           
            const userProfile=yield axios.get(`https://www.filimo.com/etc/api/profileaccount/luser/${checkAuth.data.verifycodecheck.username}/ltoken/${checkAuth.data.verifycodecheck.ltoken}/devicetype/tvweb`);

      
            if(!userProfile.data.profileaccount.hasOwnProperty('type')){
                yield put(addtoUserProfile(userProfile.data.profileaccount));
                yield put(checkUserisLogInSuccess(checkAuth.data.verifycodecheck));
            
            }
        }
    yield console.log('i am in saga');
   
} catch (error){

    yield put(checkUserisLogInFailure(error.message))
};


}

const IntervalChecker=(payload)=>{

    setTimeout(()=>{
        const checkAuth= axios.get(`https://www.filimo.com/etc/api/verifycodecheck/ref_type/tv/code/${payload}/devicetype/tvweb`);

        return checkAuth;
    },3000);

 


}



export function* checkUserIsLoginOrNot(){


    yield takeLatest(userTypes.CHECK_USER_ACTIVATE,checkUserStatus);
}






export default fetchingLogindataas;
