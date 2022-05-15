import * as React from 'react'
import {memo, ReactElement} from 'react'
import {Box, Button, IconButton, TextField} from "@material-ui/core";
import {MaterialBlock} from "../../utils/components-utils";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";


interface TweetsFormProps {
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}

export const TweetsForm = memo((props: TweetsFormProps): ReactElement => {
    const {user} = props

    return <MaterialBlock avatarUrl={user.avatarUrl}>
        <Box display={'flex'} flexDirection={'column'}>
            <TextField
                placeholder={'Что происходит?'}
                variant={'standard'}
                margin={'dense'}
                rows={1}
                maxRows={15}
                fullWidth
                multiline
            />
            <Box display={'flex'} marginTop={'16px'} justifyContent={'space-between'}>
                <Box display={'flex'}>
                    <IconButton color={'primary'}>
                        <PermMediaIcon/>
                    </IconButton>
                    <IconButton color={'primary'}>
                        <SentimentSatisfiedIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <Button variant={'contained'} color={'primary'}>Твитнуть</Button>
                </Box>
            </Box>
        </Box>
    </MaterialBlock>
})