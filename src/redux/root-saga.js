import {all,call} from "redux-saga/effects";
import {fetchingLogindataas,checkUserIsLoginOrNot} from "./user/user.sagas";
import {getContentFromApi,getMovieWithSpecificId,locationChange} from "./content/content.sagas"
import {startFetch} from "./search/search.sagas";
export default function* rootSaga(){


    yield all([call(fetchingLogindataas),
        call(checkUserIsLoginOrNot),
        call(getContentFromApi),
        call(getMovieWithSpecificId),
        call(locationChange),
        call(startFetch)
    
    ]);
} 




