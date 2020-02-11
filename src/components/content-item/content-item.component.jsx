import React from "react";
import {ItemWrapper,
    ImgMovie} from "./content-item.styles"


const ContentItem=({image})=>(
<ItemWrapper>

<ImgMovie key={Math.random()} src={image} />


</ItemWrapper>


);



export default ContentItem;