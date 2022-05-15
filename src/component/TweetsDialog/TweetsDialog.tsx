import * as React from 'react'
import {memo, ReactElement} from 'react'
import {MaterialDialog} from "../../utils/components-utils";
import {TweetsForm} from "../TweetsForm/TweetsForm";


interface TweetsDialogProps {
    open: boolean
    closeDialog: () => void
}

const user = {
    fullName: '@mail.ru',
    userName: 'Dmitriy',
    avatarUrl: 'https://jooinn.com/images/man-standing-on-street.jpg'
} as const

export const TweetsDialog = memo(function EntryDialog(props: TweetsDialogProps): ReactElement {
    const {open, closeDialog} = props

    return (
        <MaterialDialog open={open} closeDialog={closeDialog} label={'Твитнуть'}>
            <TweetsForm user={user}/>
        </MaterialDialog>
    )
})