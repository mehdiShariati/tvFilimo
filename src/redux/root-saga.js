import {all,call} from "redux-saga/effects";
import {fetchingLogindataas,checkUserIsLoginOrNot} from "./user/user.sagas";
import {getContentFromApi} from "./content/content.sagas"

export default function* rootSaga(){


    yield all([call(fetchingLogindataas),
        call(checkUserIsLoginOrNot),
        call(getContentFromApi)
    
    ]);
} 




