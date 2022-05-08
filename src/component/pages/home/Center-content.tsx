import * as React from 'react'
import {ReactElement} from "react";
import {Avatar, Box, Grid, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";


const CenterContentStyles = makeStyles(() => ({
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

    },
    tweetsWrapperItemIcon: {
        flexGrow: 1,
    },
    tweetsWrapperCommitIcon: {
        '&:hover': {
            filter: 'invert(52%) sepia(52%) saturate(3103%) hue-rotate(177deg) brightness(100%) contrast(92%)'
        },
        '& span': {
            cursor: 'pointer'
        }
    },
    tweetsWrapperRepeatIcon: {
        '&:hover': {
            filter: 'invert(53%) sepia(17%) saturate(6503%) hue-rotate(59deg) brightness(102%) contrast(98%)'
        },
        '& span': {
            cursor: 'pointer'
        }
    },
    tweetsWrapperLikeIcon: {
        '&:hover': {
            filter: 'invert(15%) sepia(95%) saturate(4053%) hue-rotate(329deg) brightness(91%) contrast(113%)'
        },
        '& span': {
            cursor: 'pointer'
        }
    },
    tweets:{
        flexBasis: '600px'
    }
}))


const typographyMargin = {
    marginRight:'8px'
} as const

export const CenterContent = function CenterContent(): ReactElement {


    const classes = CenterContentStyles()

    return <Grid item className={classes.tweets}>
        <Paper className={classes.tweetsWrapper} variant={'outlined'}>
            <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                <Typography variant={'h6'} color={'primary'}>Home</Typography>
            </Paper>
            <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                <Grid container wrap={'nowrap'} spacing={1}>
                    <Grid item className={classes.tweetsWrapperItemIcon}>
                        <Avatar alt="user"
                                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    </Grid>
                    <Grid item>
                        <Box display={'flex'}>
                            <Typography color={'primary'} style={typographyMargin}>hi,di</Typography>
                            <Typography color={'secondary'}>@mail</Typography>
                        </Box>
                        <Box>
                            <Typography variant={'body1'} color={'textPrimary'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem
                                ducimus impedit maiores molestiae nemo nesciunt nisi non officia
                                perspiciatis praesentium, quae quasi quidem similique sit! Commodi qui quia
                                sequi.
                            </Typography>
                        </Box>
                        <Box marginTop={'8px'}>
                            <Grid container spacing={4}>
                                <Grid item>
                                    <Box className={classes.tweetsWrapperCommitIcon} display={'flex'}
                                         alignItems={'center'}>
                                        <IconButton>
                                            <ChatBubbleOutlineIcon/>
                                        </IconButton>
                                        <Typography component={'span'}>14</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display={'flex'}
                                         alignItems={'center'}
                                         className={classes.tweetsWrapperRepeatIcon}
                                    >
                                        <IconButton>
                                            <RepeatIcon/>
                                        </IconButton>
                                        <Typography component={'span'}>14</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        className={classes.tweetsWrapperLikeIcon}
                                    >
                                        <IconButton>
                                            <FavoriteBorderIcon/>
                                        </IconButton>
                                        <Typography component={'span'}>14</Typography>

                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display={'flex'}
                                         alignItems={'center'}
                                         className={classes.tweetsWrapperCommitIcon}
                                    >
                                        <IconButton>
                                            <OpenInBrowserIcon/>
                                        </IconButton>
                                        <Typography component={'span'}>14</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    </Grid>
}