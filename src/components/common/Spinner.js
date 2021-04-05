import React from "react";
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div style={{
            display: 'block',
            width: '200px ',
            margin: 'auto'
        }}>
            <img src={spinner} alt="Loading..."/>
        </div>
    );
}

export default Spinner;