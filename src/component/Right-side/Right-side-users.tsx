import * as React from 'react'
import {memo, ReactElement} from 'react'
import {MaterialBlock} from "../../utils/components-utils";
import {User} from "../../store/reducers/ducks/users/types";
import {Box, IconButton} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {preventDefault} from "../../utils/hook-utils";



interface RightSideUsersProps {
    users: User[]
}

export const RightSideUsers = memo((props: RightSideUsersProps): ReactElement | null => {
    const {users} = props


    if (!users.length) return null

    return <Box> {users.map((user, index) => (
        <MaterialBlock
            style
            fullName={user.name}
            userName={user.userName}
            avatarUrl={user.avatarUrl}
            key={users.length - index}
            headerButton={
                <IconButton onClick={preventDefault} color={"primary"}
                ><PersonAddIcon/></IconButton>}/>

    ))}</Box>
})