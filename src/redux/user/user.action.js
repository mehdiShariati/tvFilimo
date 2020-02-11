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

export const checkUserisLogIn=code=>({
    type:userTypes.CHECK_USER_ACTIVATE,
    payload:code
})

export const checkUserisLogInSuccess=userData=>({
    type:userTypes.CHECK_USER_SUCCESS,
    payload:userData
})

export const checkUserisLogInFailure=error=>({
type:userTypes.CHECK_USER_FAILURE,
payload:error

})

export const addtoUserProfile=data=>({
    type:userTypes.ADD_USER_PROFILE,
    payload:data
})