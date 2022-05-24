import * as React from 'react'
import {memo, ReactElement} from 'react'
import {MaterialBlock} from "../utils/components-utils";
import {User} from "../store/reducers/ducks/users/types";
import {IconButton} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";


interface RightSideUsersProps {
    users: User[]
}

export const RightSideUsers = memo((props: RightSideUsersProps): ReactElement => {
    const {users} = props
    return <>{users.map((user, index) =>
        <MaterialBlock
            style
            fullName={user.name}
            userName={user.userName}
            key={users.length - index}
            avatarUrl={user.avatarUrl}
            headerButton={
                <IconButton color={"primary"}
                ><PersonAddIcon/></IconButton>}/>
    )}</>
})