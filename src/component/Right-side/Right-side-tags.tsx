import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Divider, IconButton, Typography} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {MaterialBlock} from "../../utils/components-utils";
import {Tag} from "../../store/reducers/ducks/tags/types";

interface RightSideTagsProps {
    tags: Tag[]
}

const iconButtonPadding = {
    padding: '5px'
} as const


export const RightSideTags = memo(function RightSideTags(props: RightSideTagsProps): ReactElement {

    const {tags} = props

    return <>
        {tags.map((tag, index) =>
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

    </>
})