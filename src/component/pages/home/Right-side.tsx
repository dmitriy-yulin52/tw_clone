import * as React from 'react'
import {memo, ReactElement, useEffect} from 'react'
import {Box, Divider, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {SearchTextField} from '../../SerachTextField/SearchTextField';
import {useSelector} from "react-redux";
import {Tag} from "../../../store/reducers/ducks/tags/types";
import {fetchTags} from "../../../store/reducers/ducks/tags/actions";
import {
    selectIsTagsError,
    selectIsTagsLoaded,
    selectIsTagsLoading,
    selectTagsItems
} from "../../../store/reducers/ducks/tags/selectors";
import {
    selectIsUsersError,
    selectIsUsersLoaded,
    selectIsUsersLoading,
    selectUsersItems
} from "../../../store/reducers/ducks/users/selectors";
import {User} from "../../../store/reducers/ducks/users/types";
import {RightSideUsers} from "../../Right-side/Right-side-users";
import {useAction} from "../../../utils/hook-utils";
import {fetchUsers} from "../../../store/reducers/ducks/users/actions";
import {RightSideTags} from "../../Right-side/Right-side-tags";

const RightSideStyles = makeStyles((theme) => ({
    wrapperRightBlock: {
        position: 'sticky',
        top: 0,
        overflow: 'auto',
        flexBasis: '400px',
        marginLeft: theme.spacing(4),
        '@media (max-width: 1050px)': {
            display: 'none'
        }
    },
    hover: {
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer'
        }
    },
    paperContent: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '15px',
        backgroundColor: '#f7f9f9',
        '&:hover': {
            backgroundColor: 'rgb(232, 234, 234)',
            cursor: 'pointer'
        }
    },
    paperWrapper: {
        borderRadius: '10px',
        backgroundColor: '#f7f9f9',
        marginTop: theme.spacing(3),

    },
    paperHeader: {
        borderRadius: '10px',
        padding: '18px',
        backgroundColor: '#f7f9f9',
    }
}))


export const RightSide = memo(function RightSide(): ReactElement | null {

    const classes = RightSideStyles()

    const tags: Tag[] = useSelector(selectTagsItems)
    const users: User[] = useSelector(selectUsersItems)

    const fetch_users: () => void = useAction(fetchUsers)
    const fetch_tags: () => void = useAction(fetchTags)

    const is_loading_tags: boolean = useSelector(selectIsTagsLoading)
    const is_loading_users: boolean = useSelector(selectIsUsersLoading)
    const is_request_users_error: boolean = useSelector(selectIsUsersError)
    const is_request_tags_error: boolean = useSelector(selectIsTagsError)


    useEffect(() => {
        fetch_tags()
        fetch_users()
    }, [fetch_tags, fetch_users])


    if (is_request_users_error || is_request_tags_error) {
        return null
    }

    return <Box className={classes.wrapperRightBlock}>
        <Box marginTop={'32px'}>
            <SearchTextField
                variant={'outlined'}
                fullWidth
                placeholder={'Поиск в Твиттере'}
            />
        </Box>
        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'}>Актуальные темы для вас</Typography>
            </Paper>
             <Divider/>
            {is_loading_tags ? <Box><LinearProgress color="primary"/></Box> : <RightSideTags tags={tags}/>}
        </Paper>
        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'} >Кого читать</Typography>
            </Paper>
             <Divider/>
            {is_loading_users ? <Box><LinearProgress color="primary"/></Box> : <RightSideUsers users={users}/>}
        </Paper>
    </Box>
})