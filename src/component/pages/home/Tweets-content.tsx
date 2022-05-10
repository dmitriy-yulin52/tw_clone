import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Avatar, Box, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import classNames from "classnames";
import {MaterialBlock} from "../../../utils/components-utils";


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
    }


}))


const typographyMargin = {
    marginRight: '8px'
} as const

const gridPadding = {
    padding: '0px'
} as const

const gridFlexGrow = {
    flexGrow: 1
} as const

interface TweetsContentProps {
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export const TweetsContent = memo(function CenterContent(props: TweetsContentProps): ReactElement {


    const {text, user} = props


    const classes = TweetsContentStyles()

    const headerTitle = {
        userName: 'Кого читать',
        fullName: undefined
    } as const

    return <MaterialBlock headerTitle={user} avatarUrl={user.avatarUrl}>
        <Box marginRight={'8px'}>
            <Typography variant={'body1'} color={'textPrimary'}>
                {/*{text}*/}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at corporis
                distinctio dolore, dolores, ex facere ipsam ipsum iste labore molestiae mollitia odit
                quis ratione repudiandae saepe soluta veritatis.
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
                        <IconButton>
                            <ChatBubbleOutlineIcon/>
                        </IconButton>
                        <Typography component={'span'}>14</Typography>
                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box display={'flex'}
                         alignItems={'center'}
                         className={classNames(classes.tweetsWrapperRepeatIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton>
                            <RepeatIcon/>
                        </IconButton>
                        <Typography component={'span'}>14</Typography>
                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        className={classNames(classes.tweetsWrapperLikeIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton>
                            <FavoriteBorderIcon/>
                        </IconButton>
                        <Typography component={'span'}>14</Typography>

                    </Box>
                </Grid>
                <Grid item style={gridPadding}>
                    <Box display={'flex'}
                         alignItems={'center'}
                         className={classNames(classes.tweetsWrapperCommitIcon, classes.tweetsWrapperBox)}
                    >
                        <IconButton>
                            <OpenInBrowserIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </MaterialBlock>
    // return <Grid container wrap={'nowrap'} spacing={2}>
    //     <Grid item className={classes.tweetsWrapperItemIcon}>
    //         <Avatar alt={`Аватар пользователя ${user.fullName}`}
    //                 src={user.avatarUrl}/>
    //     </Grid>
    //     <Grid item style={gridFlexGrow}>
    //         <Box display={'flex'}>
    //             <Typography color={'primary'} style={typographyMargin}>{user.userName}</Typography>
    //             <Typography color={'secondary'}>{user.fullName}</Typography>
    //         </Box>
    //         <Box>
    //             <Typography variant={'body1'} color={'textPrimary'}>
    //                 {/*{text}*/}
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at corporis
    //                 distinctio dolore, dolores, ex facere ipsam ipsum iste labore molestiae mollitia odit
    //                 quis ratione repudiandae saepe soluta veritatis.
    //             </Typography>
    //         </Box>
    //         <Box marginTop={'16px'}>
    //             <Grid container spacing={1} className={classes.tweetsWrapperContent}>
    //                 <Grid item style={gridPadding}>
    //                     <Box
    //                         display={'flex'}
    //                         alignItems={'center'}
    //                         className={classNames(classes.tweetsWrapperCommitIcon, classes.tweetsWrapperBox)}
    //                     >
    //                         <IconButton>
    //                             <ChatBubbleOutlineIcon/>
    //                         </IconButton>
    //                         <Typography component={'span'}>14</Typography>
    //                     </Box>
    //                 </Grid>
    //                 <Grid item style={gridPadding}>
    //                     <Box display={'flex'}
    //                          alignItems={'center'}
    //                          className={classNames(classes.tweetsWrapperRepeatIcon, classes.tweetsWrapperBox)}
    //                     >
    //                         <IconButton>
    //                             <RepeatIcon/>
    //                         </IconButton>
    //                         <Typography component={'span'}>14</Typography>
    //                     </Box>
    //                 </Grid>
    //                 <Grid item style={gridPadding}>
    //                     <Box
    //                         display={'flex'}
    //                         alignItems={'center'}
    //                         className={classNames(classes.tweetsWrapperLikeIcon, classes.tweetsWrapperBox)}
    //                     >
    //                         <IconButton>
    //                             <FavoriteBorderIcon/>
    //                         </IconButton>
    //                         <Typography component={'span'}>14</Typography>
    //
    //                     </Box>
    //                 </Grid>
    //                 <Grid item style={gridPadding}>
    //                     <Box display={'flex'}
    //                          alignItems={'center'}
    //                          className={classNames(classes.tweetsWrapperCommitIcon, classes.tweetsWrapperBox)}
    //                     >
    //                         <IconButton>
    //                             <OpenInBrowserIcon/>
    //                         </IconButton>
    //                     </Box>
    //                 </Grid>
    //             </Grid>
    //         </Box>
    //     </Grid>
    // </Grid>

})