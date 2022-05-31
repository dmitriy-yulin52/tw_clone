import * as React from 'react'
import {memo, ReactElement} from "react";
import {Avatar, Box, Typography} from "@material-ui/core";


const marginRightStyle = {
    marginRight: '8px'
} as const
const avatarWidth = {height: '80px', width: '80px'} as const


interface ChildrenPopover {
    fullName: string
    userName: string
    avatarUrl?: string
    status?: string
    readers?: number
    in_readable?: number
}


function ChildrenPopoverImpl(props: ChildrenPopover): ReactElement {
    const {
        fullName,
        userName,
        status,
        readers,
        in_readable,
        avatarUrl,
    } = props

    return <Box padding={'24px'}>
        <Box>
            {avatarUrl && <Box>
                {avatarUrl ? <Avatar style={avatarWidth}
                                     src={avatarUrl}/> : <Avatar style={avatarWidth}
                                                                 src={''}/>}
            </Box>}
            <Typography color={'primary'}>{fullName}</Typography>
            <Typography color={'secondary'}>{userName}</Typography>
        </Box>
       {status &&  <Box marginTop={'8px'} width={'320px'}>
            <Typography>{status}</Typography>
        </Box>}
        <Box marginTop={'16px'} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
            <Box display={'flex'}>
                {in_readable && (<><Typography style={marginRightStyle} color={'primary'}>{in_readable} </Typography>
                    <Typography color={'secondary'}>в читаемых</Typography></>)}
            </Box>
            <Box display={'flex'}>
                {readers && (<><Typography style={marginRightStyle} color={'primary'}>{readers} тыс </Typography>
                    <Typography color={'secondary'}>читателей</Typography></>)}
            </Box>
        </Box>
    </Box>
}
export const ChildrenPopover = memo(ChildrenPopoverImpl) as typeof ChildrenPopoverImpl
