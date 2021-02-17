import React from "react";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";


const DashboardIndex = ({posts}) =>
{
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Dashboard posts={posts}/>
            </Grid>

            <Grid item xs={4}>
                <Sidebar/>
            </Grid>
        </Grid>
    );
}

export {DashboardIndex};