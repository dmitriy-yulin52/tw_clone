import * as React from 'react'
import {memo, ReactElement, useMemo} from 'react'
import {MaterialBlock, PopoverDialogType} from "../../utils/components-utils";
import {User} from "../../store/reducers/ducks/users/types";
import {Box, IconButton} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {preventDefault} from "../../utils/hook-utils";
import {PopoverDialog} from "../popoverDialog/PopoverDialog";
import {ChildrenPopover} from "../popoverDialog/ChildrenPopover";


interface RightSideUserProps {
    user: User
}

export const RightSideUser = memo((props: RightSideUserProps): ReactElement => {
    const {user} = props


    const memomize_popover_dialog = useMemo(() => {

        const props_children = {
            fullName: user.name,
            userName: user.userName,
            avatarUrl:user.avatarUrl,
            status:'loremfdfdjhfhdjkhgjhfdjhk'
        }
        const popover_dialog:PopoverDialogType<typeof props_children> = {
            Component: PopoverDialog,
            children: ChildrenPopover,
            propsChildren: props_children,
            showPopover:true
        }

        return popover_dialog

    }, [user,ChildrenPopover,PopoverDialog])


    return <Box>
        <MaterialBlock
            popoverDialog={memomize_popover_dialog}
            styleFullname
            styleHover
            fullName={user.name}
            userName={user.userName}
            avatarUrl={user.avatarUrl}
            headerButton={
                <IconButton onClick={preventDefault} color={"primary"}
                ><PersonAddIcon/></IconButton>}/>

    </Box>
})