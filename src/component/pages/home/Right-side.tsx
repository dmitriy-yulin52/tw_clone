import * as React from 'react'
import {ReactElement} from 'react'
import {
    Box,
    createStyles,
<<<<<<< HEAD
<<<<<<< Updated upstream
    Grid,
=======
    IconButton,
>>>>>>> Stashed changes
=======
    Grid, IconButton,
>>>>>>> add_component-utils
    InputAdornment,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import {MaterialBlock} from "../../../utils/components-utils";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
>>>>>>> Stashed changes
=======
import {MaterialBlock} from "../../../utils/components-utils";
import classNames from "classnames";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
>>>>>>> add_component-utils

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
<<<<<<< HEAD
<<<<<<< Updated upstream
    }
=======
    },
>>>>>>> Stashed changes
=======
    },
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


>>>>>>> add_component-utils
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

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
const iconButtonPadding = {
    padding: '5px'
} as const

const headerTitle = {
    userName: 'Кого читать',
} as const
>>>>>>> Stashed changes
=======
const typographyMargin = {
    marginRight: '8px'
} as const

const gridPadding = {
    padding: '0px'
} as const

const gridFlexGrow = {
    flexGrow: 1
} as const

>>>>>>> add_component-utils

export const RightSide = function RightSide(): ReactElement {

    const classes = RightSideStyles()

<<<<<<< HEAD
<<<<<<< Updated upstream
=======




>>>>>>> add_component-utils
    return <Grid item className={classes.wrapperRightBlock}>
        <Box>
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
            <Box>
                <Paper className={classes.paperWrapper}>
                    <Paper className={classes.paperHeader}>
                        <Typography variant={'h6'}>Актуальные темы для вас</Typography>
                    </Paper>
                    {new Array(5).fill(<Paper className={classes.paperContent}>
                        <Typography variant={'h6'}>twitter</Typography>
                        <Box> Твиттов: 16</Box>
                    </Paper>)}
                </Paper>
            </Box>

        </Box>
    </Grid>
=======

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
            {new Array(5).fill(
                <MaterialBlock
                    style
                    headerTitle={headerTitle}
                    headerButton={<IconButton color={"primary"}
                                              style={iconButtonPadding}><MoreHorizIcon/></IconButton>}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores culpa
                        doloremque exercitationem libero nisi pariatur porro ratione temporibus? Corporis culpa
                        delectus deleniti facilis ipsum nisi, quasi repellendus repudiandae vero.
                    </Typography>
                </MaterialBlock>)}
        </Paper>
    </Box>
>>>>>>> Stashed changes
}