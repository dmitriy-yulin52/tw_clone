import * as React from 'react'
import {
    Avatar,
    Box,
    createStyles,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%',
        flexWrap: 'nowrap'
    },
    WrapperLeftBlock: {
        flexBasis: '300px',
        flexShrink: 0,
        "@media (max-width: 1300px)": {
            flexBasis: '100px',
        }
    },
    list: {
        listStyle: 'none',
        marginRight: theme.spacing(3),
        '@media (max-width: 1050px)': {
            paddingLeft: '10px'
        },
        '& li': {
            '& button': {
                marginBottom: theme.spacing(2),
                borderRadius: '30px',
                '&:hover': {
                    '& svg': {
                        filter: 'invert(52%) sepia(52%) saturate(3103%) hue-rotate(177deg) brightness(100%) contrast(92%)'
                    }
                },
                '& span': {
                    fontWeight: 700,
                    color: 'black',
                    "@media (max-width: 1300px)": {
                        '& span': {
                            display: 'none'
                        }
                    },
                },
                '& svg': {
                    marginRight: theme.spacing(2),
                    filter: 'invert(121%) hue-rotate(136deg) brightness(9%) contrast(72%)',
                },
                '@media (max-width: 1300px)': {
                    '& svg': {
                        marginRight: '0px'
                    }
                }
            },
        }
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
    },tweetsWrapperRepeatIcon: {
        '&:hover': {
            filter: 'invert(53%) sepia(17%) saturate(6503%) hue-rotate(59deg) brightness(102%) contrast(98%)'
        },
        '& span': {
            cursor: 'pointer'
        }
    },
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


const twitterFilter = {
    filter: 'none',
    marginRight: '0px'
} as const

export const Home = () => {

    const classes = useStylesHome()


    return (
        <Grid container className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'}>
            <Grid item className={classes.WrapperLeftBlock}>
                <ul className={classes.list}>
                    <li>
                        <IconButton>
                            <TwitterIcon color={'primary'} fontSize={'large'} style={twitterFilter}/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <HomeIcon fontSize={'large'}/>
                            <Typography variant={'h5'} component={'span'}
                            >Home</Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <SearchIcon fontSize={'large'}/>
                            <Typography variant={'h5'} component={'span'}>Explore</Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <NotificationsNoneIcon fontSize={'large'}
                            />
                            <Typography variant={'h5'} component={'span'}>Notifications</Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <MailOutlineIcon fontSize={'large'}
                            />
                            <Typography variant={'h5'} component={'span'}>Messages</Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <BookmarkBorderIcon fontSize={'large'}
                            />
                            <Typography variant={'h5'} component={'span'}>Bookmarks</Typography>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <ListAltIcon fontSize={'large'}
                            />
                            <Typography variant={'h5'} component={'span'}>Lists</Typography>

                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <PersonOutlineIcon fontSize={'large'}
                            />
                            <Typography variant={'h5'} component={'span'}>Profile</Typography>
                        </IconButton>
                    </li>
                </ul>
            </Grid>
            <Grid item style={{flexBasis: '600px'}}>
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
                                    <Typography color={'primary'} style={{marginRight: '8px'}}>hi,di</Typography>
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
                                <Box>
                                    <Grid container>
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
                                            <Box display={'flex'}
                                                 alignItems={'center'}>
                                                <IconButton>
                                                    <RepeatIcon/>
                                                </IconButton>
                                                <Typography component={'span'}>14</Typography>

                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box display={'flex'}
                                                 alignItems={'center'}>
                                                <IconButton>
                                                    <RepeatIcon/>
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
            <Grid item className={classes.wrapperRightBlock}>
                <SearchTextField fullWidth/>
            </Grid>
        </Grid>
    )
}