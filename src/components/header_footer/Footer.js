import React from 'react';
import {Typography, withStyles} from "@material-ui/core";
import styles from "./styles";


const Footer = ({classes}) => {
    return (
        <Typography
            variant='caption'
            className={classes.footer}
            align='center'
            paragraph='true'
        >
            &copy; Arm Alam | All rights reserved;
        </Typography>
    );
}

export default withStyles(styles)(Footer);