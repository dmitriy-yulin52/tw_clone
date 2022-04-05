import * as React from 'react'
import {createStyles, makeStyles, Typography} from "@material-ui/core";
import classNames from "classnames";


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display:'flex',
        height:'100%'
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
                    <li>Узнайте, о чем говорят в мире.</li>
                    <li>Присоединяйтесь к общению.</li>
                </ul>
            </div>
            <div className={classNames(classes.loginSide)}></div>
        </div>
    )
}