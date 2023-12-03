//why redux
//when we have a big application to manage
//manages application's state within a single global object called store
//consistency throught application
//makes testing very easy


//actions & reducers
//action - plain object, describes the intention to cause the change
//reducer - a function to manipulate the application's state, return the new state, updates the store state

import { createStore } from "redux";

const counterReducer = (state = { count : 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(counterReducer)

export default store;