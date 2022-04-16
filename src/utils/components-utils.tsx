import {memo, ReactElement, ReactNode, useCallback} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import * as React from "react";


interface MaterialDialogProps {
    open: boolean
    closeDialog: () => void
    label: string
    children: ReactNode
    onChange?: () => void
    labelButton: string
}


const useStylesMaterialDialog = makeStyles((theme) => ({
    materialDialog: {
        display: 'flex',
        alignItems: 'center'
    }
}))


export const MaterialDialog = memo((props: MaterialDialogProps): ReactElement => {

    const {open, closeDialog, label, children, onChange, labelButton} = props
    const classes = useStylesMaterialDialog()

    const onClickHandler = useCallback(():void => {
        onChange?.()
        closeDialog()
    }, [onChange, closeDialog])

    return (
        <Dialog open={open}>
            <DialogTitle className={classes.materialDialog}>
                <IconButton
                    onClick={closeDialog}
                    color={'primary'}
                    aria-label={'close'}
                >
                    <CloseIcon color={'primary'}/>
                </IconButton>
                <Typography variant={'h6'} component={'span'}>{label}</Typography>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} color={'primary'} onClick={onClickHandler}>{labelButton}</Button>
            </DialogActions>
        </Dialog>
    )
})

