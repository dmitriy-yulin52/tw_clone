import * as React from 'react'
import {ReactElement, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {TweetBlock, TweetsContent} from "./Tweets-content";
import {useSelector} from "react-redux";
import {selectIsTweetLoading, selectTweetData, selectTweetItems} from "../../../store/reducers/ducks/tweet/selectors";
import {useAction} from "../../../utils/hook-utils";
import {fetchTweetData} from "../../../store/reducers/ducks/tweet/actions";
import {Box, LinearProgress, makeStyles, Paper} from "@material-ui/core";
import {selectIsTweetsLoading} from "../../../store/reducers/ducks/tweets/selectors";


export const TweetStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '15px',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
            cursor: 'pointer',
            transition: '0.5s'
        }
    },

}))

export const FullTweet = (): ReactElement | null => {

    const classes = TweetStyles()

    const tweetData = useSelector(selectTweetItems)
    const {id} = useParams()
    const fetch_tweet_data = useAction(fetchTweetData)
    const isLoading: boolean = useSelector(selectIsTweetLoading)

    console.log(id, 'params')

    useEffect(() => {
        if (id) {
            fetch_tweet_data(id)
        }

    }, [fetch_tweet_data, id])

    if (!tweetData) {
        return null
    }


    return (
        <>{
            isLoading ? <Box><LinearProgress color="primary"/></Box> :
                <Paper variant={'outlined'} className={classes.wrapper}>
                    <TweetBlock tweet={tweetData}/>
                </Paper>
        }
        </>
    )
}