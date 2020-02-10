import {takeLatest,put} from "redux-saga/effects";
import userTypes from "./user.types";
import {loginDataReady,errorOnFetching} from "./user.action";
import axios from 'axios';


export function* startFetchingData(){
try{
    const loginData=yield axios.get('https://cors-anywhere.herokuapp.com/https://www.filimo.com/etc/api/verifycodeget/devicetype/tvweb');
    yield put(loginDataReady(loginData.data.verifycodeget));

}catch(error){
    yield put(errorOnFetching(error.message));
}




  

}
export function* fetchingLogindataas(){

    yield takeLatest(userTypes.FETCH_ACTIVE_CEREDENTIALS,startFetchingData);
}

export default fetchingLogindataas;
