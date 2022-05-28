import * as React from 'react'
import {ReactElement} from "react";
import {Avatar, Box, Typography} from "@material-ui/core";


const marginRightStyle = {
    marginRight: '8px'
} as const
const avatarWidth = {height: '80px', width: '80px'} as const


interface ChildrenPopover {
    fullName?: string
    userName?: string
    avatarUrl?: string
    status?: string
    readers?: number
    in_readable?: number
}


export function ChildrenPopover(props: ChildrenPopover): ReactElement {
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
            <Box>
                {avatarUrl ? <Avatar style={avatarWidth}
                                     src={avatarUrl}/> : <Avatar style={avatarWidth}
                                                                 src={''}/>}
            </Box>
            {fullName && <Typography color={'primary'}>{fullName}</Typography>}
            {userName && <Typography color={'secondary'}>{userName}</Typography>}
        </Box>
        <Box marginTop={'8px'} width={'320px'}>
            {status && <Typography>{status}</Typography>}
        </Box>
        <Box marginTop={'16px'} display={'flex'} justifyContent={'space-between'}>
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