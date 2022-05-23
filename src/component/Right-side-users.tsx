import * as React from 'react'
import {memo, ReactElement, useEffect} from "react";
import {WrapperMaterialBlock} from "../utils/components-utils";
import {User} from "../store/reducers/ducks/users/types";
import {IconButton} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {fetchTags} from "../store/reducers/ducks/tags/actions";
import {fetchUsers} from "../store/reducers/ducks/users/actions";
import {useDispatch} from "react-redux";


interface RightSideUsersType {
    users: User[]
}

export const RightSideUsers = memo((props: RightSideUsersType): ReactElement => {
    const {users} = props
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUsers())
    }, [fetchUsers])

    return <>{users.map((user,index) =>
        <WrapperMaterialBlock<User>
            style
            fullName={user.fullName}
            userName={user.userName}
            text={'hello world'}
            key={users.length - index}
            avatarUrl={user.avatarUrl}
            headerTitle={user}
            headerButton={
                <IconButton color={"primary"}
                ><PersonAddIcon/></IconButton>}/>
    )}</>
})