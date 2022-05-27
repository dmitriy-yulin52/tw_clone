import * as React from 'react'
import {memo, ReactElement, useEffect, MouseEvent, useCallback} from 'react'
import {Box, IconButton, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {LeftMenu} from "./Left-menu";
import {RightSide} from "./Right-side";
import {TweetsContent} from "./Tweets-content";
import {TweetsForm} from "../../TweetsForm/TweetsForm";
import {useAction} from "../../../utils/hook-utils";
import {fetchTweets} from "../../../store/reducers/ducks/tweets/actions";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../../store/reducers/ducks/tweets/selectors";
import {Tweet} from "../../../store/reducers/ducks/tweets/types";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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
    display:'flex',
    alignItems:'center'
}as const


const paddingIcon = {
    padding:0
}as const

export const Home = memo((): ReactElement => {
    const classes = useStylesHome()

    const history = useNavigate()


    const onClickBack:()=>void = useCallback(()=> {
        history('/home');
    },[history])


    const tweets: Tweet[] = useSelector(selectTweetsItems)
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
                        <Paper variant={'outlined'} className={classes.tweetsWrapperHeader} style={header}>
                            <Routes>
                                <Route path={'/home'} element={<><Typography variant={'h6'}
                                                                             color={'primary'}>Главная</Typography></>}/>
                            </Routes>
                            <Routes>
                                <Route path={'/home/tweet:id'} element={<IconButton onClick={onClickBack} color={'primary'} style={paddingIcon}>
                                    <ArrowBackIcon />
                                </IconButton>}/>
                            </Routes>
                            <Routes>
                                <Route path={'/home/tweet:id'} element={<Box marginLeft={'8px'}><Typography variant={'h6'}
                                                                                      color={'primary'}>Твитнуть</Typography></Box>}/>
                            </Routes>
                        </Paper>
                        <Routes>
                            <Route path={'/home'} element={<>
                                <Paper variant={'outlined'} className={classes.tweetsForm}>
                                    <TweetsForm user={user}/>
                                </Paper>
                            </>}>
                            </Route>
                        </Routes>
                        <Routes>
                            <Route path={'/home/*'} element={<Box marginTop={'8px'}>
                                {isLoading ? (
                                    <Box><LinearProgress color="primary"/></Box>) : tweets.map((tweet, index) => (
                                    <Paper key={tweets.length - index} variant={'outlined'}
                                           className={classes.tweetsWrapperHeader}>
                                        <Link to={`/home/tweet${tweet.id}`} className={classes.link}>
                                            <TweetsContent text={tweet.text} tweet={tweet}/>
                                        </Link>
                                    </Paper>
                                ))}
                            </Box>}>
                            </Route>
                        </Routes>
                    </Paper>
                </Box>
            </Box>
            <RightSide/>
        </Box>
    )
})