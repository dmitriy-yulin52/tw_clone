import * as React from 'react'
import {memo, ReactElement, ReactNode} from "react";
import {Box, Popover, Typography} from "@material-ui/core";
import {PopoverOrigin} from "@material-ui/core/Popover/Popover";


export interface PopoverDialogProps {
    open?: boolean
    anchorEl?: HTMLElement | null
    anchorOrigin?: PopoverOrigin
    transformOrigin?: PopoverOrigin
    children?: ReactNode
    transitionDuration?: number | {
        appear?: number,
        enter?: number,
        exit?: number
    }
}

const pointerNone = {
    pointerEvents: 'none',
    width:'700px'
} as const

export const PopoverDialog = memo((props: PopoverDialogProps): ReactElement => {
    const {open, anchorEl, anchorOrigin, transformOrigin, children, transitionDuration} = props
    return (
            <Popover
                open={open ?? false}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                transitionDuration={transitionDuration}
                style={pointerNone}
            >
                <Box>
                    {children}
                </Box>
            </Popover>
    );
})
