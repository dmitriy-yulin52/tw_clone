import * as React from 'react'
import {memo, ReactElement} from 'react'
import {MaterialBlock} from "../../utils/components-utils";
import {User} from "../../store/reducers/ducks/users/types";
import {Box, IconButton} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {Link} from "react-router-dom";

interface RightSideUsersProps {
    users: User[]
}

const styleLink = {
    textDecoration: 'none'
} as const

export const RightSideUsers = memo((props: RightSideUsersProps): ReactElement | null => {
    const {users} = props

    if (!users.length) return null


    return <Box  key={users.length}> {users.map((user, index) => (
        <Link style={styleLink} to={`home/search?q=${user.name}`} key={users.length - index}><MaterialBlock
            style
            fullName={user.name}
            userName={user.userName}

            avatarUrl={user.avatarUrl}
            headerButton={
                <IconButton color={"primary"}
                ><PersonAddIcon/></IconButton>}/>
        </Link>
    ))}</Box>
})