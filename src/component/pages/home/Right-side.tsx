import * as React from 'react'
import {ReactElement} from 'react'
import {MaterialBlock} from "../../../utils/components-utils";

import {
    Box, Button,
    createStyles,
    IconButton,
    InputAdornment,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const RightSideStyles = makeStyles((theme) => ({
    wrapperRightBlock: {
        flexBasis: '300px',
        marginLeft: theme.spacing(4),
        '@media (max-width: 1050px)': {
            display: 'none'
        }
    },
    hover: {
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer'
        }
    },
    paperContent: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '15px',
        backgroundColor: '#f7f9f9',
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer'
        }
    },
    paperWrapper: {
        borderRadius: '10px',
        backgroundColor: '#f7f9f9',
        marginTop: theme.spacing(3),

    },
    paperHeader: {
        borderRadius: '10px',
        padding: '18px',
        backgroundColor: '#f7f9f9',

        //TODO
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
    }
}))

const SearchTextField = withStyles((theme) => createStyles({
    input: {
        borderRadius: '30px',
        backgroundColor: '#E6ECF0',
        padding: '8px 8px 8px 16px',
        height: '35px',
        marginTop: '8px',
        '&:focus': {
            backgroundColor: '#fff',
            border: '1px solid #1da1f2'
        }
    }
}))(InputBase)


const iconButtonPadding = {
    padding: '5px'
} as const

const headerTitleTweets = {
    userName: 'События:',
    fullName: 'Румыния'
} as const
const headerTitleRead = {
    userName: 'События:',
} as const


export const RightSide = function RightSide(): ReactElement {

    const classes = RightSideStyles()


    return <Box className={classes.wrapperRightBlock}>
        <SearchTextField
            style={{padding: '8px'}}
            fullWidth
            placeholder={'Поиск в Твиттере'}
            inputProps={{
                startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                ),
            }}
        />
        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'}>Актуальные темы для вас</Typography>
            </Paper>
            {new Array(3).fill(
                <MaterialBlock
                    style
                    headerTitle={headerTitleTweets}
                    subTitle={'Dmitriy'}
                    headerButton={<IconButton color={"primary"}
                                              style={iconButtonPadding}><MoreHorizIcon/></IconButton>}>
                    <Typography>
                        Твитов: 14
                    </Typography>
                </MaterialBlock>)}
        </Paper>

        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'}>Кого читать</Typography>
            </Paper>
            {new Array(3).fill(
                <MaterialBlock
                    style
                    avatarUrl={'https://jooinn.com/images/man-standing-on-street.jpg'}
                    headerTitle={headerTitleRead}
                    subTitle={'Dmitriy'}
                    headerButton={<Button variant={'contained'} color={"primary"}
                                              style={iconButtonPadding}>Читать</Button>}/>

                )}
        </Paper>
    </Box>
}