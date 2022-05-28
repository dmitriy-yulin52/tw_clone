import * as React from 'react'
import {memo, ReactElement, useMemo} from 'react'
import {Box, Grid, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import classNames from "classnames";
import {MaterialBlock, PopoverDialogType} from "../../../utils/components-utils";
import {preventDefault} from "../../../utils/hook-utils";
import {Tweet} from "../../../store/reducers/ducks/tweets/types";
import {Link} from "react-router-dom";
import {PopoverDialog} from "../../popoverDialog/PopoverDialog";
import {ChildrenPopover} from "../../popoverDialog/ChildrenPopover";


export const TweetsContentStyles = makeStyles((theme) => ({
    tweetsWrapperContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    tweetsWrapperItemIcon: {
        flexBasis: '55px',
    },
    tweetsWrapperCommitIcon: {
        '&:hover': {
            filter: 'invert(52%) sepia(52%) saturate(3103%) hue-rotate(177deg) brightness(100%) contrast(92%)'
        },

    },
    tweetsWrapperRepeatIcon: {
        '&:hover': {
            filter: 'invert(53%) sepia(17%) saturate(6503%) hue-rotate(59deg) brightness(102%) contrast(98%)'
        },

    },
    tweetsWrapperLikeIcon: {
        '&:hover': {
            filter: 'invert(15%) sepia(95%) saturate(4053%) hue-rotate(329deg) brightness(91%) contrast(113%)'
        },

    },
    tweets: {
        flexBasis: '600px',
        flexGrow: 1
    },
    tweetsWrapperBox: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        '& button': {
            marginRight: theme.spacing(1),
            padding: '0px'
        }
    },
    tweetsWrapperIconButton: {
        marginRight: theme.spacing(1)
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
    link: {
        textDecoration: 'none'
    }


}))

const gridPadding = {
    padding: '0px'
} as const


interface TweetBlockProps {
    text: string
    tweet: {
        id: string,
        text: string
        user: {
            fullName: string
            userName: string
            avatarUrl: string
        }
    }
}

interface TweetsContentProps {
    tweets: Tweet[]
}

export const TweetsContent = memo((props: TweetsContentProps) => {

    const {tweets} = props
    const classes = TweetsContentStyles()

    return <>
        {tweets.map((tweet, index) => (
            <Paper key={tweets.length - index} variant={'outlined'}
                   className={classes.tweetsWrapperHeader}>
                <Link to={`tweet${tweet.id}`} className={classes.link}>
                    <TweetBlock text={tweet.text} tweet={tweet}/>
                </Link>
            </Paper>
        ))}
    </>
})


type TweetToTransform = Omit<Tweet, 'id' | 'text'>
type TransformToTweet = {
    status?: string,
    readers?: number,
    in_readable?: number,
    fullName?: string
    userName?: string
    avatarUrl?: string
}


function transform_tweet(tweet: TweetToTransform, status?: string, readers?: number, in_readable?: number): TransformToTweet{
    const {user} = tweet

    const {fullName, userName, avatarUrl} = user
    return {
        status,
        fullName,
        userName,
        avatarUrl,
        readers,
        in_readable
    }
}


export const TweetBlock = memo(function Tweet(props: TweetBlockProps): ReactElement {

    const {text, tweet} = props
    const classes = TweetsContentStyles()

    const props_children:TransformToTweet = transform_tweet(tweet)
    const memomize_popover_dialog = useMemo(() => {

        const popover_dialog_for_tweet_block: PopoverDialogType<TransformToTweet> = {
            Component: PopoverDialog,
            children: ChildrenPopover,
            propsChildren: props_children,
            showPopover: true
        }
        return popover_dialog_for_tweet_block
    }, [PopoverDialog, ChildrenPopover, tweet, props_children])


    return <MaterialBlock popoverDialog={memomize_popover_dialog} styleFullname fullName={tweet.user.fullName}
                          userName={tweet.user.userName}
                          avatarUrl={tweet.user.avatarUrl}>
        <Box marginRight={'8px'}>
            <Typography variant={'body1'} color={'textPrimary'}>
                {text}
            </Typography>
        </Box>
        <Box marginTop={'16px'}>
            <Grid container spacing={1} className={classes.tweetsWrapperContent}>
                <Grid item style={gridPadding}>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        className={classNames(classes.tweetsWrapperCommitIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton onClick={preventDefault}>
                            <ChatBubbleOutlineIcon/>
                            <Box fontSize={'14px'}>12</Box>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box display={'flex'}
                         alignItems={'center'}
                         className={classNames(classes.tweetsWrapperRepeatIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton onClick={preventDefault}>
                            <RepeatIcon/>
                            <Box fontSize={'14px'}>12</Box>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        className={classNames(classes.tweetsWrapperLikeIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton onClick={preventDefault}>
                            <FavoriteBorderIcon/>
                            <Box fontSize={'14px'}>12</Box>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box display={'flex'}
                         alignItems={'center'}
                         className={classNames(classes.tweetsWrapperCommitIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton onClick={preventDefault}>
                            <OpenInBrowserIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </MaterialBlock>


})