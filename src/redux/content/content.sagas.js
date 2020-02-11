import {takeLatest,put} from "redux-saga/effects";
import ContentTypes from "./content.types";
import axios from "axios";
import {startFetchingContentsSuccessFull,
    fetchingContentFail} from "./content.actions";



export function* fetchContent(){

    try{
        

        const contents=yield axios.get("https://cors-anywhere.herokuapp.com/https://www.filimo.com/etc/api/list/listtype/home/listperpage/5/listcuroffset/0");
        yield put(startFetchingContentsSuccessFull(contents.data));


    }catch(error){
        yield put(fetchingContentFail(error.message));
    }
   
}



export function* getContentFromApi(){

    yield takeLatest(ContentTypes.FETCH_CONTENT_START,fetchContent);
}