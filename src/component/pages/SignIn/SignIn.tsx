import * as React from 'react'
import {
    Button, Checkbox,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl, FormGroup, FormLabel,
    IconButton,
    makeStyles, Radio, TextField,
    Typography
} from "@material-ui/core";
import classNames from "classnames";
import TwitterIcon from '@material-ui/icons/Twitter';
import {useBooleanState} from "../../../utils/hook-utils";
import {useCallback} from "react";


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100%'
    },
    leftSide: {
        backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',
        backgroundSize: 'cover',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    leftSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '60%',
        width: '60%',
        transform: 'translate(-50%,-50%)',
        filter: 'invert(101%) sepia(143%) saturate(0%) hue-rotate(103deg) brightness(187%) contrast(101%) drop-shadow(2px 4px 6px black)'
    },
    leftSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '20px',
        },
    },
    leftSideListInfoItem: {
        marginBottom: theme.spacing(4)
    },
    leftSideListInfoIcon: {
        fontSize: '32px',
        marginRight: theme.spacing(2)
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: '380px'
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: '32px',
        margin: '20px 0px 45px 0px',
    },
    loginSideSubTitle: {
        fontWeight: 800,
        marginBottom: theme.spacing(2)
    },
    loginSideButton: {
        marginBottom: theme.spacing(2)
    }

}))


export const SignIn = () => {


    const [open, setClose, setOpen] = useBooleanState(false)

    const classes = useStylesSignIn()




    return (
        <div className={classNames(classes.wrapper)}>
            <div className={classNames(classes.leftSide)}>
                <TwitterIcon color={'primary'} className={classes.leftSideBigIcon}/>
            </div>
            <section className={classNames(classes.loginSide)}>
                <div className={classNames(classes.loginSideWrapper)}>
                    <TwitterIcon color={'primary'} className={classes.loginSideTwitterIcon}/>
                    <Typography variant={'h4'} className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо
                        сейчас</Typography>
                    <Typography className={classes.loginSideSubTitle}>Присоединяйтесь к Твиттеру прямо
                        сейчас!</Typography>
                    <Button variant={'contained'} color={'primary'} fullWidth
                            className={classes.loginSideButton} onClick={setOpen}>Зарегистрироваться</Button>
                    <Button variant={'outlined'} color={'primary'} fullWidth>Войти</Button>
                    <Dialog open={open}>
                        <DialogTitle>
                            <IconButton
                                onClick={() => {
                                }}
                                color={'primary'}
                                aria-label={'close'}
                                className={''}
                            >
                                {/*<CloseIcon/>*/}
                                <Button onClick={setClose}>click</Button>
                            </IconButton>
                            Настройка поиска
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores atque aut,
                                deserunt esse expedita maxime molestias officia, quaerat quidem quo sed similique soluta
                                vero, voluptate. Dolor eveniet nesciunt nostrum.
                            </DialogContentText>
                            <FormControl component={'fieldset'} fullWidth>
                                <FormGroup aria-label={'position'} row>
                                    <TextField
                                        autoFocus
                                        margin={'dense'}
                                        id={'name'}
                                        label={'Email Address'}
                                        type={'email'}
                                        fullWidth
                                    />
                                </FormGroup>
                                <div>
                                    <div>
                                        <FormLabel>
                                            <p>Скрыть содержимое</p>
                                            <Checkbox color={'primary'}/>
                                        </FormLabel>
                                        <Typography variant={'body2'}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi esse
                                            explicabo, itaque nihil nisi ratione repellendus repudiandae? Ab illum
                                            laboriosam maxime natus neque non nostrum quae quo tempora?
                                        </Typography>
                                    </div>
                                    <div>
                                        <Radio value={'a'} name={'radio-button'}/>
                                    </div>
                                </div>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                            }} color={'primary'} variant={'contained'}>Cancel</Button>
                            <Button onClick={() => {
                            }} variant={'contained'}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </section>
        </div>
    )
}