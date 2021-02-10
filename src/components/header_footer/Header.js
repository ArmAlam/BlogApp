import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Container} from "@material-ui/core";
import RegisterLinks from "./RegisterLinks";
import LoginLinks from "./LoginLinks";


const Header = () => {

    const [auth, setAuth] = useState(false);



    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h6'>
                        BlogApp
                    </Typography>
                    {auth ? <LoginLinks/> : <RegisterLinks/> }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;