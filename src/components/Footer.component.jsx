import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import {YMaps, Map, Placemark, GeolocationControl} from 'react-yandex-maps';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import GuardIcon from "../assets/guardSymbol.svg";

const useStyles = makeStyles({
    root: {
        paddingTop: "10rem",

        "& h1": {
            color: "white",
            margin: 0,
            padding: 0,
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "3.5rem"
        }
    },
    contactBox: {
        color: "#FFF",
        backgroundClip: "padding-box",
        borderLeft: "solid 2px",
        borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
        borderImageSlice: 1,

        '& h2': {
            fontWeight: '400',
            fontSize: '1.25rem'
        },

        '& p': {
            fontWeight: '600',
            fontSize: '.85rem'
        }
    },
    footerConsult: {
        color: "white",

        '& h1': {}
    },
    consultInfo: {
        fontWeight: 700
    },
    formControl: {
        '& #name': {
            color: 'white !important'
        }
    },
    footerTime: {},
    times: {
        color: "#FFF",

        '& h3': {
            padding: '.5rem 2rem',
            width: 'fit-content',
            background: "#EEB45E",
            borderRadius: ".5rem",
        },

        '& p': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: ".7rem"
        }
    },
    feedback: {
        backgroundColor: "#FFF",
        borderRadius: '.5rem',
        padding: '1.5rem 2rem',
        '& h3': {
            color: "#000",
            padding: 0,
            margin:0,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }, feedback__guard: {}
});


const Footer = () => {
    const classes = useStyles();
    const [inputValues, setInputValues] = useState({name: '', number: ''});

    const inputHandler = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
    }

    return (
        <Box className={classes.root} bgcolor='#1F1F23' p={0} m={0}>
            <Box>
                <Box pl={"3rem"}>
                    <h1>Оставив заявку сейчас, Вы на десять шагов впереди <br/>конкурентов!</h1>
                </Box>
                <Box display='flex' justifyContent="flex-start"
                     alignItems="center" pt={"5rem"}>
                    <Box width="50%" display='flex' pl={"3rem"} justifyContent="flex-start"
                         alignItems="center">
                        <YMaps>
                            <Map style={{height: "400px", width: "600px"}}
                                 defaultState={{center: [41.31115, 69.279737], zoom: 12}}>
                                <GeolocationControl options={{float: 'left'}}/>
                                <Placemark defaultGeometry={[41.31115, 69.279737]}/>
                            </Map>
                        </YMaps>
                    </Box>
                    <Box width="50%" display='flex' alignItems='center' justifyContent='flex-start'>
                        <Box className={classes.contactBox} display='flex' pl={'10rem'}
                             flexDirection='column' alignItems='flex-start' justifyContent='center' height="100%">
                            <Box>
                                <h2>Номер телефона</h2>
                                <p>+998 71 227 88 90</p>
                                <p>+998 97 446 60 44</p>
                            </Box>
                            <Box pt={1}>
                                <h2>Адрес почты</h2>
                                <p>sales@coldindustry.uz</p>
                            </Box>
                            <Box pt={1}>
                                <h2>Наше местоположение</h2>
                                <p>Ташкент, ул. Норазтепа, 64</p>
                            </Box>
                            <Box pt={1}>
                                <h2>Время работы</h2>
                                <p>пн-пт : с 9:00 до 18:00 сб : с 9:00 до 14:00</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.footerConsult}>
                    <Box pl={'3rem'} pt={'4rem'} className={classes.consultInfo}>
                        <h1>Заявка на консультацию</h1>
                        <p>После заполнения мы перезвоним вам в течение <span style={{color: '#F3D942'}}>10 минут</span>
                        </p>
                    </Box>
                    <Box pl={'3rem'}>
                        <form className={classes.formControl} noValidate autoComplete="off">
                            <Box width="100%" display="flex">
                                <Box width="50%">
                                    <h2>Ваше Имя</h2>
                                    <TextField id="name" name='name' label="Имя" value={inputValues.name}
                                               onChange={inputHandler}/>
                                </Box>
                                <Box width="50%">
                                    <h2>Номер телефона</h2>
                                    <TextField id="phone" name='phone' label="Номер телфона" value={inputValues.phone}
                                               onChange={inputHandler}/>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                    <Box widtht="100%" display="flex" pl={'3rem'}>
                        <Box width="50%">
                            <Box className={classes.footerTime}>
                                <h2>Удобное время</h2>
                                <Box display="flex" justifyContent='flex-start'>
                                    <Box className={classes.times}>
                                        <h3>10</h3>
                                        <p>Часы</p>
                                    </Box>
                                    <Box pl={'2rem'} className={classes.times}>
                                        <h3>00</h3>
                                        <p>Минуты</p>
                                    </Box>
                                    <Box pl={'2rem'} className={classes.times}>
                                        <h3>3 сентября, 2020</h3>
                                        <p>Дата Посещения</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box width="50%">
                            <Box display="flex" height="100%" justifyContent="flex-start" alignItems="center">
                                <Box mt={'.5rem'} width='50%'>
                                    <Box className={classes.feedback}>
                                        <h3>Обратный звонок</h3>
                                    </Box>
                                </Box>
                                <Box width='50%' className={classes.feedback__guard} display='flex' pl={'2rem'}
                                     alignItems='center'>
                                    <Box>
                                        <img src={GuardIcon} alt="Guard Icon"/>
                                    </Box>
                                    <Box pl={'1rem'}>
                                        <p>Ваши данные не будут <br/>
                                            переданы третьим лицам</p>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
