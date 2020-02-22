import React from "react";
import { withRouter } from "react-router";
import {HeaderWrapper,
    ActionButtons,NavbarLeftActionsContainers,
    LogoContainer,Logo,HeaderActions,Bawsome,
    ProfileWrapper,ProfileTextWrapper,ProfileUserName,ButtonProfileImage,ImgProfile,ProfileRemainDays} from "./header.styles.jsx";
import { withFocusable, withNavigation } from 'react-tv-navigation';


const ProfileC=({username,desc,history})=>(
    <ProfileWrapper>
        <ProfileTextWrapper>

            <ProfileUserName>
                {username}
            </ProfileUserName>
            <ProfileRemainDays>
                {desc}
            </ProfileRemainDays>

        </ProfileTextWrapper>
        <ButtonProfileImage  focusPath={"Profile_header_button"}  onClick={()=>history.push("/profile")}>

            <ImgProfile src="https://www.filimo.com/public/public/images/icon/profile/default-s.jpg" />

        </ButtonProfileImage>


    </ProfileWrapper>

);

const ActionButtonsWrappsAll=({children,history,url})=>(
    <ActionButtons  onClick={()=>history.push(url)}>
        {children}
    </ActionButtons>
);
const ActionButtonsWithFocus=withNavigation(withFocusable(withRouter(ActionButtonsWrappsAll)));
const ProfileWrapeerwithFocus=withFocusable(withRouter(ProfileC));

