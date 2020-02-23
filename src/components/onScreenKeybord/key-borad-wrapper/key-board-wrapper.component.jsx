import React from "react";

import {ListWrapper,

} from "./key-board-wrapper.style";
import { withNavigation } from 'react-tv-navigation';
import KeyBoardItem from "../key-board-item/key-board-item.component";
const KeyboardWrapper=({List})=>{


    return(
        <ListWrapper>
            {List.map((itm,index)=>
                (<KeyBoardItem  key={itm+Math.random()} keyName={itm} focousPath={index+itm} />)
            )}
        </ListWrapper>
    )
};


export default withNavigation(KeyboardWrapper);
