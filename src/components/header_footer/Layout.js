import React from 'react';
import {Container, withStyles} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles";

const Layout = ({children, classes}) => {
    return (
        <>
            <Header/>
            <Container className={classes.container}>
                {children}
            </Container>
            <Footer/>
        </>
    );
}

export default withStyles(styles)(Layout);