const Header=({history,user,profiles })=>{

return(
    <HeaderWrapper>
        
        <LogoContainer to="/">
            <Logo src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDkuNjcgNjMuNTIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjQ4NDNmO30uY2xzLTJ7ZmlsbDojZjM3NjMzO30uY2xzLTN7ZmlsbDojZjg5ZTNlO30uY2xzLTR7ZmlsbDojZjY4ZDMzO30uY2xzLTV7ZmlsbDojZmRjMTNiO30uY2xzLTZ7ZmlsbDojZmFhYzJmO30uY2xzLTd7ZmlsbDojZmZmZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+ZmlsaW1vLWxvZ288L3RpdGxlPjxnIGlkPSJjb2xvcl8tX2xhbmQiIGRhdGEtbmFtZT0iY29sb3IgLSBsYW5kIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMDYuMTYsMzMuODVsLjE5LjE5YTIxLjE4LDIxLjE4LDAsMCwxLDQuMDUsNy43NSwxNy40NSwxNy40NSwwLDAsMSwuNjEsNC4zNywxNy44OSwxNy44OSwwLDAsMS0uNDIsMy43OSwyLjM1LDIuMzUsMCwwLDEtLjUzLDEuMDdjLS4zLjMzLS42LjY2LS45MywxYTI2LjI1LDI2LjI1LDAsMCwxLTIuNTIsMS45M2MtMi40NiwxLjczLTUsMy4zMi03LjYsNC44Ni0zLjMzLDItNi43LDMuODUtMTAuMTgsNS41Ni0xLjI0LjYxLTIuNSwxLjItMy43OSwxLjdhMTQuMSwxNC4xLDAsMCwxLTEuNjQuNTEsMi43NywyLjc3LDAsMCwxLTEuMjgsMCwxNS45NCwxNS45NCwwLDAsMS0yLjY3LS45M2MtMS45LS44Mi0zLjc0LTEuNzQtNS41Ni0yLjcxLTQuNDMtMi4zNC04Ljc2LTQuODYtMTMtNy42MWwtMS4zMi0uODktLjM0LS4yNWExLjI2LDEuMjYsMCwwLDEsLjI2LDBsLjg2LjRBMjAuNTQsMjAuNTQsMCwwLDAsMTY1LjIsNTZhMTkuMzUsMTkuMzUsMCwwLDAsMy43Mi4yNiwxNi4xNywxNi4xNywwLDAsMCw2LjQ5LTEuNDljMS45MS0uODksMy44LTEuOCw1LjY3LTIuNzdxNS42NS0zLDExLjE0LTYuMjFjMy4xOS0xLjg5LDYuMzYtMy44Myw5LjQxLTUuOTMuODItLjU2LDEuNjItMS4xNSwyLjQtMS43NWExMS40NywxMS40NywwLDAsMCwxLjI5LTEuMTMsMy4yMSwzLjIxLDAsMCwwLDEtMiwzLDMsMCwwLDAsMC0uNkE0LjQsNC40LDAsMCwwLDIwNi4xNiwzMy44NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjE1IC0zLjA5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIwNi4zNSwzNGwtLjE5LS4xOWE0LjQsNC40LDAsMCwxLC4xLjUxLDMsMywwLDAsMSwwLC42LDMuMjEsMy4yMSwwLDAsMS0xLDJBMTEuNDcsMTEuNDcsMCwwLDEsMjA0LDM4LjA2Yy0uNzguNi0xLjU4LDEuMTktMi40LDEuNzUtMi4yNCwxLjU0LTQuNTQsMy02Ljg3LDQuNDEsMTEuMzYtMiwxNC43OCwyLjc1LDE1LjgxLDUuODJhLjI5LjI5LDAsMCwxLDAtLjA5LDE3Ljg5LDE3Ljg5LDAsMCwwLC40Mi0zLjc5LDE3LjQ1LDE3LjQ1LDAsMCwwLS42MS00LjM3QTIxLjE4LDIxLjE4LDAsMCwwLDIwNi4zNSwzNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjE1IC0zLjA5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIxMS40NCw0NS40N2MtLjE0LS4wOS0uMTMtLjIxLS4xMy0uMzNBMTMuMjksMTMuMjksMCwwLDAsMjExLDQzYTE5Ljg2LDE5Ljg2LDAsMCwwLTQtOC43LDE0LjgsMTQuOCwwLDAsMC0zLjE2LTNjLTEuNDgtMS0zLTItNC40OC0zLTMuNjgtMi40LTcuNDYtNC42NC0xMS4yOS02LjgtMy4xLTEuNzYtNi4yNC0zLjQ2LTkuNDQtNS0xLjIzLS42MS0yLjQ3LTEuMi0zLjc1LTEuNy0uNDctLjE3LS45NC0uMzQtMS40My0uNDdhMy4yNywzLjI3LDAsMCwwLTEuODYsMCwyLjUxLDIuNTEsMCwwLDAtLjkzLjUybC0uMjcuMjFhMS4zLDEuMywwLDAsMSwwLS4yMSwyMC4zNSwyMC4zNSwwLDAsMSw2LjUtOSwxNi41NiwxNi41NiwwLDAsMSw1LjEzLTIuNjQsMywzLDAsMCwxLDEuNjEsMCwxMi42MSwxMi42MSwwLDAsMSwyLjA3LjdjMS43LjcsMy4zNCwxLjUsNSwyLjM1YTE1Ny40OCwxNTcuNDgsMCwwLDEsMTQuNjMsOC41N2MxLjE0Ljc1LDIuMjUsMS41MywzLjMyLDIuMzhhMTIuMjcsMTIuMjcsMCwwLDEsMS4zNiwxLjI0LDIuNjksMi42OSwwLDAsMSwuNjgsMS4xOCwxNiwxNiwwLDAsMSwuNTMsMi45MSwxMDcuNjcsMTA3LjY3LDAsMCwxLC41MywxMS4wN2MwLDIuNjIsMCw1LjI0LS4xMiw3Ljg2LDAsMS4yOS0uMTUsMi41Ny0uMjMsMy44NkEuNjkuNjksMCwwLDEsMjExLjQ0LDQ1LjQ3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMTUgLTMuMDkpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTcxLjY1LDE0LjNhMy4yNywzLjI3LDAsMCwxLDEuODYsMGMuNDkuMTMsMSwuMywxLjQzLjQ3LDEuMjguNSwyLjUyLDEuMDksMy43NSwxLjcsMi4zLDEuMTIsNC41NiwyLjMyLDYuOCwzLjU1LTktOS44My00LjE5LTE1LjctMy0xNi44NmwtLjMzLjA4QTE2LjU2LDE2LjU2LDAsMCwwLDE3Nyw1Ljg1YTIwLjM1LDIwLjM1LDAsMCwwLTYuNSw5LDEuMywxLjMsMCwwLDAsMCwuMjFsLjI3LS4yMUEyLjUxLDIuNTEsMCwwLDEsMTcxLjY1LDE0LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4xNSAtMy4wOSkiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xNzcuODUsNC43NGMwLC4xOC0uMTkuMjItLjI5LjNhMjAuMDYsMjAuMDYsMCwwLDAtNi4zNyw3LjE0LDE1Ljg5LDE1Ljg5LDAsMCwwLTEuNzQsNS4xYy0uMDguNDgtLjEzLDEtLjE3LDEuNDUtLjIzLDIuNjQtLjQsNS4yOC0uNDgsNy45My0uMTQsNC4zLS4xOSw4LjU5LS4wOCwxMi44OSwwLDEuNDUuMDYsMi44OS4xMiw0LjM0LjA3LDEuODcuMTcsMy43NS4zNSw1LjYyYTI1Ljc0LDI1Ljc0LDAsMCwwLC40LDMsNC44OCw0Ljg4LDAsMCwwLC40MywxLjM0LDQuMTUsNC4xNSwwLDAsMCwuNi44NCwyLjU0LDIuNTQsMCwwLDAsMSwuNjNsLjQuMTVjLS40OC4wNy0uODYuMTUtMS4yNC4xOC0uNzcuMDYtMS41NC4xMy0yLjMyLjE0YTE5Ljc0LDE5Ljc0LDAsMCwxLTYuMDYtLjgxLDE2LjUxLDE2LjUxLDAsMCwxLTYuMTYtMy40bC0uMDktLjA5YTMuMTEsMy4xMSwwLDAsMS0xLjE2LTEuOCwxMS44MSwxMS44MSwwLDAsMS0uMzYtMS43N2MtLjIzLTEuNzUtLjM2LTMuNS0uNDUtNS4yNi0uMjMtNC4xNy0uMjMtOC4zMy0uMTQtMTIuNSwwLTEuODQuMTItMy42Ny4yNi01LjUuMS0xLjI0LjItMi40OC40MS0zLjcxLjEtLjU1LjI0LTEuMDkuMzgtMS42M2EyLjY3LDIuNjcsMCwwLDEsLjY2LTEuMDksMTUuNzQsMTUuNzQsMCwwLDEsMS42OC0xLjQ4YzEuNDktMS4xNCwzLjA1LTIuMTgsNC42My0zLjE5QTE1NC41MiwxNTQuNTIsMCwwLDEsMTc2LjUsNS4zNmMuNDEtLjIxLjgzLS40LDEuMjQtLjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4xNSAtMy4wOSkiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0xNzAuNjIsNTQuNzFhNC4xNSw0LjE1LDAsMCwxLS42LS44NCw0Ljg4LDQuODgsMCwwLDEtLjQzLTEuMzQsMjUuNzQsMjUuNzQsMCwwLDEtLjQtM2MtLjE4LTEuODctLjI4LTMuNzUtLjM1LTUuNjItLjA1LTEuMzItLjA4LTIuNjMtLjExLTQtMS4xMywzLjQ4LTQuOTUsMTIuOTItMTIuODcsMTEuMzNhMS43NiwxLjc2LDAsMCwwLC4zLjI0bC4wOS4wOWExNi41MSwxNi41MSwwLDAsMCw2LjE2LDMuNCwxOS43NCwxOS43NCwwLDAsMCw2LjA2LjgxYy43OCwwLDEuNTUtLjA4LDIuMzItLjE0LjM4LDAsLjc2LS4xMSwxLjI0LS4xOGwtLjQtLjE1QTIuNTQsMi41NCwwLDAsMSwxNzAuNjIsNTQuNzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4xNSAtMy4wOSkiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik05Ny4yMiw0My4zM2ExMC4zOCwxMC4zOCwwLDAsMS0xNS40LDAsMTAuNCwxMC40LDAsMCwxLTE1LjQyLDAsMTAuNCwxMC40LDAsMCwxLTE1LjQsMCwxMC40LDEwLjQsMCwwLDEtMTUuNCwwLDEwLjM5LDEwLjM5LDAsMCwxLTE1LjM3LDBsLS40MS40MXEtNC41OSw0LjU5LTkuMTksOS4xOWExLjEyLDEuMTIsMCwwLDEtMS4wNi4zNyw2LjEsNi4xLDAsMCwxLTEuNzEtLjUsMTAuODgsMTAuODgsMCwwLDEtMi4xNy0xLjM3Yy0uNDEtLjMyLS40Mi0uNTUtLjA1LS45MkM5LDQ3LjE1LDEyLjM2LDQzLjc3LDE1Ljc1LDQwLjQyYTYuMjIsNi4yMiwwLDAsMCwxLjMyLTEuNzEsNS4wOSw1LjA5LDAsMSwwLTkuNjUtMi44NUE1LDUsMCwwLDAsOC43LDQwYy4zOC40Mi44MS43OCwxLjIxLDEuMTguNjcuNjYsMS4zMywxLjMzLDIsMiwuMzEuMzEuMzEuNTcsMCwuODRhOS4yMyw5LjIzLDAsMCwxLTMsMS42OSw4LjI1LDguMjUsMCwwLDEtMS4xMi4yNEEuODIuODIsMCwwLDEsNyw0NS42NWMtLjg5LS45MS0xLjg1LTEuNzctMi42NS0yLjc2YTkuODgsOS44OCwwLDAsMS0yLjItNy4yMSwxMC4zMSwxMC4zMSwwLDAsMSwyMC40My0xYy4wOS41My4xMiwxLjA3LjE2LDEuNkE2LjEzLDYuMTMsMCwwLDAsMjMuNTIsMzlhNS4xLDUuMSwwLDAsMCw5LjM5LTEuNTYsNCw0LDAsMCwwLC4wOC0uNzhjMC0xLjM1LDAtMi43LDAtNCwwLS40My4yMS0uNjQuNjItLjU5YTEwLDEwLDAsMCwxLDIuOTQuNzQsMTIuODYsMTIuODYsMCwwLDEsMS4xNC42NSwxLjEsMS4xLDAsMCwxLC41NSwxLjA2YzAsLjY4LDAsMS4zNiwwLDJBNC42NSw0LjY1LDAsMCwwLDM5LjY0LDQwYTQuODYsNC44NiwwLDAsMCw1LjA4LDEuMzdBNC44MSw0LjgxLDAsMCwwLDQ4LjMsMzcuNWE1LjA1LDUuMDUsMCwwLDAtNC40NS02LjEzYy0uMjUsMC0uNSwwLS43NSwwSDMzLjcyYy0uNjYsMC0uNzgtLjEyLS43MS0uNzZhOS4wOSw5LjA5LDAsMCwxLC43Ni0yLjg5LDEwLDEwLDAsMCwxLC42OC0xLjEzLDEsMSwwLDAsMSwuOTItLjQ2aDEuNWMyLjE1LDAsNC4zLDAsNi40NSwwYTkuODIsOS44MiwwLDAsMSw0LjMzLDFBMTAuMTUsMTAuMTUsMCwwLDEsNTMuNSwzNC45YTkuNDIsOS40MiwwLDAsMSwuMTIsMS42LDUuMSw1LjEsMCwwLDAsMTAuMTQuNjcsMy41NSwzLjU1LDAsMCwwLDAtLjQ2VjI3YzAtLjcuMTEtLjgyLjc5LS43NGE5LjY0LDkuNjQsMCwwLDEsMi44LjczLDExLjQ1LDExLjQ1LDAsMCwxLDEuMTEuNjVBMS4wOSwxLjA5LDAsMCwxLDY5LDI4LjY2YzAsLjU4LDAsMS4xNywwLDEuNzV2NmE1LjEsNS4xLDAsMCwwLDEwLjE5LDBxMC0xMSwwLTIxLjg5di0uMzVjMC0uMzkuMTktLjU4LjU2LS41NGE4LjQxLDguNDEsMCwwLDEsNC4xNiwxLjM4LDEuMiwxLjIsMCwwLDEsLjUzLDEuMDZjMCwzLDAsNiwwLDlxMCw1LjY2LDAsMTEuMzFhNS4xLDUuMSwwLDAsMCwxMC4xMy44NSwyLjM2LDIuMzYsMCwwLDAsMC0uNDZ2LTEwYzAtLjQ0LjE5LS42Mi42My0uNTdhOS4zMiw5LjMyLDAsMCwxLDMuMzkuOTQsOS4xNyw5LjE3LDAsMCwxLC44My41NS45LjksMCwwLDEsLjM5LjczYzAsLjE1LDAsLjI5LDAsLjQzcTAsMy43OCwwLDcuNTZhNS4wNyw1LjA3LDAsMCwwLDMuNTksNC44Nyw0LjkyLDQuOTIsMCwwLDAsMS40OC4yM2gxNS4xOGE1LjQ5LDUuNDksMCwwLDAsMi40NC0uNDUsNSw1LDAsMCwwLDMtNC42MiwxMS4wOSwxMS4wOSwwLDAsMC0uMDgtMiw1LjA4LDUuMDgsMCwwLDAtMTAtLjI0LDQuNjUsNC42NSwwLDAsMC0uMTEsMS4wNmMwLDEuMDksMCwyLjE3LDAsMy4yNmExLjIxLDEuMjEsMCwwLDEtLjU0LDEuMDYsNi45MSw2LjkxLDAsMCwxLTIuNjcsMS4xNSwxNC4xNCwxNC4xNCwwLDAsMS0xLjQ1LjI0Yy0uNDEsMC0uNTktLjEyLS41OS0uNTMsMC0xLjg4LDAtMy43NywwLTUuNjVhOS44Miw5LjgyLDAsMCwxLDIuNi02LjM3QTkuOTMsOS45MywwLDAsMSwxMTkuNTEsMjVhMTAuMjgsMTAuMjgsMCwwLDEsMTEuMDYsOC4zMiwxMy42NywxMy42NywwLDAsMSwuMTksMiwxMi4yNywxMi4yNywwLDAsMS0uMTEsMi41NywxMC4zMiwxMC4zMiwwLDAsMS05LjI3LDguNzVjLS41Mi4wNS0xLDAtMS41NywwSDEwNS4wOWExMC4yMywxMC4yMywwLDAsMS03LjY4LTMuMjZsLS4xLS4xWk01OC45MSw1MS42NGEzLjczLDMuNzMsMCwwLDAtMS41OC0xLjA4LDMuNTYsMy41NiwwLDAsMC0xLjk0LS4xNSwzLjY4LDMuNjgsMCwwLDAsLjE2LDcuMjUsMy43NiwzLjc2LDAsMCwwLDQuMjItMywzLjkyLDMuOTIsMCwwLDAsLjg0LDEuNzgsMy42OSwzLjY5LDAsMCwwLDEuNTgsMS4wOUEzLjY4LDMuNjgsMCwxLDAsNjQsNTAuMzhhMy43NiwzLjc2LDAsMCwwLTQuMjIsM0E0LjA3LDQuMDcsMCwwLDAsNTguOTEsNTEuNjRabTM2LjQyLDZhMy42OCwzLjY4LDAsMCwwLDAtNy4yNywzLjc2LDMuNzYsMCwwLDAtNC4yNCwzLDMuNzMsMy43MywwLDAsMC00LjI3LTMsMy42NywzLjY3LDAsMCwwLDAsNy4yNiwzLjc0LDMuNzQsMCwwLDAsNC4yNC0zQTMuNzQsMy43NCwwLDAsMCw5NS4zMyw1Ny42NVpNMTE5Ljg5LDIxYTMuNjgsMy42OCwwLDEsMC0zLjY3LTMuNjZBMy42OCwzLjY4LDAsMCwwLDExOS44OSwyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjE1IC0zLjA5KSIvPjwvZz48L3N2Zz4K" />
        </LogoContainer>
        { user ?  
        (<ProfileWrapeerwithFocus focusPath={"Profile_header_1"}  username={user.username} desc={profiles.profile_state_info.descr.text} />) :''}


        <HeaderActions>
            <NavbarLeftActionsContainers  >
                {
                    history.location.pathname !== "/" ? (<ActionButtonsWithFocus focusPath={"Profile_header_3"} url="/">
                            <Bawsome className="fa fa-home" />
                        </ActionButtonsWithFocus> ) :
                              ''
                      
                }
                {
                    history.location.pathname !== "/" ? (<ActionButtonsWithFocus focusPath={"Profile_header_4"} url="/">
                            <Bawsome className="fa fa-back" />
                        </ActionButtonsWithFocus> ) :
                        ''

                }


                <ActionButtonsWithFocus focusPath={"Profile_header_2"} url="/search">
                    <Bawsome className="fa fa-search" />
                </ActionButtonsWithFocus>
             
           
                {user ? '' : (
                <ActionButtons onClick={()=>history.push('/signin')}>
                   <Bawsome className="fa fa-user" />
                </ActionButtons>
                    )}

            

            </NavbarLeftActionsContainers>

        </HeaderActions>
           
   
    </HeaderWrapper>
)



}
const headerWithNavs=withNavigation(Header);
export default withRouter(headerWithNavs);