import * as React from 'react'
import {memo, ReactElement, ReactNode} from 'react'
import {MaterialDialog} from "../../utils/components-utils";


interface TweetsDialogProps {
    open: boolean
    closeDialog: () => void
    children?:ReactNode
}

export const TweetsDialog = memo(function EntryDialog(props: TweetsDialogProps): ReactElement {
    const {open, closeDialog,children} = props

    return (
        <MaterialDialog open={open} closeDialog={closeDialog} label={'Твитнуть'}>
            {children}
        </MaterialDialog>
    )
})