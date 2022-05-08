import * as React from 'react'
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {LeftMenu} from "./Left-menu";
import {TweetsContent} from "./Tweets-content";
import {RightSide} from "./Right-side";


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        flexWrap: 'nowrap'
    },
    tweets: {
        flexBasis: '600px',
        overflow:'auto',
        scrollbarWidth:'none'
    },
    tweetsWrapper: {
        height: '100%',
        borderTop: 'none',
        borderBottom: 'none',
    },
    tweetsWrapperHeader: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '15px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer'
        }
    },
}))

const user = {
    fullName: '@mail.ru',
    userName: 'Dmitriy',
    avatarUrl: 'https://jooinn.com/images/man-standing-on-street.jpg'
}


export const Home = () => {

    const classes = useStylesHome()
    return (
        <Grid container className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'}>
            <LeftMenu/>
            <Grid item className={classes.tweets}>
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                        <Typography variant={'h6'} color={'primary'}>Home</Typography>
                    </Paper>
                    {new Array(20).fill(<Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                        <TweetsContent text={'str'} user={user}/>
                    </Paper>)}
                </Paper>
            </Grid>

            <RightSide/>
        </Grid>
    )
}