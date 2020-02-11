import React,{useEffect} from "react";
import {ContainerPage,QrcodeWrapper,QrCode,ActiveTextContainer,HeaderActivate,DescriptionActivate,ActivateLink,SecondDescription,CodeSpan} from "./sign-in.styles";

import {connect} from "react-redux";
import {checkUserisLogIn} from "../../redux/user/user.action";


const SignIn=({data,checkUserAuth,userIsLogin})=>{

  useEffect(()=>{

    

  const  interval=setInterval(() => {
      checkUserAuth(data.code);
    }, 5000);

    return ()=>{

      clearInterval(interval)
    }

  },[]);
 
return(
       <ContainerPage>
             <QrcodeWrapper>

              <QrCode src={data.qrcode} />
             </QrcodeWrapper>


          <ActiveTextContainer>
          <HeaderActivate>
            ورود به فیلیمو
          </HeaderActivate>
          <DescriptionActivate>

          با استفاده از مرورگر موبایل یا رایانه شخصی خود به آدرس زیر مراجعه کنید
          </DescriptionActivate>
          <ActivateLink href={`https://www.filimo.com/activate/${data.code}`}>
            www.filimo.com/activate
          </ActivateLink>
          <SecondDescription>

            و بعدش کد 
            <CodeSpan>
              {data.code}
            </CodeSpan>
              را وارد کنید
          </SecondDescription>


          </ActiveTextContainer>




             </ContainerPage>
);


};
const mapDispatchToProps=dispatch=>({
  checkUserAuth:(code)=>dispatch(checkUserisLogIn(code))
})

const mapStateToProps=state=>({
  userIsLogin:state.user.currentUser
})


export default connect(null,mapDispatchToProps)(SignIn);