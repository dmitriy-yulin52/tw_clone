import * as React from 'react'
import {ReactElement} from 'react'
import {Box, Button, makeStyles, TextField, Typography} from "@material-ui/core";
import classNames from "classnames";
import TwitterIcon from '@material-ui/icons/Twitter';
import {useBooleanState} from "../../../utils/hook-utils";
import {MaterialDialog, MaterialTextField} from "../../../utils/components-utils";
import {SignUp} from "../../SignUp/SignUp";
import {Footer} from "../../footer/Footer";


export const useStylesSignIn = makeStyles((theme) => ({
    leftSide: {
        backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',
        backgroundSize: 'cover',
    },
    leftSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '60%',
        width: '60%',
        transform: 'translate(-50%,-50%)',
        filter: 'invert(101%) sepia(143%) saturate(0%) hue-rotate(103deg) brightness(187%) contrast(101%) drop-shadow(2px 4px 6px black)'
    },
    leftSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '20px',
        },
    },
    leftSideListInfoItem: {
        marginBottom: theme.spacing(4)
    },
    leftSideListInfoIcon: {
        fontSize: '32px',
        marginRight: theme.spacing(2)
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: '32px',
        margin: '20px 0px 45px 0px',
    },
    loginSideSubTitle: {
        fontWeight: 800,
        marginBottom: theme.spacing(2)
    },
    loginSideButton: {
        marginBottom: theme.spacing(2)
    },
    loginSideInput: {
        marginBottom: theme.spacing(2)
    }

}))


export const SignIn = (): ReactElement => {

    const [openSignIn, setCloseSignIn, setOpenSignIn] = useBooleanState(false)
    const [openSignUp, setCloseSignUp, setOpenSignUp] = useBooleanState(false)

    const classes = useStylesSignIn()


    return (
        <>
            <Box display={'flex'} height={'100%'}>
                <Box
                    flex={'0 0 50%'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    position={'relative'}
                    overflow={'hidden'}
                    className={classes.leftSide}
                >
                    <TwitterIcon color={'primary'} className={classes.leftSideBigIcon}/>
                </Box>
                <section className={classNames(classes.loginSide)}>
                    <Box width={'380px'}>
                        <TwitterIcon color={'primary'} className={classes.loginSideTwitterIcon}/>
                        <Typography variant={'h4'} className={classes.loginSideTitle}>Узнайте, что происходит в мире
                            прямо
                            сейчас</Typography>
                        <Typography className={classes.loginSideSubTitle}>Присоединяйтесь к Твиттеру прямо
                            сейчас!</Typography>
                        <Button variant={'contained'}
                                color={'primary'} fullWidth
                                onClick={setOpenSignUp}
                                className={classes.loginSideButton}
                        >
                            Зарегистрироваться</Button>
                        <Button onClick={setOpenSignIn} variant={'outlined'} color={'primary'} fullWidth>
                            Войти
                        </Button>
                        <Box>
                            <SignUp openSignUp={openSignUp} setCloseSignUp={setCloseSignUp}/>
                            <MaterialDialog
                                open={openSignIn}
                                closeDialog={setCloseSignIn}
                                label={'Войти в аккаунт'}
                                actionButton={<Button color={'primary'} variant={'contained'}>Войти</Button>}
                            >
                                <MaterialTextField
                                    value={''}
                                    onChange={()=>{}}
                                    id={'email'}
                                    label={'E-mail'}
                                    type={'email'}
                                    autoFocus
                                    variant={'outlined'}
                                />
                                <MaterialTextField
                                    value={''}
                                    onChange={()=>{}}
                                    id={'password'}
                                    label={'Пароль'}
                                    type={'password'}
                                    autoFocus
                                    variant={'outlined'}
                                />
                            </MaterialDialog>
                        </Box>
                    </Box>
                </section>
            </Box>
            <Footer/>
        </>
    )
}