import React from "react";
import {ListItemWrapper,
    ItemButton
} from "./key-board-item.style";
import { withFocusable } from 'react-tv-navigation';
import {connect} from "react-redux";
import {addToSearchField} from "../../../redux/search/search.actions";
const KeyBoardItem=({keyName,addToSearchField})=>{
const handleItemClick=()=>{
    addToSearchField(keyName);
};
    return(
        <ListItemWrapper onClick={handleItemClick}>
            <ItemButton>
                {keyName}
            </ItemButton>
        </ListItemWrapper>
    );
};
const mapDispatchToProps=dispatch=>({
    addToSearchField:(name)=>dispatch(addToSearchField(name))
});

export default  withFocusable(connect(null,mapDispatchToProps)(KeyBoardItem));