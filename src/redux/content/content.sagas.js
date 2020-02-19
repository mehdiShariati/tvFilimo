import {takeLatest,put,select} from "redux-saga/effects";
import ContentTypes from "./content.types";
import axios from "axios";
import {startFetchingContentsSuccessFull,
    fetchingContentFail,
    fetchingSpecificMovieFaild,fetchingSpecificMovieRecomsSuccess,
    fetchingSpecificMovieSuccess} from "./content.actions";
    import {SelectuserProfile} from "../user/user.selector";
    

    const config={headers:{
        UserAgent:`{"an":"Filimo","os":"tv"}`,
       
    }}

export function* fetchContent(){
  
    try{
        
        const contents=yield axios.get("https://www.filimo.com/etc/api/list/listtype/home/listperpage/5/listcuroffset/0",config);
        yield put(startFetchingContentsSuccessFull(contents.data));


    }catch(error){
        yield put(fetchingContentFail(error.message));
    }
   
}



export function* getContentFromApi(){

    yield takeLatest(ContentTypes.FETCH_CONTENT_START,fetchContent);
}


export function* getMovieWithId({payload}){
    let data = yield select(SelectuserProfile);
    const dataConfig={headers:{
        UserAgent:`{"an":"Filimo","os":"tv"}`,
       luser:data.userName,
       ltoken:data.ltoken
    }}
 
    try {
 
        const MovieData=yield axios.get(`https://www.filimo.com/etc/api/groupCall/method1/movie%2Fuid%2F${payload}/method2/recom%2Fuid%2F${payload}%2Fperpage%2F20/method3/movieserialbyseason%2Fuid%2F${payload}/method4/profileaccount`,dataConfig);
        const movie=`movie/uid/${payload}`;
        yield console.log(MovieData.data);
       const Recom=`recom/uid/${payload}/perpage/20`;
       yield put(fetchingSpecificMovieRecomsSuccess(MovieData.data.groupcall[Recom].recom));
        yield put(fetchingSpecificMovieSuccess(MovieData.data.groupcall[movie]));
  
    
    } catch (error) {
        yield put(fetchingSpecificMovieFaild(error.message))
    }


}



export function* getMovieWithSpecificId(){

    yield takeLatest(ContentTypes.MOVIE_FETCHING_START,getMovieWithId)
}


export function* locationChange(){
    
    yield takeLatest(ContentTypes.LOCATION_CHANGE,getMovieWithId)
}