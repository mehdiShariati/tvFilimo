import userTypes from "./user.types";


export const fetchLoginData=()=>({
    type:userTypes.FETCH_ACTIVE_CEREDENTIALS
})

export const loginDataReady=loginData=>({
    type:userTypes.SET_LOGIN_DATA,
    payload:loginData
})

export const errorOnFetching=error=>({
    type:userTypes.ERROR_ON_FETCHING_DATA,
    payload:error
})