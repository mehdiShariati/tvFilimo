import React from "react";
import { withRouter } from "react-router";
import {HeaderWrapper,NavigationButtons,ActionButtons,NavbarLeftActionsContainers,LogoContainer,Logo,HeaderActions,Bawsome} from "./header.styles.jsx";


const Header=({match,history })=>{
console.log(history);
return(
    <HeaderWrapper>
        
        <LogoContainer to="/">
            <Logo src="https://www.filimo.com/assets/web/ui/img-RssGuvacCjN7asHcQbQQ/logo-light.png" />
        </LogoContainer>

        <HeaderActions>
            <NavbarLeftActionsContainers>
                {
                    history.location.pathname !== "/" ? (  <ActionButtons onClick={()=>history.push('/search')}>
                             <Bawsome className="fa fa-search" /> 
                             </ActionButtons>) :
                              ''
                      
                }
              

              
             
           

                <ActionButtons onClick={()=>history.push('/signin')}>
                   <Bawsome className="fa fa-user" />
                </ActionButtons>


            

            </NavbarLeftActionsContainers>

        </HeaderActions>


   
    </HeaderWrapper>
)



}
export default withRouter(Header);