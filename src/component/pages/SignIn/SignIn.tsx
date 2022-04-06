import * as React from 'react'
import {Button, createStyles, makeStyles, Typography} from "@material-ui/core";
import classNames from "classnames";
import TwitterIcon from '@material-ui/icons/Twitter';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100%'
    },
    leftSide: {
        backgroundColor: '#1DA1F2'
    },
    loginSide: {},
}))


export const SignIn = () => {

    const classes = useStylesSignIn()

    return (
        <div className={classNames(classes.wrapper)}>
            <div className={classNames(classes.leftSide)}>
                <ul>
                    <li>
                        <Typography>Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li><Typography>Узнайте, о чем говорят в мире.</Typography></li>
                    <li><Typography>Присоединяйтесь к общению.</Typography></li>
                </ul>
            </div>
            <div className={classNames(classes.loginSide)}>
                <TwitterIcon/>
                <Typography>Узнайте, о чем говорят в мире.</Typography>
                <Typography>Узнайте, о чем говорят в мире.</Typography>
                <Button  variant={'contained'} color={'primary'} fullWidth>Зарегистрироваться</Button>
                <Button variant={'contained'} color={'primary'} fullWidth>Войти</Button>
            </div>
        </div>
    )
}