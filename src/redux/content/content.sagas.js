import {takeLatest,put} from "redux-saga/effects";
import ContentTypes from "./content.types";
import axios from "axios";
import {startFetchingContentsSuccessFull,
    fetchingContentFail,
    fetchingSpecificMovieFaild,
    fetchingSpecificMovieSuccess} from "./content.actions";

    const config={headers:{
        UserAgent:`{"an":"Filimo","os":"tv"}`
    }}

export function* fetchContent(){
  
    try{
        
        const contents=yield axios.get("https://cors-anywhere.herokuapp.com/https://www.filimo.com/etc/api/list/listtype/home/listperpage/5/listcuroffset/0",config);
        yield put(startFetchingContentsSuccessFull(contents.data));


    }catch(error){
        yield put(fetchingContentFail(error.message));
    }
   
}



export function* getContentFromApi(){

    yield takeLatest(ContentTypes.FETCH_CONTENT_START,fetchContent);
}


export function* getMovieWithId({payload}){
    try {
        const MovieData=yield axios.get(`https://cors-anywhere.herokuapp.com/https://www.filimo.com/etc/api/groupCall/method1/movie%2Fuid%2F${payload}/method2/recom%2Fuid%2F${payload}%2Fperpage%2F20/method3/movieserialbyseason%2Fuid%2F${payload}/method4/profileaccount`,config);
        const c=`movie/uid/${payload}`
        yield console.log("I am Here");
  
        yield put(fetchingSpecificMovieSuccess(MovieData.data.groupcall[c]));
    
    } catch (error) {
        yield put(fetchingSpecificMovieFaild(error.message))
    }


}



export function* getMovieWithSpecificId(){

    yield takeLatest(ContentTypes.MOVIE_FETCHING_START,getMovieWithId)
}