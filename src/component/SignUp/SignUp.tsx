import * as React from 'react'
import {memo, ReactElement} from "react";
import {TextField} from "@material-ui/core";
import {MaterialDialog} from "../../utils/components-utils";




type SignUpProps = {
    openSignUp:boolean
    setCloseSignUp:()=>void
}

export const SignUp = memo((props:SignUpProps): ReactElement => {

    const {openSignUp,setCloseSignUp}=props

    return (
        <MaterialDialog
            open={openSignUp} closeDialog={setCloseSignUp}
            label={'Создайте учетную запись'}
            labelButton={'Регистрация'}
        >
            <TextField
                size={'medium'}
                autoFocus
                margin={'dense'}
                id={'name'}
                label={'Имя'}
                type={'name'}
                variant={'filled'}
                fullWidth
            />
            <TextField
                size={'medium'}
                autoFocus
                margin={'dense'}
                id={'email'}
                label={'E-mail'}
                type={'email'}
                variant={'filled'}
                fullWidth
            />
            <TextField
                autoFocus
                margin={'dense'}
                id={'password'}
                label={'Пароль'}
                type={'password'}
                variant={'filled'}
                fullWidth
            />
        </MaterialDialog>
    )
})