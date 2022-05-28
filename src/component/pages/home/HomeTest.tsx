import * as React from 'react'
import {memo, ReactElement, useCallback, useEffect} from 'react'
import {Box, IconButton, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {TweetBlock, TweetsContent} from "./Tweets-content";
import {TweetsForm} from "../../TweetsForm/TweetsForm";
import {useAction} from "../../../utils/hook-utils";
import {fetchTweets} from "../../../store/reducers/ducks/tweets/actions";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../../store/reducers/ducks/tweets/selectors";
import {Tweet} from "../../../store/reducers/ducks/tweets/types";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


const useStylesHomeTest = makeStyles((theme) => ({
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
        // height: '100%',
        borderTop: 'none',
        borderBottom: 'none',
    },

    tweetsWrapperHeader: {

        // borderTop: 'none',
        // borderLeft: 'none',
        // borderRight: 'none',
        padding: '15px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer',
            transition: '0.5s'
        }
    },
    tweetsForm: {
        marginTop: theme.spacing(1),
        padding: '15px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer',
            transition: '0.5s'
        }
    },
    link: {
        textDecoration: 'none'
    }

}))

const user = {
    fullName: '@mail.ru',
    userName: 'Dmitriy',
    avatarUrl: 'https://jooinn.com/images/man-standing-on-street.jpg'
} as const


const header = {
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
} as const


const paddingIcon = {
    padding: 0
} as const

export const HomeTest = memo((): ReactElement => {
    const classes = useStylesHomeTest()

    const history = useNavigate()


    const onClickBack: () => void = useCallback(() => {
        history('/home');
    }, [history])
 const fetch_tweets: () => void = useAction(fetchTweets)
 const tweets: Tweet[] = useSelector(selectTweetsItems)
    useEffect(() => {
        fetch_tweets()
    }, [fetch_tweets])

    const isLoading: boolean = useSelector(selectIsTweetsLoading)


    return (
        <Paper className={classes.tweetsWrapper} variant={'outlined'}>
            <Paper variant={'outlined'} className={classes.tweetsWrapperHeader} style={header}>
                <Routes>
                    <Route index element={<><Typography variant={'h6'}
                                                        color={'primary'}>Главная</Typography></>}/>
                </Routes>
                <Routes>
                    <Route path={'tweet:id'}
                           element={<> <IconButton onClick={onClickBack} color={'primary'} style={paddingIcon}>
                               <ArrowBackIcon/>
                           </IconButton>
                               <Box marginLeft={'8px'}><Typography variant={'h6'}
                                                                   color={'primary'}>Твит</Typography>
                               </Box></>}/>
                </Routes>
            </Paper>
            <Routes>
                <Route path={'/'} element={<> <Paper variant={'outlined'} className={classes.tweetsForm}>
                    <TweetsForm user={user}/>
                </Paper></>}/>
                <Route path={'search:id'} element={<> <Paper variant={'outlined'} className={classes.tweetsForm}>
                    <TweetsForm user={user}/>
                </Paper></>}/>
            </Routes>
            <Routes>
                <Route index element={<> <Box marginTop={'8px'}>
                    {isLoading ? (
                        <Box><LinearProgress color="primary"/></Box>) : <TweetsContent tweets={tweets}/>}
                </Box></>}/>
                <Route path={'tweet:id'} element={<> <Box marginTop={'8px'}>
                    {isLoading ? (
                        <Box><LinearProgress color="primary"/></Box>) : <TweetsContent tweets={tweets}/>}
                </Box></>}/>
            </Routes>

        </Paper>
    )
})