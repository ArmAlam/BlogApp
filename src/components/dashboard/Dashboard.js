import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Posts} from '../posts/index';

const Dashboard = () => {
    return (
        <>
            <Typography variant='h5' component='h3'>
                Dashboard
            </Typography>
            <Posts/>
        </>
    )
}

export default Dashboard;