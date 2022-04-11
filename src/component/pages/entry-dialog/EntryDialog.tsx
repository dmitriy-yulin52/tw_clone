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
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


interface EntryDialogProps {
    open: boolean
    closeDialog: () => void
}


export const EntryDialog = memo(function EntryDialog(props: EntryDialogProps) {
    const {open, closeDialog} = props


    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <IconButton
                        onClick={closeDialog}
                        color={'primary'}
                        aria-label={'close'}
                        className={''}
                    >
                        <CloseIcon color={'primary'}/>
                    </IconButton>
                    Настройка поиска
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom variant={'h6'}>
                        Войти в Твиттер
                    </Typography>
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
                                    id={'email'}
                                    label={'E-mail'}
                                    type={'email'}
                                    fullWidth
                                />
                        {/*<FormControl component={'fieldset'} fullWidth>*/}
                        {/*    <FormGroup aria-label={'position'} row>*/}
                        {/*        <TextField*/}
                        {/*            autoFocus*/}
                        {/*            margin={'dense'}*/}
                        {/*            id={'email'}*/}
                        {/*            label={'E-mail'}*/}
                        {/*            type={'email'}*/}
                        {/*            fullWidth*/}
                        {/*        />*/}
                        {/*        <TextField*/}
                        {/*            autoFocus*/}
                        {/*            margin={'dense'}*/}
                        {/*            id={'email'}*/}
                        {/*            label={'E-mail'}*/}
                        {/*            type={'email'}*/}
                        {/*            fullWidth*/}
                        {/*        />*/}
                        {/*    </FormGroup>*/}
                        {/*</FormControl>*/}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color={'primary'} variant={'contained'}>Cancel</Button>
                    <Button variant={'contained'}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
})