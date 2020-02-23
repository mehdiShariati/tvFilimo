import React from "react";
import { withFocusable } from 'react-tv-navigation';
import {TagNameBtn} from "./tag-name-button.styles";

const TagNameButton=({title,setFocus,focused})=>{
    focused = (focused) ? 'focused' : 'unfocused';
    console.log(focused);
    return<TagNameBtn>
        <div className="titleHidden" onClick={() => {
            setFocus()
        }}/>
        {title}
    </TagNameBtn>
};


export default withFocusable(TagNameButton);