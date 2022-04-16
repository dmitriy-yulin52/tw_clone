import * as React from 'react'
import {Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
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
    homeWrapperIcon: {
        filter: 'invert(49%) sepia(127%) saturate(484%) hue-rotate(195deg) brightness(171%) contrast(100%)',
        '&:hover': {
            filter: 'invert(117%) sepia(280%) saturate(430%) hue-rotate(152deg) brightness(102%) contrast(100%)'
        }
    }

}))


export const Home = () => {

    const classes = useStylesHome()

    return (
        <div className={classes.homeWrapper}>
            <Grid container spacing={3} className={classes.homeWrapper}>
                <Grid item style={{backgroundColor: 'red'}} xs={2}>
                    <List>
                        <ListItem component={IconButton}>
                            <ListItemIcon>
                                    <TwitterIcon color={'primary'}/>
                            </ListItemIcon>
                            <ListItemText>Twitter</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <HomeIcon color={'primary'}/>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <SearchIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Search</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <SearchIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <SearchIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <SearchIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                    </List>
                    <ul>
                        <li>
                            <IconButton>
                                <TwitterIcon color={'primary'}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <HomeIcon color={'primary'}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <SearchIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <NotificationsNoneIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <MailOutlineIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <BookmarkBorderIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <ListAltIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <PersonOutlineIcon color={'secondary'} className={classes.homeWrapperIcon}/>
                            </IconButton>
                        </li>
                    </ul>
                </Grid>
                <Grid item style={{backgroundColor: 'green'}} xs={6}></Grid>
                <Grid item style={{backgroundColor: 'blue'}} xs={4}></Grid>
            </Grid>
        </div>
    )
}