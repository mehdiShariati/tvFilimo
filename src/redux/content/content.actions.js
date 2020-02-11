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