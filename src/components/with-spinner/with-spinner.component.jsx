import React from "react";

import {SpinnerOverlay,SpinnerContainer} from "./with-spinner.styles";

const WithSpinner=WrappedComponnet=>({isLoading,...otherProps})=>
{
    return isLoading ?(<SpinnerOverlay>
        <SpinnerContainer>
        </SpinnerContainer>
        </SpinnerOverlay>):
    (<WrappedComponnet {...otherProps} />)
}

export default WithSpinner;