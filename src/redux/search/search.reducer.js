import SearchTypes from "./search.types";

const INITIAL_STATE={
    isOnLoading:false,
    searchContent:null,
    error:null,
    searchField:""
};

 const SearchReducer=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case SearchTypes.FETCHING_SEARCH_DATA_START:
            return {
                ...state,
                isOnLoading: true,
                error: null
            };

        case SearchTypes.FETCHING_SEARCH_DATA_SUCCESS:
            return {
                ...state,
                isOnLoading:false,
                searchContent: action.payload
            };
        case SearchTypes.FETCHING_SEARCH_DATA_FAILURE:
            return {
                ...state,
                isOnLoading: false,
                error: action.payload
            };
        case SearchTypes.ADD_TO_SEARCH_FIELD:
            return {
                ...state,
                searchField:state.searchField+action.payload
            };
        case SearchTypes.REMOVE_FROM_SEARCH_FIELD:
            return {
                ...state,
                searchField:action.payload
            };

        default:
                return state;
    }




};
 export default SearchReducer;