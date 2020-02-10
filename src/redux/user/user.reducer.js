import userTypes from "./user.types";
const INITIAL_STATE={
    currentUser:null,
    isLoginDataFetched:false,
    loginData:null,
    error:null
}


const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userTypes.SET_LOGIN_DATA:
            return{
                ...state,
                isLoginDataFetched:true,
                loginData:action.payload
            }
            case userTypes.ERROR_ON_FETCHING_DATA:
                return{
                    ...state,
                    isLoginDataFetched:false,
                    error:action.payload

                }

                default:
                    return state;

    }
   

}






export default userReducer;