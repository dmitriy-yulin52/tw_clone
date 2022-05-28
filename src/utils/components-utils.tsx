import * as React from "react";
import {
    FunctionComponent,
    JSXElementConstructor,
    memo,
    MemoExoticComponent,
    ReactElement,
    ReactNode,
    useCallback
} from "react";
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
import {preventDefault} from "./hook-utils";
import {Route} from "react-router-dom";
import {PopoverDialogProps} from "../component/popoverDialog/PopoverDialog";


export const universalRenderPaths = (paths: string[], Element: ReactNode): JSX.Element[] =>
    paths.map((path) => <Route key={path} path={path} element={Element}/>);

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



interface MaterialBlockProps<T>{
    headerButton?: ReactNode,
    styleHover?: boolean
    subTitle?: string
    children?: ReactNode,
    text?: string,
    fullName?: string,
    userName?: string,
    avatarUrl?: string,
    count?: number
    styleFullname?: boolean
    // popoverDialog?: { showPopover: boolean, Component: any, children: any,propsChildren: T}
    popoverDialog?: PopoverDialogType<T>
}

export interface PopoverDialogType<T> {
    showPopover:boolean,
    Component: MemoExoticComponent<(props:PopoverDialogProps)=>ReactElement<any,string | React.JSXElementConstructor<any>>>
    children:(props: T) => ReactElement<any, string | React.JSXElementConstructor<any>>
    propsChildren: T
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
    },
    styleFullName: {
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))


const typographyMargin = {
    marginRight: '8px',
    fontWeight: 500
} as const

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
} as const
const transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
} as const

function MaterialBlockImpl<T>(props: MaterialBlockProps<T>): ReactElement {

    const {
        headerButton,
        styleHover = false,
        subTitle,
        text,
        avatarUrl,
        userName,
        fullName,
        children,
        count,
        styleFullname = false,
        popoverDialog
    } = props
    const classes = MaterialBlockStyles()

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl, anchorEl]);

    const handlePopoverClose = useCallback(() => {
        setAnchorEl(null);
    }, [anchorEl, setAnchorEl]);

    const openPopover = Boolean(anchorEl);


    return <Box data-testid={'user-item'} flexWrap={'nowrap'} display={'flex'} className={classNames({
        [classes.hover]: styleHover,
    })}>
        {popoverDialog &&
            popoverDialog.showPopover &&
            <popoverDialog.Component
                open={openPopover}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                transitionDuration={5}
            >
                <popoverDialog.children {...popoverDialog.propsChildren}/>
            </popoverDialog.Component>}
        {avatarUrl && <Box marginRight={'16px'}>

            <Avatar alt={`Аватар пользователя`}
                    src={avatarUrl}/>
        </Box>}
        <Box display={'flex'} flexDirection={'column'} flexGrow={1}
             className={classNames({[classes.paddingDown]: styleHover})}>
            <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Box display={'flex'}>
                                {fullName &&
                                    <Typography
                                        aria-owns={openPopover ? 'mouse-over-popover' : undefined}
                                        aria-haspopup="true"
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                        onClick={preventDefault}
                                        color={'primary'}
                                        className={classNames({
                                            [classes.styleFullName]: styleFullname
                                        })}
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

export const MaterialBlock=  memo(MaterialBlockImpl) as typeof MaterialBlockImpl

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

