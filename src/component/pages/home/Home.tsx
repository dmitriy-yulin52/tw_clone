import * as React from 'react'
import {Container, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


export const useStylesHome = makeStyles((theme) => ({
    homeWrapper: {
        height: '100%'
    },
    list: {
        listStyle: 'none',
        // padding:0,
        '& li': {
            '& button': {
                '&:hover': {
                    '& svg': {
                        filter: 'invert(117%) sepia(280%) saturate(430%) hue-rotate(152deg) brightness(102%) contrast(100%)'
                    }
                },
                '& span': {
                    fontWeight: 700,
                    color: 'black'
                },
                borderRadius: '30px',
                '& svg': {
                    marginRight: theme.spacing(2),
                    filter: 'invert(121%) hue-rotate(136deg) brightness(9%) contrast(72%)',
                }
            },
        }
    }

}))


const twitterFilter = {
    filter: 'none',
    marginRight:'0px'
} as const

export const Home = () => {

    const classes = useStylesHome()

    return (
        <Container maxWidth={"xl"} className={classes.homeWrapper}>
            <Grid container  className={classes.homeWrapper}>
                <Grid item style={{backgroundColor: 'white'}} xs={2}>
                    <ul className={classes.list}>
                        <li>
                            <IconButton>
                                <TwitterIcon color={'primary'} fontSize={'large'} style={twitterFilter}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <HomeIcon color={'secondary'} fontSize={'large'}/>
                                <Typography variant={'h5'} component={'span'}>Home</Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <SearchIcon color={'secondary'} fontSize={'large'}/>
                                <Typography variant={'h5'} component={'span'}>Explore</Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <NotificationsNoneIcon color={'secondary'} fontSize={'large'}
                                />
                                <Typography variant={'h5'} component={'span'}>Notifications</Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <MailOutlineIcon color={'secondary'} fontSize={'large'}
                                />
                                <Typography variant={'h5'} component={'span'}>Messages</Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <BookmarkBorderIcon color={'secondary'} fontSize={'large'}
                                />
                                <Typography variant={'h5'} component={'span'}>Bookmarks</Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <ListAltIcon color={'secondary'} fontSize={'large'}
                                />
                                <Typography variant={'h5'} component={'span'}>Lists</Typography>

                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <PersonOutlineIcon color={'secondary'} fontSize={'large'}
                                />
                                <Typography variant={'h5'} component={'span'}>Profile</Typography>
                            </IconButton>
                        </li>
                    </ul>
                </Grid>
                <Grid item style={{backgroundColor: 'green'}} xs={6}></Grid>
                <Grid item style={{backgroundColor: 'blue'}} xs={3}></Grid>
            </Grid>
        </Container>
    )
}