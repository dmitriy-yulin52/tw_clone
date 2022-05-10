import * as React from 'react'
import {Box, Button, IconButton, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {LeftMenu} from "./Left-menu";
import {RightSide} from "./Right-side";
import {TweetsContent} from "./Tweets-content";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import PermMediaIcon from '@material-ui/icons/PermMedia';
<<<<<<< Updated upstream
=======
import {MaterialBlock} from "../../../utils/components-utils";
import {memo, ReactElement} from "react";
>>>>>>> Stashed changes


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        display:'flex',
        flexWrap: 'nowrap',
        overflow:'hidden'
    },
    tweets: {
        flexBasis: '600px',
        flexGrow:1,
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
}as const


export const Home = memo(():ReactElement => {
    const classes = useStylesHome()
    return (
        <Box className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'}>
            <LeftMenu/>
<<<<<<< Updated upstream
            <Grid item className={classes.tweets}>
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                        <Typography variant={'h6'} color={'primary'}>Home</Typography>

                    </Paper>
                    <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>

                        <Grid container spacing={2} style={{flexWrap: 'nowrap'}}>
                            <Grid item style={{flexBasis: '55px'}}>
                                <Avatar alt={`Аватар пользователя ${user.fullName}`}
                                        src={user.avatarUrl}/>
                            </Grid>
                            <Grid item style={{flexGrow: '1'}}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    <TextField placeholder={'Что происходит?'} variant={'standard'} size={'medium'} multiline/>
=======
            <Box display={'flex'} flexBasis={'900px'} overflow={'auto'}>
                <Box className={classes.tweets}>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                            <Typography variant={'h6'} color={'primary'}>Home</Typography>
                        </Paper>
                        <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                            <MaterialBlock avatarUrl={user.avatarUrl}>
                                <Box display={'flex'} flexDirection={'column'}>
                                    <TextField placeholder={'Что происходит?'} variant={'standard'} size={'medium'}
                                               multiline/>
>>>>>>> Stashed changes
                                    <Box display={'flex'} marginTop={'32px'} justifyContent={'space-between'}>
                                        <Box display={'flex'}>
                                            <IconButton color={'primary'}>
                                                <PermMediaIcon/>
                                            </IconButton>
                                            <IconButton color={'primary'}>
                                                <SentimentSatisfiedIcon/>
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            <Button variant={'contained'} color={'primary'}>Твитнуть</Button>
                                        </Box>
                                    </Box>
                                </Box>
<<<<<<< Updated upstream
                            </Grid>
                        </Grid>


=======
                            </MaterialBlock>
                        </Paper>
                        {new Array(20).fill(<Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                            <TweetsContent text={'str'} user={user}/>
                        </Paper>)}
>>>>>>> Stashed changes
                    </Paper>
                </Box>
                <RightSide/>
            </Box>
        </Box>
    )
})