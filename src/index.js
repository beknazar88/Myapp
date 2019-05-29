import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import About from './Components/About/About';
import UEFA from "./Components/UEFA/UEFA";
import Score from './Components/Score/Score';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";


const initialState = [
    'ignit',
    'Rompasso'
]
function playlist(state=initialState,action){
    if(action.type === 'ADD_TRACK'){
    return [...state,action.composition]
    }
    return state;
}
const store = createStore(playlist);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router>
                <div>
                    <div className="Button_home">
                        <Link to="/" className='BTN'>Home</Link>
                        <Link to="/about" className='BTN'>Новости о спорте</Link>
                        <Link to="/UEFA" className='BTN'>Матч четвертьфинала УЕФА</Link>
                        <Link to="/Score" className='BTN'>Все лиги футбола</Link>
                    </div>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/UEFA" component={UEFA}/>
                    <Route path="/Score" component={Score}/>
                </div>
            </Router>

        </Provider>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA








// import {createStore} from 'redux';
// import {all} from "q";
//
//
// function playlist(state=[],action){
//     if(action.type === 'ADD_TRACK'){
//     return [...state,action.composition]
//     }
// }
//
// const store = createStore(playlist);
// let List = document.querySelectorAll('.List')[0];
// store.subscribe(function () {
//     trackInput.value = '';
//
//
//
//     let li = document.createElement('li');
//     store.getState().forEach(function (track) {
//         li.textContent = track;
//
//         List.appendChild(li);
//
//     })
//
// })
//
// let trackInput = document.querySelectorAll('.trackInput')[0];
//
//
// let addTrack = document.querySelectorAll('.addTrack')[0];
// addTrack.addEventListener('click',function () {
//     store.dispatch({type: 'ADD_TRACK', composition: trackInput.value})
//     console.log(store.getState(List));
// })
//
// let First = document.querySelectorAll('.First')[0];
// First.addEventListener('click',function () {
//     store.getState().splice(0,1);
//     List.removeChild(List.firstChild);
//     console.log(store.getState(List));
// });
// let Last = document.querySelectorAll('.Last')[0];
// Last.addEventListener('click', function () {
//     store.getState().pop();
//     List.removeChild(List.lastChild);
//     console.log(store.getState(List));
// })
//
// let ALL = document.querySelectorAll('.ALL')[0];
// ALL.addEventListener('click', function () {
//
//   List.innerHTML='';
//     store.getState().splice(0,100);
//     console.log(store.getState(List));
// })





