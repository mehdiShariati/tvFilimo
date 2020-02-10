import {all,call} from "redux-saga/effects";
import {fetchingLogindataas} from "./user/user.sagas";


export default function* rootSaga(){


    yield all([call(fetchingLogindataas)]);
} 




