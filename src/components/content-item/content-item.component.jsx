import React from "react";
import {ItemWrapper,
    ImgMovie,EntitleWrapper} from "./content-item.styles";
import { withFocusable } from 'react-tv-navigation';


const ContentItem=({enTitle,image,focused, setFocus, focusPath,title,currentFocusPath})=>{
   focused = (focused) ? 'focused' : 'unfocused';

    return(
<ItemWrapper  >
     <div className="titleHidden"  onClick={() => { setFocus() }} >
         <h5>{title}</h5>
         <EntitleWrapper>
             {enTitle}
         </EntitleWrapper>
    </div>



<ImgMovie key={Math.random()} src={image} />


</ItemWrapper>


)};



export default withFocusable(ContentItem);