import * as React from 'react'
import {Box, makeStyles} from "@material-ui/core";
import {Outlet} from "react-router-dom";
import {LeftMenu} from "../pages/home/Left-menu";
import {RightSide} from "../pages/home/Right-side";


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'auto'
    },
    tweets: {
        flexBasis: '600px',
        flexGrow: 1,
    },

}))

export const Content = () => {

    const classes = useStylesHome()

    return <Box className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'} overflow={'auto'}>
        <LeftMenu/>
        <Box display={'flex'} flexBasis={'600px'}>
            <Box className={classes.tweets}>
                <Outlet/>
            </Box>
        </Box>
        <RightSide/>
    </Box>
}
