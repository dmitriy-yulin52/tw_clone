import * as React from 'react'
import {memo, ReactElement, useEffect} from 'react'
import {Box, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {LeftMenu} from "./Left-menu";
import {RightSide} from "./Right-side";
import {TweetsContent} from "./Tweets-content";
import {TweetsForm} from "../../TweetsForm/TweetsForm";
import {useAction} from "../../../utils/hook-utils";
import {fetchTweets} from "../../../store/reducers/ducks/tweets/actions";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../../store/reducers/ducks/tweets/selectors";
import {RootState} from "../../../store/store";
import {Tweet} from "../../../store/reducers/ducks/tweets/types";
import {RightSideUsers} from "../../Right-side/Right-side-users";
import {fetchUsers} from "../../../store/reducers/ducks/users/actions";
import {fetchTags} from "../../../store/reducers/ducks/tags/actions";


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
    tweetsWrapper: {
        height: '100%',
        borderTop: 'none',
        borderBottom: 'none',
    },
    tweetsWrapperHeader: {
        borderTop: 'none',
        // borderLeft: 'none',
        // borderRight: 'none',
        padding: '15px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer',
            transition: '0.5s'
        }
    },

}))

const user = {
    fullName: '@mail.ru',
    userName: 'Dmitriy',
    avatarUrl: 'https://jooinn.com/images/man-standing-on-street.jpg'
} as const


export const Home = memo((): ReactElement => {
    const classes = useStylesHome()

    const tweets: Tweet[] = useSelector<RootState, Tweet[]>(selectTweetsItems)
    const isLoading: boolean = useSelector(selectIsTweetsLoading)
    const fetch_tweets: () => void = useAction(fetchTweets)

    useEffect(() => {
        fetch_tweets()
    }, [fetch_tweets])
    return (
        <Box className={classes.homeWrapper} alignContent={'stretch'} justifyContent={'center'} overflow={'auto'}>
            <LeftMenu/>
            <Box display={'flex'} flexBasis={'600px'}>
                <Box className={classes.tweets}>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                            <Typography variant={'h6'} color={'primary'}>Home</Typography>
                        </Paper>
                        <Paper variant={'outlined'} className={classes.tweetsWrapperHeader}>
                            <TweetsForm user={user}/>
                        </Paper>
                        {isLoading ? (<Box><LinearProgress color="primary"/></Box>) : tweets.map((user, index) => (
                            <Paper key={tweets.length - index} variant={'outlined'}
                                   className={classes.tweetsWrapperHeader}>
                                <TweetsContent text={user.text} user={user}/>
                            </Paper>
                        ))}
                    </Paper>
                </Box>
            </Box>
            <RightSide/>
        </Box>
    )
})