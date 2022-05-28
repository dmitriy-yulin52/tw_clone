import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Button, Grid, Hidden, IconButton, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CreateIcon from '@material-ui/icons/Create';
import {useBooleanState} from "../../../utils/hook-utils";
import {TweetsDialog} from "../../TweetsDialog/TweetsDialog";
import {TweetsForm} from "../../TweetsForm/TweetsForm";
import {Link,NavLink, Outlet} from 'react-router-dom'

const leftMenuStyles = makeStyles((theme) => ({
    WrapperLeftBlock: {
        position: 'sticky',
        top: 0,
        flexShrink: 1,
        "@media (max-width: 1300px)": {
            flexBasis: '100px',
        },
        "@media (max-width: 750px)": {
            flexBasis: '80px',
        }
    },
    list: {
        listStyle: 'none',
        marginTop:0,
        paddingTop:0,
        padding: '8px',
        marginRight: theme.spacing(4),
        '@media (max-width: 1300px)': {
            marginRight: theme.spacing(0)
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

const user = {
    fullName: '@mail.ru',
    userName: 'Dmitriy',
    avatarUrl: 'https://jooinn.com/images/man-standing-on-street.jpg'
} as const


export const LeftMenu = memo(function LeftMenu(): ReactElement {

    const classes = leftMenuStyles()

    const [openDialog, setCloseDialog, setOpenDialog] = useBooleanState(false)


    return <>
        <Grid item className={classes.WrapperLeftBlock}>
            <ul className={classes.list}>
                <li>
                    <Link to={'/'}>
                        <IconButton>
                            <TwitterIcon color={'primary'} fontSize={'large'} style={twitterFilter}/>
                        </IconButton>
                    </Link>
                </li>
                <li>
                     <NavLink to={'home'} style={{textDecoration:'none'}}>
                        <IconButton>
                        <HomeIcon fontSize={'large'}/>
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}
                            >Home</Typography>
                        </Hidden>
                    </IconButton>
                    </NavLink>

                </li>
                <li>
                    <IconButton>
                        <SearchIcon fontSize={'large'}/>
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Explore</Typography>
                        </Hidden>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <NotificationsNoneIcon fontSize={'large'}
                        />
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Notifications</Typography>
                        </Hidden>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <MailOutlineIcon fontSize={'large'}
                        />
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Messages</Typography>
                        </Hidden>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <BookmarkBorderIcon fontSize={'large'}
                        />
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Bookmarks</Typography>

                        </Hidden>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <ListAltIcon fontSize={'large'}
                        />
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Lists</Typography>
                        </Hidden>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <PersonOutlineIcon fontSize={'large'}
                        />
                        <Hidden smDown mdDown>
                            <Typography variant={'h5'} component={'span'}>Profile</Typography>
                        </Hidden>
                    </IconButton>
                </li>
                <div>
                    <Button fullWidth color={'primary'} variant={'contained'} onClick={setOpenDialog}>
                        <Hidden smDown>Твитнуть</Hidden>
                        <Hidden mdUp><CreateIcon/></Hidden>
                    </Button>
                </div>
            </ul>
        </Grid>
        <TweetsDialog open={openDialog} closeDialog={setCloseDialog}>
            <TweetsForm user={user}/>
        </TweetsDialog>

    </>
})