import * as React from 'react'
import {ReactElement} from "react";
import {Button, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const leftMenuStyles = makeStyles((theme) => ({
    WrapperLeftBlock: {
        flexBasis: '300px',
        flexShrink: 0,
        "@media (max-width: 1300px)": {
            flexBasis: '100px',
        },
        "@media (max-width: 750px)": {
            flexBasis: '80px',
        }
    },
    list: {
        listStyle: 'none',
        marginRight: theme.spacing(3),
        '@media (max-width: 1050px)': {
            paddingLeft: '10px'
        },
        '@media (max-width: 700px)': {
            marginRight: '0px'
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
                },

            },
        }
    },
}))

const twitterFilter = {
    filter: 'none',
    marginRight: '0px'
} as const

export const LeftMenu = function LeftMenu(): ReactElement {

    const classes = leftMenuStyles()

    return <Grid item className={classes.WrapperLeftBlock}>
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
            <div>
                <Button fullWidth color={'primary'} variant={'contained'}>Tweets</Button>
            </div>
        </ul>
    </Grid>
}