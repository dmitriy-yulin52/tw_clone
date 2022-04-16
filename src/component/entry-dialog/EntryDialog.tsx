import * as React from 'react'
import {memo, ReactElement, ReactNode} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useBooleanState} from "../../utils/hook-utils";


interface EntryDialogProps {
    title:string
    children:ReactNode
    open:boolean
    closeDialog:()=> void
}


const useStylesEntryDialog = makeStyles((theme)=>({
    dialogTitle:{
        display:'flex',
        alignItems:'center'
    }
}))


export const EntryDialog = memo(function EntryDialog(props: EntryDialogProps):ReactElement {
    const {title,children,open,closeDialog} = props



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
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} color={'primary'} fullWidth>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
})