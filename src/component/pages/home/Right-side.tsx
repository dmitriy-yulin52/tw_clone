import * as React from 'react'
import {ReactElement} from 'react'
import {
    Box,
    createStyles,
    Grid,
    InputAdornment,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";

const RightSideStyles = makeStyles((theme) => ({
    wrapperRightBlock: {
        flexBasis: '300px',
        marginLeft: theme.spacing(4),
        '@media (max-width: 1050px)': {
            display: 'none'
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
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        backgroundColor: '#f7f9f9',
        marginTop: theme.spacing(3)
    },
    paperHeader: {
        padding: '18px',
        backgroundColor: '#f7f9f9',
    }
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


export const RightSide = function RightSide(): ReactElement {

    const classes = RightSideStyles()

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
}