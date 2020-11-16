import React from 'react';
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import SandwichPanelH1Image from "../assets/SandwichPanel/SandwichPanelH1.png";
import SandwichPanelSub1 from "../assets/SandwichPanel/SandwichPanelSub1.png";
import SandwichPanelSub2 from "../assets/SandwichPanel/SandwichPanelSub2.png";
import SandwichPanelSub3 from "../assets/SandwichPanel/SandwichPanelSub3.png";
import CalcCarcas1 from "../assets/SandwichPanel/CalcCarcas1.png";
import {SandwichPanelInfo} from "../data/InfoText.json";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    optionlist: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        color: '#FFF',
        fontSize: '1.25rem',
        lineHeight: '2.5rem',


        '& li': {
            fontWeight: 700,
            cursor: 'pointer',
            '&:hover, &.active': {
                '-webkitBackgroundClip': 'text',
                backgroundClip: 'text',
                color: 'transparent',
                background: 'linear-gradient(to right, #D38716 , #D6B600)',
            }
        }
    },
    textlist: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
        // marginRight:'3rem',
        paddingRight: '5rem',
    },
    submenu: {
        color: '#FFF',
        fontSize: '1.5rem',
        fontWeight: '300',

        '& p:hover, & p.active': {
            cursor: 'pointer',
            '-webkitBackgroundClip': 'text',
            backgroundClip: 'text',
            color: 'transparent',
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
        }
    }, subHeader: {
        '& h1': {
            color: '#FFF'
        }
    },
    calcsection: {
        position: 'relative',

        '& #inlength': {
            position: 'absolute',
            top: '20%',
            right: '19.5%',
            width: '10%'
        },
        '& #inheight': {
            position: 'absolute',
            top: '60%',
            right: '3%',
            width: '10%'
        },
        '& #inwidth': {
            position: 'absolute',
            bottom: '0%',
            right: '34%',
            width: '10%'
        }
    },
    calccard: {
        backgroundColor: 'rgba(196,196,196, .2)',
        height: '27.5rem',
        width: '20rem',
        padding: '0 1rem',
        borderRadius: '1.5rem',

        '& hr': {
            margin: 0,
            padding: 0,
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
            height: '1.5px',
            border: 'none'
        }
    },
    submenu2: {
        color: '#FFF',
        fontSize: '1rem',
        fontWeight: '300',

        '& p:hover, & p.active': {
            cursor: 'pointer',
            '-webkitBackgroundClip': 'text',
            backgroundClip: 'text',
            color: 'transparent',
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
        },

    },
    calcresults: {
        color: '#FFF',

        '& h2': {
            fontSize: '1.75rem',
            fontWeight: '400',
        },
        '& h3': {
            fontSize: '1.2rem',
            fontWeight: '400',
        }
    },
});

