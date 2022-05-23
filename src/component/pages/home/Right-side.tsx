import * as React from 'react'
import {ReactElement, useEffect} from 'react'
import {MaterialBlock, WrapperMaterialBlock} from "../../../utils/components-utils";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import {Box, IconButton, InputAdornment, makeStyles, Paper, Typography} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {SearchTextField} from '../../SerachTextField/SearchTextField';
import {useDispatch, useSelector} from "react-redux";
import {tags_items} from "../../../store/reducers/ducks/tags/selectors";
import {Tag} from "../../../store/reducers/ducks/tags/types";
import {fetchTags} from "../../../store/reducers/ducks/tags/actions";

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


export const RightSide = function RightSide(): ReactElement {

    const classes = RightSideStyles()
    const dispatch = useDispatch()

    const tags: Tag[] = useSelector(tags_items)


     useEffect(()=>{
         dispatch(fetchTags())
     },[fetchTags])

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

            {tags.map((tag,index) =>
                <WrapperMaterialBlock<Tag>
                    key={tags.length - index}
                    style
                    headerTitle={tag}
                    subTitle={'Dmitriy'}
                    headerButton={
                        <IconButton
                            color={"primary"}
                            style={iconButtonPadding}>
                            <MoreHorizIcon/>
                        </IconButton>}>
                    <Typography>
                        Твитов: {tag.count}
                    </Typography>
                </WrapperMaterialBlock>)}
        </Paper>

        <Paper className={classes.paperWrapper}>
            <Paper className={classes.paperHeader}>
                <Typography variant={'h6'}>Кого читать</Typography>
            </Paper>
            {/*{new Array(3).fill(*/}
            {/*    <WrapperMaterialBlock<any>*/}
            {/*        style*/}
            {/*        avatarUrl={'https://jooinn.com/images/man-standing-on-street.jpg'}*/}
            {/*        headerTitle={headerTitleRead}*/}
            {/*        subTitle={'Dmitriy'}*/}
            {/*        headerButton={*/}
            {/*            <IconButton color={"primary"}*/}
            {/*            ><PersonAddIcon/></IconButton>}/>*/}
            {/*)}*/}
        </Paper>
    </Box>
}