import React from "react";
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';


const RegisterLinks = () => {
    return (
        <>
            <Button color='inherit' component={Link} to='/register'>Register</Button>
            <Button color='inherit' component={Link} to='/login'>Login</Button>
        </>
    );
}

export default RegisterLinks;
