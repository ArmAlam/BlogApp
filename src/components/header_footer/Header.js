import React, {useState} from 'react';
import {AppBar, Toolbar, Container, Link, withStyles} from "@material-ui/core";
import {Link as LinkRouter} from 'react-router-dom';
import RegisterLinks from "./RegisterLinks";
import LoginLinks from "./LoginLinks";
import styles from "./styles";


const Header = ({classes}) => {

    const [auth, setAuth] = useState(true);



    return (
        <AppBar position='static' >
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Link
                        to='/'
                        variant='h6'
                        color='inherit'
                        underline='none'
                        component={LinkRouter}
                    >
                        Blog App
                    </Link>
                    <div>
                        {auth ? <LoginLinks/> : <RegisterLinks/> }
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default withStyles(styles)(Header);