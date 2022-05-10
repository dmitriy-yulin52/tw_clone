import * as React from 'react'
import {ReactElement} from 'react'
import {
    Box,
    createStyles,
<<<<<<< Updated upstream
    Grid,
=======
    IconButton,
>>>>>>> Stashed changes
    InputAdornment,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
<<<<<<< Updated upstream
=======
import {MaterialBlock} from "../../../utils/components-utils";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    }
=======
    },
>>>>>>> Stashed changes
}))

const SearchTextField = withStyles((theme) => createStyles({
    input: {
        borderRadius: '30px',
        backgroundColor: '#E6ECF0',
        padding: '8px 8px 8px 16px',
        height: '35px',
        marginTop: '8px',
        '&:focus':{
            backgroundColor:'#fff',
            border:'1px solid #1da1f2'
        }
    }
}))(InputBase)

<<<<<<< Updated upstream
=======
const iconButtonPadding = {
    padding: '5px'
} as const

const headerTitle = {
    userName: 'Кого читать',
} as const
>>>>>>> Stashed changes

export const RightSide = function RightSide(): ReactElement {

    const classes = RightSideStyles()

<<<<<<< Updated upstream
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
            <Box>
                <Paper className={classes.paperWrapper}>
                    <Paper className={classes.paperHeader}>
                        <Typography variant={'h6'}>Кого Прочитать</Typography>
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