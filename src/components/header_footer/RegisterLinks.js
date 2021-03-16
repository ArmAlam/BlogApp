import React from "react";
import {Button, withStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import styles from "./styles";

const Link = withStyles(styles)(
    React.forwardRef((props, ref) => {

    return (<NavLink
                activeClassName={props.classes.activeNav}
                innerRef={ref}
                {...props}
            />);
}));


const RegisterLinks = () => {
    return (
        <>
            <Button color='inherit' component={Link} to='/register'>Register</Button>
            <Button color='inherit' component={Link} to='/login'>Login</Button>
        </>
    );
}

export default RegisterLinks;
