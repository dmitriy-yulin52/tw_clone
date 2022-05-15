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
    Paper, TextField, Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from "@material-ui/icons/Search";

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
    }
}))

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            backgroundColor: '#E6ECF0',
            padding: '0px 0px 0px 15px',
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {
                    borderWidth: 1, borderColor: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                },
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent'
                }
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1
            }
            ,
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px'
        },
    }
}))(TextField)


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
        <Box marginTop={'32px'}>
            <SearchTextField
                variant={'outlined'}
                placeholder={'Поиск в Твиттере'}
                inputProps={{
                    startAdornment: (
                        <InputAdornment position="start"><SearchIcon/></InputAdornment>
                    ),
                }}
                fullWidth
            />
        </Box>
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
                    headerButton={<IconButton color={"primary"}
                                              style={iconButtonPadding}><PersonAddIcon/></IconButton>}/>
            )}
        </Paper>
    </Box>
}