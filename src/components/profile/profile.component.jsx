import React from "react";

import {ProfileWrapper,
    LockContainer,
    LineCutter,
CreditTextContainer,
   CreditContainer,
    ExitButton,LockImgae,LockTextContainer,LockTitle,
    LockDescription,ImgSub,RechargeButton,StateDescription
} from "./profile.styles";



const Profile=()=>(

<ProfileWrapper>
    <LockContainer>
    <LockImgae  src="https://www.filimo.com/public/public/images/icon/tv/kids/kids-inactive.png" />
        <LockTextContainer>
    
            <LockTitle>
                قفل کودک فعال نیست
            </LockTitle>

            <LockDescription>
                برای فعال سازی قفل کودک به وبسایت اصلی فیلیمو مراجعه کنید
            </LockDescription>

        </LockTextContainer>
      
    </LockContainer>
    <LineCutter />
    <CreditContainer>
        <ImgSub src="https://www.filimo.com/public/public/images/icon/state/subscribe.png" />
        <CreditTextContainer>
      <StateDescription>
        زیاد از اشتراکت باقی نمونده فقط ۲ روز
        </StateDescription>

        <RechargeButton href="https://www.filimo.com/payment">تمدید اشتراک</RechargeButton>

        </CreditTextContainer>

    </CreditContainer>
    <LineCutter />
    <div>
        <ExitButton>
            خروج
        </ExitButton>
    </div>



</ProfileWrapper>




)

export default Profile;