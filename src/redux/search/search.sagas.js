import {takeLatest,put} from "redux-saga/effects";
import SearchTypes from "./search.types";
import axios from "axios";
import {fetchSearchSuccess,
fetchSearchFailed } from "./search.actions";


export function* startFetchFromFilimo({payload}) {

    const config={headers:{
            UserAgent:`{"an":"Filimo","os":"tv"}`,

        }}
    try {
        const SearchData=yield axios.get(`https://www.filimo.com/etc/api/search/text/${payload}/perpage/20`,config);
        yield put(fetchSearchSuccess(SearchData.data.search));
    }catch (error) {
        yield  put(fetchSearchFailed(error.message))
    }



}


export function* startFetch() {
yield  takeLatest(SearchTypes.FETCHING_SEARCH_DATA_START,startFetchFromFilimo);
}