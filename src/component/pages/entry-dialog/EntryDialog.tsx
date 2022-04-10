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
                                {/*<CloseIcon/>*/}
                                <CloseIcon onClick={closeDialog} color={'primary'}/>
                            </IconButton>
                            Настройка поиска
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores atque aut,
                                deserunt esse expedita maxime molestias officia, quaerat quidem quo sed similique soluta
                                vero, voluptate. Dolor eveniet nesciunt nostrum.
                            </DialogContentText>
                            <FormControl component={'fieldset'} fullWidth>
                                <FormGroup aria-label={'position'} row>
                                    <TextField
                                        autoFocus
                                        margin={'dense'}
                                        id={'name'}
                                        label={'Email Address'}
                                        type={'email'}
                                        fullWidth
                                    />
                                </FormGroup>
                                <div>
                                    <div>
                                        <FormLabel>
                                            <p>Скрыть содержимое</p>
                                            <Checkbox color={'primary'}/>
                                        </FormLabel>
                                        <Typography variant={'body2'}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi esse
                                            explicabo, itaque nihil nisi ratione repellendus repudiandae? Ab illum
                                            laboriosam maxime natus neque non nostrum quae quo tempora?
                                        </Typography>
                                    </div>
                                    <div>
                                        <Radio value={'a'} name={'radio-button'}/>
                                    </div>
                                </div>
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