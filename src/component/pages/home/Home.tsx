import * as React from 'react'
import {Grid, makeStyles} from "@material-ui/core";
import {LeftMenu} from "./Left-menu";
import {CenterContent} from "./Center-content";
import {RightSide} from "./Right-side";


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        flexWrap: 'nowrap'
    },
}))







export const Home = () => {

    const classes = useStylesHome()
    return (
        <Grid container className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'}>
            <LeftMenu/>
            <CenterContent/>
            <RightSide/>
        </Grid>
    )
}