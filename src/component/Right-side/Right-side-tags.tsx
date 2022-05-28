import * as React from 'react'
import {memo, ReactElement} from 'react'
import {IconButton, Typography} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {MaterialBlock} from "../../utils/components-utils";
import {Tag} from "../../store/reducers/ducks/tags/types";
import {Link} from "react-router-dom";

interface RightSideTagsProps {
    tags: Tag[]
}

const iconButtonPadding = {
    padding: '5px'
} as const

const styleLink = {
    textDecoration: 'none'
} as const


export const RightSideTags = memo(function RightSideTags(props: RightSideTagsProps): ReactElement {

    const {tags} = props

    return <>
        {tags.map((tag, index) =>
            <Link style={styleLink} to={`search?q=${tag.fullName}`} key={tags.length - index}>
                <MaterialBlock
                    key={tags.length - index}
                    styleHover
                    fullName={tag.fullName}
                    userName={tag.userName}
                    text={tag.text}
                    headerButton={
                        <IconButton
                            color={"primary"}
                            style={iconButtonPadding}>
                            <MoreHorizIcon/>
                        </IconButton>}>
                    <Typography color={'secondary'}>
                        Твитов: {tag.count}
                    </Typography>
                </MaterialBlock> </Link>
        )}
    </>
})