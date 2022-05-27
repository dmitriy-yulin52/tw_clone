import * as React from 'react'
import {ChangeEvent, memo, ReactElement, useCallback, useState} from 'react'
import {Box, Button, CircularProgress, IconButton, makeStyles} from "@material-ui/core";
import {MaterialBlock, MaterialTextField} from "../../utils/components-utils";
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
    },
    widthBlock:{
        width:'350px',
         '@media (max-width: 450px)': {
                    width:'250px'
                },
    },
    styleErrorText:{
        color:theme.palette.error.main,
        height:'400px'
    }
}))


interface TweetsFormProps {
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}


const MAX_LENGTH = 281


export const TweetsForm = memo((props: TweetsFormProps): ReactElement => {
    const {user} = props
    const classes = TweetsFormStyles()

    const [text, setText] = useState<string>('')
    const limitPercent = Math.round(text.length / MAX_LENGTH * 100)
    const countLimit = MAX_LENGTH - text.length


    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }, [text, setText])


    const handlerClickAddTweet = useCallback((): void => {
        setText('')
    }, [setText, text])


    return <MaterialBlock  avatarUrl={user.avatarUrl}>
        <Box display={'flex'} flexDirection={'column'}>
            <MaterialTextField
                onChange={handleChange}
                multiline
                fullWidth
                placeholder={'Что происходит?'}
                variant={'standard'}
                value={text}
                error={(countLimit -1) < 0}
            />
            <Box display={'flex'} marginTop={'16px'} justifyContent={'space-between'} flexWrap={'wrap'}>
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
                        <Box marginRight={'8px'}>{countLimit}</Box>
                        <Box display={'flex'}>
                            <CircularProgress
                                className={classNames(classes.circularProgressAbsolute, {
                                    [classes.circularProgressAbsoluteError]: text.length >= MAX_LENGTH
                                })}
                                variant={'static'}
                                size={20}
                                thickness={5}
                                value={text.length >= MAX_LENGTH ? 100 : limitPercent}
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
                    <Button
                        onClick={handlerClickAddTweet}
                        disabled={text.length >= MAX_LENGTH}
                        variant={'contained'}
                        color={'primary'}
                    >Твитнуть</Button>
                </Box>
            </Box>
        </Box>
    </MaterialBlock>
})