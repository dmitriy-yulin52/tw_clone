import * as React from 'react'
import {memo, ReactElement, ReactNode, useEffect} from 'react'
import {MaterialBlock} from "../../../utils/components-utils";

import {Box, IconButton, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {SearchTextField} from '../../SerachTextField/SearchTextField';
import {useDispatch, useSelector} from "react-redux";
import {Tag} from "../../../store/reducers/ducks/tags/types";
import {fetchTags} from "../../../store/reducers/ducks/tags/actions";
import {selectTagsItems} from "../../../store/reducers/ducks/tags/selectors";
import {selectUsersItems} from "../../../store/reducers/ducks/users/selectors";
import {User} from "../../../store/reducers/ducks/users/types";
import {RightSideUsers} from "../../Right-side-users";
import {useAction} from "../../../utils/hook-utils";
import {fetchUsers} from "../../../store/reducers/ducks/users/actions";

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


const iconButtonPadding = {
    padding: '5px'
} as const

const headerTitleTweets = {
    userName: 'События:',
    fullName: 'Румыния'
} as const
const headerTitleRead = {
    userName: 'События:',
} as const


interface RightSideProps {
    isLoading:boolean
}

export const RightSide = memo(function RightSide(props:RightSideProps): ReactElement {

    const {isLoading}=props
    const classes = RightSideStyles()

    const tags: Tag[] = useSelector(selectTagsItems)
    const users: User[] = useSelector(selectUsersItems)
    const fetch_users: () => void = useAction(fetchUsers)
    const fetch_tags: () => void = useAction(fetchTags)


     useEffect(()=>{
         fetch_tags()
         fetch_users()
     },[fetch_tags,fetch_users])


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
            {isLoading ? <Box><LinearProgress color="primary"/></Box>:tags.map((tag,index) =>
                <MaterialBlock
                    key={tags.length - index}
                    style
                    fullName={tag.fullName}
                    userName={tag.userName}
                    text={tag.text}
                    headerButton={
                        <IconButton
                            color={"primary"}
                            style={iconButtonPadding}>
                            <MoreHorizIcon/>
                        </IconButton>}>
                    <Typography>
                        Твитов: {tag.count}
                    </Typography>
                </MaterialBlock>)}
        </Paper>
        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'}>Кого читать</Typography>
            </Paper>
            {isLoading ? <Box><LinearProgress color="primary"/></Box>:<RightSideUsers users={users}/>}
        </Paper>
    </Box>
})