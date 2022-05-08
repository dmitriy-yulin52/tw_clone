import * as React from 'react'
import {ReactElement} from "react";
import {createStyles, Grid, InputBase, makeStyles, withStyles} from "@material-ui/core";



const RightSideStyles = makeStyles(()=>({
    wrapperRightBlock: {
        flexBasis: '300px',
        '@media (max-width: 1050px)': {
            display: 'none'
        }
    }
}))

const SearchTextField = withStyles((theme) => createStyles({
    input: {
        borderRadius: '30px',
        backgroundColor: '#E6ECF0',
        padding: 0,
        height: '35px'
    }
}))(InputBase)


export const RightSide = function RightSide():ReactElement{

    const classes = RightSideStyles()

    return <Grid item className={classes.wrapperRightBlock}>
                <SearchTextField fullWidth/>
            </Grid>
}