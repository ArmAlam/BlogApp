import React from "react";
import {NavLink} from 'react-router-dom';
import {Button, Fab, withStyles} from "@material-ui/core";
import styles from "./styles";

const Link = withStyles(styles)(
    React.forwardRef((props, ref) => {

        return (<NavLink
            activeClassName={props.classes.activeNav}
            innerRef={ref}
            {...props}
        />);
    }));


const LoginLinks = () => {
    return (
        <>
            <Button
                color='inherit'
                component={Link}
                to='/add'
            >
                Add Post
            </Button>
            <Button color='inherit'>Log out</Button>
            <Fab size='medium' variant='round' color='primary'>AA</Fab>
        </>
    );
}

export default LoginLinks;
