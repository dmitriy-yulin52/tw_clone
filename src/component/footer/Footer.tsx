import * as React from 'react'
import {ReactElement} from "react";
import {Box, Link, makeStyles, Typography} from "@material-ui/core";


const useStylesFooter = makeStyles((theme) => ({
    wrapper: {
        flexGrow: 1,
        flexWrap: 'wrap',
        padding: '16px 10px',
        '& a': {
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: theme.spacing(2),
            color: 'rgb(83, 100, 113)'
        },
        '& div': {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap '
        }
    }
}))


export const Footer = (): ReactElement => {

    const classes = useStylesFooter()
    return (
        <div className={classes.wrapper}>
            <div>
                <Link>О нас</Link>
                <Link>Справочный центр</Link>
                <Link>Условия предоставления услуг</Link>
                <Link>Политика конфиденциальности</Link>
                <Link>Политика в отношении файлов cookie</Link>
                <Link>Специальные возможности</Link>
                <Link>Информация о рекламе</Link>
                <Link>Блог</Link>
                <Link>Статус</Link>
                <Link>Работа</Link>
                <Link>Ресурсы бренда</Link>
                <Link>Реклама</Link>
                <Link>Маркетинг</Link>
                <Link>Твиттер для бизнеса</Link>
                <Link>Разработчикам</Link>
                <Link>Каталог</Link>
                <Link>Настройки</Link>
                <Typography>© Twitter, Inc., 2022.</Typography>
            </div>
            {/*<div>*/}
            {/*  <Link>Каталог</Link>*/}
            {/*  <Link>Настройки</Link>*/}
            {/*  <Typography>© Twitter, Inc., 2022.</Typography>*/}
            {/*</div>*/}
        </div>
    )
}