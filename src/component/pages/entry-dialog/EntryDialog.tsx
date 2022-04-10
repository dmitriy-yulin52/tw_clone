import * as React from 'react'
import {memo,ReactElement} from 'react'
import {
    Button,
    Checkbox, Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormGroup, FormLabel,
    IconButton, Radio,
    TextField, Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


interface EntryDialogProps {
    open:boolean
    closeDialog:()=>void
}


export const EntryDialog = memo(function EntryDialog(props:EntryDialogProps):ReactElement{
    const {open,closeDialog} = props


  return(
      <Dialog open={open} onBlur={closeDialog}>
                        <DialogTitle>
                            <IconButton
                                onClick={() => {
                                }}
                                color={'primary'}
                                aria-label={'close'}
                                className={''}
                            >
                                <CloseIcon onClick={closeDialog} color={'primary'}/>
                            </IconButton>
                            Настройка поиска
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom variant={'h6'}>
                                Войти в Твиттер
                            </Typography>
                            <FormControl component={'fieldset'} fullWidth>
                                <FormGroup aria-label={'position'} row>
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
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                            }} color={'primary'} variant={'contained'}>Cancel</Button>
                            <Button onClick={() => {
                            }} variant={'contained'}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
  )
})