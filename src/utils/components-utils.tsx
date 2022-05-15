import * as React from "react";
import {ChangeEvent, memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {
    Avatar,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import classNames from "classnames";


interface MaterialDialogProps {
    open: boolean
    closeDialog: () => void
    label?: string
    children: ReactNode
    actionButton?: ReactNode
}


const useStylesMaterialDialog = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    divider: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(2)
    }
}))


export const MaterialDialog = memo((props: MaterialDialogProps): ReactElement => {

    const {open, closeDialog, label, children, actionButton} = props
    const classes = useStylesMaterialDialog()


    return (
        <Dialog open={open} className={classes.header}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={'16px 24px 0px 24px'}>
                <IconButton
                    onClick={closeDialog}
                    color={'primary'}
                    aria-label={'close'}
                >
                    <CloseIcon color={'primary'}/>
                </IconButton>
                <Typography variant={'h6'} component={'span'}>{label}</Typography>
            </Box>
            <Divider className={classes.divider}/>
            <DialogContent>
                <Box>
                    {children}
                </Box>
            </DialogContent>
            {actionButton && (<> <Divider className={classes.divider}/>
                <DialogActions>
                    {actionButton}
                </DialogActions></>)}

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
    subTitle?: string
}


const MaterialBlockStyles = makeStyles(() => ({
    avatarBlock: {
        flexBasis: '55px',
    },
    paddingUp: {
        padding: '8px'
    },
    paddingDown: {
        padding: '0px'
    },
    hover: {
        padding: '8px',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer',
            transition: '0.7s',
            transform: "scale(0.95)",
            borderRadius: '10px'
        }
    }
}))


const typographyMargin = {
    marginRight: '8px'
} as const


export const MaterialBlock = memo(function MaterialBlock(props: MaterialBlockProps): ReactElement {

    const {avatarUrl, headerTitle, headerButton, children, style = false, subTitle} = props
    const classes = MaterialBlockStyles()


    return <Box flexWrap={'nowrap'} display={'flex'} className={classNames({
        [classes.hover]: style,
    })}>
        {avatarUrl && <Box marginRight={'16px'}>
            <Avatar alt={`Аватар пользователя`}
                    src={avatarUrl}/>
        </Box>}
        <Box display={'flex'} flexDirection={'column'} flexGrow={1}
             className={classNames({[classes.paddingDown]: style})}>
            <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                {headerTitle && <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Box display={'flex'}>
                                {headerTitle.userName &&
                                    <Typography color={'primary'}
                                                style={typographyMargin}>{headerTitle.userName}</Typography>}
                                {headerTitle.fullName &&
                                    <Typography color={'secondary'}>{headerTitle.fullName}</Typography>}
                            </Box>
                            {subTitle && <Box><Typography color={'secondary'}>{subTitle}</Typography></Box>}
                        </Box>
                        {headerButton !== null && <Box>
                            {headerButton}
                        </Box>}
                    </Box>
                </Box>}
                {children}
            </Box>

        </Box>
    </Box>
})


interface MaterialTextFieldProps {
    onChange: (e: any) => void
    placeholder?: string
    variant?: "filled" | "standard" | "outlined"
    value: any
    id?: string
    label?: string
    type?: string
    style?: any
    autoFocus?: boolean
    size?: "medium" | "small"
    rows?: number
    maxRows?: number
}

export const MaterialTextField = memo((props: MaterialTextFieldProps): ReactElement => {

    const {onChange, placeholder, variant, value, id, label, type, style, autoFocus, size, rows, maxRows} = props

    return <TextField
        size={size}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        margin={'dense'}
        rows={rows}
        maxRows={maxRows}
        value={value}
        id={id}
        label={label}
        type={type}
        className={style}
        fullWidth
        multiline
    />
})

