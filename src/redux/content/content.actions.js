import ContentTypes from "./content.types";


export const startFetchingContents=()=>({
    type:ContentTypes.FETCH_CONTENT_START

})


export const startFetchingContentsSuccessFull=(content)=>({
    type:ContentTypes.FETCH_CONTENT_SUCCESS,
    payload:content

})

export const fetchingContentFail=error=>({
    type:ContentTypes.FETCH_CONTENT_FAILURE,
    payload:error
})


export const StartfetchingSpecificMovie=movieId=>({
    type:ContentTypes.MOVIE_FETCHING_START,
    payload:movieId
});

export const fetchingSpecificMovieFaild=error=>({
    type:ContentTypes.MOVIE_FETCHING_FAILURE,
    payload:error
})

export const fetchingSpecificMovieSuccess=content=>({
    type:ContentTypes.MOVIE_FETCHING_SUCCESS,
    payload:content
})