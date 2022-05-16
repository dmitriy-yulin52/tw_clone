import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Box, Button} from "@material-ui/core";
import {MaterialDialog, MaterialTextField} from "../../utils/components-utils";


type SignUpProps = {
    openSignUp: boolean
    setCloseSignUp: () => void
}

export const SignUp = memo((props: SignUpProps): ReactElement => {

    const {openSignUp, setCloseSignUp} = props

    return (
        <MaterialDialog
            open={openSignUp} closeDialog={setCloseSignUp}
            label={'Создайте учетную запись'}
            actionButton={<Button color={'primary'} variant={'contained'}>Регистрация</Button>}
        >
            <Box display={'flex'} flexDirection={'column'}>
                <MaterialTextField
                    size={'medium'}
                    value={''}
                    onChange={() => {
                    }}
                    id={'name'}
                    label={'Имя'}
                    type={'name'}
                    autoFocus
                    variant={'outlined'}
                />
                <MaterialTextField
                    value={''}
                    onChange={() => {
                    }}
                    size={'medium'}
                    id={'email'}
                    label={'E-mail'}
                    type={'email'}
                    autoFocus
                    variant={'outlined'}
                />
                <MaterialTextField
                    value={''}
                    onChange={() => {
                    }}
                    size={'medium'}
                    id={'password'}
                    label={'Пароль'}
                    autoFocus
                    variant={'outlined'}
                />
            </Box>
        </MaterialDialog>
    )
})