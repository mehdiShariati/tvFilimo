import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/store";

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
            <PersistGate persistor={persistor}>
                 <App />
                 </PersistGate>
         </BrowserRouter>

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//
// import React from 'react'
//
// import ReactDOM from 'react-dom';
// import { withFocusable, withNavigation } from 'react-tv-navigation';
//
// const Item = ({focused, setFocus, focusPath}) => {
//     focused = (focused) ? 'focused' : 'unfocused';
//     return (
//         <div onClick={() => { setFocus() }} >
//             It's {focused} Item
//         </div>
//     )
// };
//
// const Button = ({setFocus}) => {
//     return (
//         <div onClick={() => { setFocus('item-1') }}>
//             Back To First Item!
//         </div>
//     )
// };
//
// const FocusableItem = withFocusable(Item);
// const FocusableButton = withFocusable(Button);
//
// function TestNav({currentFocusPath}) {
//     return (
//         <div>
//             <h1>Current FocusPath: '{currentFocusPath}'</h1>,
//             {console.log(currentFocusPath)}
//             <FocusableItem focusPath='item-1'/>
//             <FocusableItem focusPath='item-2'/>
//             <FocusableButton
//                 focusPath='button'
//                 onEnterPress={() => console.log('Pressed enter on Button!')}/>
//         </div>
//     )
// }
//
// const NavigableApp = withNavigation(TestNav);
//
// ReactDOM.render(<NavigableApp/>, document.querySelector('#root'));
//
//
