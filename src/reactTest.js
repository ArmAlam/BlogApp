import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import './index.css';
import App from './App';
import {store, incrementCount, decrementCount, resetCount, flipCounting} from "./redux/redux101";

const TestComponent = (props) => (
    <>
        <p>{props.count}</p>
        <button disabled={!props.counting} onClick={ () => props.incrementCount(5)}>Increment</button>
        <button disabled={!props.counting} onClick={ () => props.decrementCount(2)}>Decrement</button>
        <button disabled={!props.counting} onClick={ () => props.resetCount(0)}>Reset</button>
        <button onClick={ props.flipCounting }>{props.counting ? 'Disable Count' : 'Enable Count'}</button>
    </>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.count,
        counting: state.counting
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: (number) => dispatch(incrementCount(number)),
        decrementCount: (number) => dispatch(decrementCount(number)),
        resetCount: (number) => dispatch(resetCount(number)),
        flipCounting: () => dispatch(flipCounting()),
    };
};



const TestComponentWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent);

ReactDOM.render( <Provider store={store}> <TestComponentWithRedux /> </Provider>, document.getElementById('root'));

