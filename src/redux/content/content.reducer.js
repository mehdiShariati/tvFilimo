import ContentTypes from "./content.types";
const INITIAL_STATE={
    content:null,
    isDataFetching:false,
    error:null
}

const ContentReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        
        case ContentTypes.FETCH_CONTENT_SUCCESS:
            return{
                ...state,
                content:action.payload,
                isDataFetching:true
            }
            case ContentTypes.FETCH_CONTENT_FAILURE:
                return{
                    ...state,
                    error:action.payload,
                    isDataFetching:false
                }

            default:
                return state;
    }






}

export default ContentReducer;