import ContentTypes from "./content.types";
const INITIAL_STATE={
    content:null,
    isDataFetching:false,
    error:null,
    movieContent:null,
    isMovieLoading:false
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

                case ContentTypes.MOVIE_FETCHING_FAILURE:
                    return{
                        ...state,
                        movieContent:null,
                        isMovieLoading:false,
                        error:action.payload
                    }

                    case ContentTypes.MOVIE_FETCHING_SUCCESS:
                        return{
                            ...state,
                            movieContent:action.payload,
                            isMovieLoading:true,

                        }
                        case ContentTypes.MOVIE_FETCHING_START:
                            return{
                                ...state,
                                movieContent:null,
                                isMovieLoading:false
                            }

            default:
                return state;
    }






}

export default ContentReducer;