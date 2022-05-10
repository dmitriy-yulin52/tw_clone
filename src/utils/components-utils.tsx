import * as React from "react";
import {memo, ReactElement, ReactNode, useCallback} from "react";
import {
    Avatar,
    Box,
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
import classNames from "classnames";


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

    const onClickHandler = useCallback((): void => {
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

type TitleType = {
    userName: string,
    fullName: string
}

interface MaterialBlockProps {
    headerTitle?: Partial<TitleType>,
    headerButton?: ReactNode,
    children?: ReactNode,
    avatarUrl?: string
    style?: boolean
}


const MaterialBlockStyles = makeStyles(() => ({
    avatarBlock: {
        flexBasis: '55px',
    },
    hover: {
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer'
        }
    }
}))


const typographyMargin = {
    marginRight: '8px'
} as const


export const MaterialBlock = memo(function MaterialBlock(props: MaterialBlockProps): ReactElement {

    const {avatarUrl, headerTitle, headerButton, children, style} = props
    const classes = MaterialBlockStyles()


    return <Box flexWrap={'nowrap'} display={'flex'}>
        {avatarUrl && <Box marginRight={'8px'}>
            <Avatar alt={`Аватар пользователя`}
                    src={avatarUrl}/>
        </Box>}
        <Box display={'flex'} flexDirection={'column'} flexGrow={1} padding={'8px'} className={classNames({
            [classes.hover]: style
        })}>
            <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                {headerTitle && <Box display={'flex'} justifyContent={'space-between'}>
                    <Box display={'flex'}>
                        {headerTitle.userName &&
                            <Typography color={'primary'} style={typographyMargin}>{headerTitle.userName}</Typography>}
                        {headerTitle.fullName && <Typography color={'secondary'}>{headerTitle.fullName}</Typography>}
                    </Box>
                    {headerButton !== null && <Box>
                        {headerButton}
                    </Box>}
                </Box>}
                {children}
            </Box>

        </Box>
    </Box>
})
