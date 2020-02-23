import SearchTypes from "./search.types";


export const fetchSearchStart=(text)=>({

    type:SearchTypes.FETCHING_SEARCH_DATA_START,
    payload:text
});

export const fetchSearchSuccess=(data)=>({
    type:SearchTypes.FETCHING_SEARCH_DATA_SUCCESS,
    payload:data
});
export const fetchSearchFailed=(error)=>({
    type:SearchTypes.FETCHING_SEARCH_DATA_FAILURE,
    payload:error
});

export const addToSearchField=(text)=>({
    type:SearchTypes.ADD_TO_SEARCH_FIELD,
    payload:text
});