const SandwichRenderer = () => {
    const classes = useStyles();

    return (
        <Box bgcolor="#1F1F23">
            <Box bgcolor="#1F1F23" pt={'8rem'} pl={'3rem'}>
                <HomeShowCard
                    header={SandwichPanelInfo.mainH.header}
                    text={SandwichPanelInfo.mainH.text}
                    imageUrl={SandwichPanelH1Image}
                    imageHeight='25rem'
                    imageWidth='38rem'
                    leftSideText
                />
            </Box>
            <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={4}>
                    <Box pl={'3rem'}>
                        <ul className={classes.optionlist}>
                            <ul className={classes.optionlist}>
                                {SandwichPanelInfo.subMenu.map(sb => <li>{sb.header}</li>)}
                            </ul>
                        </ul>
                    </Box>
                </Grid>
                <Grid lg={8} className={classes.textlist}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Box>
                            <p>{SandwichPanelInfo.subMenu[0].text}</p>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                <Box display='flex' justifyContent='space-between' className={classes.submenu}>
                    <p>Стеновые</p>
                    <p className={`active`}>Кровельные</p>
                </Box>
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={7} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>Сэндвич панели производства «Cold Industry» – это трехслойные панели трапециевидной формы с
                            утеплителем из пенополиуретана (PUR). Применяются в качестве кровельного покрытия для всех
                            типов зданий, уклон крыши которых более 5-7 градусов.
                            Обладают отличными термоизоляционными характеристиками, устойчивы к коррозии.
                            Кровельные сэндвич-панели с наполнителем из пенополиуретана (PUR) используются для
                            перекрытия кровель зданий и сооружений различного назначения. Внешняя поверхность обшивки
                            панелей имеет антикоррозийное полиэфирное покрытие, устойчивое к воздействию атмосферных
                            осадков и ультрафиолетовому излучению.</p>
                    </Box>
                </Grid>
                <Grid lg={5}>
                    <Box display='flex' alignItems='center' justifyContent='center' pr={'3rem'}>
                        <Box>
                            <img style={{height: '400px', width: '500px'}} src={SandwichPanelSub1}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={5}>
                    <Box display='flex' alignItems='center' justifyContent='center' mt={'2rem'} pl={'3rem'}>
                        <Box>
                            <img style={{height: '300px', width: '500px'}} src={SandwichPanelSub2}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={7} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>Структурно кровельная сэндвич-панель являет собой трехслойную конструкцию.
                            Внешние слои панели состоят из обшивки и защитного покрытия.
                            Обшивка кровельной панели сделана из оцинкованных стальных листов 0,4–0,6 мм.
                            В качестве защитного покрытия выступает полиэтиленовая пленка толщиной 0,5 мм, которая
                            предохраняет кровельные панели от механических повреждений.
                            Внутренний слой составляет пространство между листами, которое заполнено пенополиуретаном
                            (PUR) выполняющим роль высококачественного теплоизоляционного материала.
                            Пенополиуретановые компоненты изготовлены европейской компанией Dow Chemical.</p>
                    </Box>
                </Grid>

            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={7} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>Основные параметры:<br/>
                            Поверхность — с одной стороны профиль панели имеет ребра жесткости в виде выступов
                            трапециевидной формы, с другой стороны — гладкий, ровный лист оцинкованный, окрашенный
                            полимерным покрытием.<br/>
                            Наполнитель — используется жесткий пенополиуретан (PUR)<br/>
                            Плотностью - 41-43 кг/м3<br/>
                            Ширина панели — 980 мм.<br/>
                            Длина панели — до 11 000 мм.<br/>
                            Толщина сэндвич панели — 60, 80, 100 мм.<br/>
                            Замковое соединение - ROOF LOCK</p>
                    </Box>
                </Grid>
                <Grid lg={5}>
                    <Box display='flex' alignItems='center' justifyContent='center' pr={'8rem'}>
                        <Box>
                            <img style={{height: '400px', width: '600px'}} src={SandwichPanelSub3}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                    <h1>Калькулятор стоимости</h1>
                </Box>
                <hr className={classes.hr}/>
            </Box>

            <Box display='flex' mt={'5rem'}>
                <Grid lg={7}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Box className={classes.calcsection}>
                            <img style={{height: '400px', width: '600px'}} src={CalcCarcas1}
                                 alt="sandwich sub image1"/>
                            <input type="number" id='inlength'/>
                            <input type="number" id='inheight'/>
                            <input type="numbers" id='inwidth'/>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={5}>
                    <Box pl={'5rem'}>
                        <Card className={classes.calccard}>
                            <Box height='100%' display='flex' flexDirection='column' justifyContent='space-between'>
                                <Box>
                                    <Box display='flex' justifyContent='space-between' className={classes.submenu2}>
                                        <p>Двускатная</p>
                                        <p>Односкатная</p>
                                        <p className={`active`}>Без крыши</p>
                                    </Box>
                                    <hr/>
                                </Box>
                                <Box className={classes.calcresults} mb={'2rem'}>
                                    <h3>Площадь кровли: 77.03 м2</h3>
                                    <h3>Площадь стен: 90.00 м2</h3>
                                    <h2>Итого: 167.03 м2</h2>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

const SandwichPanelPage = () => {
    return (
        <div>
            <SandwichRenderer/>
        </div>
    );
};

export default SandwichPanelPage;
