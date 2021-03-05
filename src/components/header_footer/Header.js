import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Container, Link} from "@material-ui/core";
import {Link as LinkRouter} from 'react-router-dom';
import RegisterLinks from "./RegisterLinks";
import LoginLinks from "./LoginLinks";


const Header = () => {

    const [auth, setAuth] = useState(true);



    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Link
                        to='/'
                        variant='h6'
                        color='inherit'
                        underline='none'
                        component={LinkRouter}
                    >
                        Blog App
                    </Link>
                    {auth ? <LoginLinks/> : <RegisterLinks/> }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;