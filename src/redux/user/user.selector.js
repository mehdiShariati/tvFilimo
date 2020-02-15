import { createSelector } from 'reselect'


const getUserProfile = (state) => state.user.currentUser;



export const SelectuserProfile=createSelector([getUserProfile],userProfile=>{

    return {
        ltoken:userProfile.ltoken,
        userName:userProfile.username

    }
})