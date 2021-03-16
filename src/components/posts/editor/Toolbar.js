import React from "react";
import {withStyles} from "@material-ui/core";
import styles from "../styles";

const Toolbar = ({children, classes}) => {
    return (
        <div className={classes.toolbar}>
            {children}
        </div>
    );
}

export default withStyles(styles)(Toolbar);