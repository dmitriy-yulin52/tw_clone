import * as React from "react";
import {memo, ReactElement, ReactNode} from "react";
import {
    Avatar,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    makeStyles,
    TextField,
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

const buttonPadding = {
    padding: '0px'
} as const


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

interface MaterialBlockProps {
    headerButton?: ReactNode,
    style?: boolean
    subTitle?: string
    children?: ReactNode,
    text?: string,
    fullName?: string,
    userName?: string,
    avatarUrl?: string,
    count?: number
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
            transform: "scale(0.99)",
            borderRadius: '10px'
        }
    }
}))


const typographyMargin = {
    marginRight: '8px',
    fontWeight: 500
} as const



function MaterialBlockImpl(props: MaterialBlockProps): ReactElement {

    const {headerButton, style = false, subTitle, text, avatarUrl, userName, fullName, children, count} = props
    const classes = MaterialBlockStyles()


    return <Box data-testid={'user-item'} flexWrap={'nowrap'} display={'flex'} className={classNames({
        [classes.hover]: style,
    })}>
        {avatarUrl && <Box marginRight={'16px'}>

            <Avatar alt={`Аватар пользователя`}
                    src={avatarUrl}/>
        </Box>}
        <Box display={'flex'} flexDirection={'column'} flexGrow={1}
             className={classNames({[classes.paddingDown]: style})}>
            <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Box display={'flex'}>
                                {fullName &&
                                    <Typography color={'secondary'}
                                                style={typographyMargin}>{fullName}</Typography>}
                                {userName &&
                                    <Typography color={'secondary'}>{userName}</Typography>}
                            </Box>
                            {text &&
                                <Typography color={'primary'}>{text}</Typography>}
                            {subTitle && <Box><Typography color={'secondary'}>{subTitle}</Typography></Box>}
                        </Box>
                        {headerButton && <Box>
                            {headerButton}
                        </Box>}
                    </Box>
                </Box>
                {children}
            </Box>
        </Box>
    </Box>
}

export const MaterialBlock = memo(MaterialBlockImpl)


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
    minRows?: number
    maxRows?: number
    multiline?: boolean
    fullWidth?: boolean
    error?: boolean
    color?: 'primary' | "secondary" | undefined
    disabled?: boolean
}

export const MaterialTextField = memo((props: MaterialTextFieldProps): ReactElement => {

    const {
        onChange,
        placeholder,
        variant,
        value,
        id,
        label,
        type,
        style,
        autoFocus,
        size,
        minRows,
        maxRows,
        multiline,
        fullWidth,
        error,
        color,
        disabled
    } = props

    return <TextField
        size={size}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        margin={'dense'}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        id={id}
        label={label}
        type={type}
        className={style}
        fullWidth={fullWidth}
        multiline={multiline}
        error={error}
        color={color}
        disabled={disabled}
    />
})

