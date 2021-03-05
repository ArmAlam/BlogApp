import React from "react";
import {Link} from 'react-router-dom';
import {Button, Fab} from "@material-ui/core";


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
