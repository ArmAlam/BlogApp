import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Posts} from '../posts/index';

const Dashboard = ({posts}) => {
    return (
        <>
            <Typography variant='h5' component='h3'>
                Dashboard
            </Typography>
            <Posts posts={posts} />
        </>
    )
}

export default Dashboard;