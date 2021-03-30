import {createStore, combineReducers} from "redux";

//action creator
export const incrementCount = (count = 1) => {
    return {
        type: 'INCREMENT_COUNT',
        count
    };
};

export const decrementCount = (count = 1) => {
    return {
        type: 'DECREMENT_COUNT',
        count
    };
};

export const resetCount = (count = 0) => {
    return {
        type: 'RESET_COUNT',
        count
    }
}

export const flipCounting = () => {
    return {
        type: 'FLIP_IS_COUNTING'
    }
}


// reducer , a function that returns updated state based on some action
const counter = (state = 0, action) => {

    switch (action.type)
    {
        case 'INCREMENT_COUNT': {

            return state + action.count;
        }

        case 'DECREMENT_COUNT': {

            return state - action.count;
        }

        case 'RESET_COUNT': {
            return action.count;
        }

        default:
            return state;
    }

}

const isCounting = (state = false, action) => {
    switch (action.type) {
        case 'FLIP_IS_COUNTING':
            return !state;

        default:
            return state;
    }
}


// store, is a state container
export const store = createStore(
    combineReducers({
        count: counter,
        counting: isCounting
    })
);

//subscribe is a continuous listener of dispatch, must to be declared before dispatch
// const unSubscribe = store.subscribe(() => console.log(store.getState()));
//
//
// // passing action
// store.dispatch(incrementCount(10));

// unsubscribing, just need to call the variable function (can set variable name to anything)
// unSubscribe();

// store.dispatch(decrementCount(5));
// store.dispatch(resetCount(0));
// store.dispatch({
//     type: 'Flip_Is_Counting5'
// });
