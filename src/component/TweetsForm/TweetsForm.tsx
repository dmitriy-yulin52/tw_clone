import * as React from 'react'
import {ChangeEvent, memo, ReactElement, useCallback, useState} from 'react'
import {Box, Button, CircularProgress, IconButton, makeStyles, TextField, Typography} from "@material-ui/core";
import {MaterialBlock} from "../../utils/components-utils";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import classNames from "classnames";


const TweetsFormStyles = makeStyles((theme) => ({
    circularProgressAbsolute: {
        position: 'absolute'
    },
    circularProgressAbsoluteError: {
        color: 'red'
    },
    circularProgressRelative: {
        position: 'relative',
        color: 'rgba(0,0,0,0.1)'
    }
}))


interface TweetsFormProps {
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}

const circularProgressAbsolute = {
    position: 'absolute'
} as const
const circularProgressRelative = {
    position: 'relative',
    color: 'rgba(0,0,0,0.1)'
} as const


export const TweetsForm = memo((props: TweetsFormProps): ReactElement => {
    const {user} = props
    const classes = TweetsFormStyles()

    const [text, setText] = useState<string>('')
    const limitPercent = Math.round(text.length / 280 * 100)


    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)

        }
    }, [text, setText])


    return <MaterialBlock avatarUrl={user.avatarUrl}>
        <Box display={'flex'} flexDirection={'column'}>
            <TextField
                onChange={handleChange}
                placeholder={'Что происходит?'}
                variant={'standard'}
                margin={'dense'}
                rows={1}
                maxRows={15}
                value={text}
                style={{color:'red'} }
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

                <Box display={'flex'} alignItems={'center'}>
                    {text && <Box marginRight={'8px'} display={'flex'} alignItems={'center'}>
                        <Box marginRight={'8px'}>{text.length}</Box>
                        <Box display={'flex'}>
                            <CircularProgress
                                className={classNames(classes.circularProgressAbsolute, {
                                    [classes.circularProgressAbsoluteError]: limitPercent >= 100
                                })}
                                variant={'static'}
                                size={20}
                                thickness={5}
                                value={limitPercent >= 100 ? 100 : limitPercent}
                            />
                            <CircularProgress
                                className={classes.circularProgressRelative}
                                variant={'static'}
                                size={20}
                                thickness={5}
                                value={100}
                            />
                        </Box>
                    </Box>}
                    <Button disabled={limitPercent >= 100} variant={'contained'} color={'primary'}>Твитнуть</Button>
                </Box>
            </Box>
        </Box>
    </MaterialBlock>
})