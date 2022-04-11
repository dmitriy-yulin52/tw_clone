import * as React from 'react'
import {memo, ReactElement} from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    IconButton, makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


interface EntryDialogProps {
    open: boolean
    closeDialog: () => void
}


const useStylesEntryDialog = makeStyles((theme)=>({
    dialogTitle:{
        display:'flex',
        alignItems:'center'
    }
}))


export const EntryDialog = memo(function EntryDialog(props: EntryDialogProps) {
    const {open, closeDialog} = props


    const classes = useStylesEntryDialog()
    return (
        <div>
            <Dialog open={open}>
                <DialogTitle className={classes.dialogTitle}>
                    <IconButton
                        onClick={closeDialog}
                        color={'primary'}
                        aria-label={'close'}
                        className={''}
                    >
                        <CloseIcon color={'primary'}/>
                    </IconButton>
                    <Typography gutterBottom variant={'h6'}>
                        Войти в Твиттер
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin={'dense'}
                        id={'email'}
                        label={'E-mail'}
                        type={'email'}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin={'dense'}
                        id={'password'}
                        label={'Пароль'}
                        type={'password'}
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color={'primary'} variant={'contained'}>Cancel</Button>
                    <Button variant={'contained'}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
})