import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import {YMaps, Map, Placemark, GeolocationControl} from 'react-yandex-maps';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
    root: {
        paddingTop: "5rem",

        "& h1": {
            color: "white",
            margin: 0,
            padding: 0,
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "3.5rem"
        },
        ["@media (max-width:600px)"]: {
            '& h1': {
                fontSize: '2rem'
            }
        }
    },
    formControl: {
        '& #name': {
            color: 'white !important'
        }
    },
    textfield: {
        '& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl': {
            '&:before': {
                borderBottomColor: '#FFF !important',
                color: 'grey'
            }
        },
        '& .MuiFormLabel-root, .MuiInputLabel-root, .MuiInputLabel-formControl, .MuiInputLabel-animated': {
            color: '#FFF'
        },
        '& label.Mui-focused': {
            color: '#FFF',
        },
        '& .MuiInput-underline': {
            color: '#FFF',
            borderBottomColor: '#FFF',
        },
        '& .MuiInput-underline:after': {
            color: '#FFF',
            borderBottomColor: '#FFF',
        },

        '& .MuiOutlinedInput-root': {
            color: '#FFF',
            '& fieldset': {
                borderColor: '#FFF',
            },
            '&:hover fieldset': {
                borderColor: '#FFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFF',
            },
        }
    },
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
            margin: 0,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }, feedback__guard: {
        paddingBottom: '5rem'
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
        },

        ["@media (max-width:600px)"]: {
            borderLeft: "none",
            borderTop: "solid 2px",
            paddingLeft: '0',
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '1rem',

            '& > div': {
                width: '100%',
                margin: 0,
                padding: 0
            }
        },

        ["@media (max-width:450px)"]: {
            gridTemplateColumns: '1fr',
            gridGap: 0,
        }
    },
    bottomTime: {
        ["@media (max-width:1120px)"]: {
            flexDirection: 'column',
            alignItems: 'center',

            '& > div': {
                width: '100%',
            }
        }
    },
    footerTime: {
        ["@media (max-width:1120px)"]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        ["@media (max-width:450px)"]: {
            alignItems: 'center',
        }
    },
    mapAndContacts: {
        '& .yamap': {
            height: '400px',
            width: '90%'
        },

        ["@media (max-width:600px)"]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '1rem',

            '& > div': {
                width: '100%'
            },

            '& .yamap': {
                width: '100%'
            }

        }
    },
    footerConsult: {
        color: "white",

        ["@media (max-width:600px)"]: {
            paddingTop: '1rem'
        }
    },
    formItems: {
        ["@media (max-width:600px)"]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            '& div': {
                width: '100%'
            }
        }
    },
    footerContainer: {
        ["@media (max-width:600px)"]: {
            paddingLeft: 0
        }
    },
    footerItems: {
        ["@media (max-width:600px)"]: {
            flexDirection: 'column',
            alignItems: 'flex-start',

            '& div': {
                paddingLeft: 0,
                display: 'flex',
                gap: '.5rem'
            }
        },
        ["@media (max-width:450px)"]: {
            '& div': {
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0
            },

            '& h3': {
                padding: '0.5rem 2rem',
                margin: 0
            }
        }
    },
    footerItems2: {
        ["@media (max-width:600px)"]: {
            flexDirection: 'column',
            alignItems: 'center',

            '& > div': {
                width: '80%'
            }
        },
        ["@media (max-width:450px)"]: {
            '& > div': {
                width: '100%'
            }
        }
    },
    consultInfo: {
        fontWeight: 700,
    },
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
                     alignItems="center" pt={"5rem"} pl={"3rem"} pr={"3rem"} className={classes.mapAndContacts}>
                    <Box width="50%" display='flex' justifyContent="flex-start"
                         alignItems="center">
                        <YMaps>
                            <Map className={'yamap'}
                                 defaultState={{center: [41.31115, 69.279737], zoom: 12}}>
                                <GeolocationControl options={{float: 'left'}}/>
                                <Placemark defaultGeometry={[41.31115, 69.279737]}/>
                            </Map>
                        </YMaps>
                    </Box>
                    <Box width="50%" display='flex' alignItems='center' justifyContent='flex-start'>
                        <Box className={classes.contactBox} display='flex' pl={'30%'}
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
                <Box className={classes.footerConsult} pl={'3rem'} pr={'3rem'} pt={'4rem'}>
                    <Box className={classes.consultInfo}>
                        <h1>Заявка на консультацию</h1>
                        <p>После заполнения мы перезвоним вам в течение <span style={{color: '#F3D942'}}>10 минут</span>
                        </p>
                    </Box>
                    <Box pl={'3rem'} className={classes.footerContainer}>
                        <Box>
                            <form className={classes.formControl} noValidate autoComplete="off">
                                <Box width="100%" display="flex" className={classes.formItems}>
                                    <Box width="50%">
                                        <h2>Ваше Имя</h2>
                                        <TextField className={classes.textfield} id="name" name='name' label="Имя"
                                                   value={inputValues.name}
                                                   onChange={inputHandler}/>
                                    </Box>
                                    <Box width="50%">
                                        <h2>Номер телефона</h2>
                                        <TextField className={classes.textfield}
                                                   id="phone" name='phone'
                                                   label="Номер телфона" value={inputValues.phone}
                                                   onChange={inputHandler}/>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                        <Box widtht="100%" display="flex" pb={'1rem'} className={classes.bottomTime}>
                            <Box width="50%">
                                <Box className={classes.footerTime}>
                                    <h2>Удобное время</h2>
                                    <Box display="flex" justifyContent='flex-start' className={`${classes.footerItems} timers`}>
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
                                <Box display="flex" height="100%" justifyContent="flex-start" alignItems="center"
                                     className={classes.footerItems2}>
                                    <Box mt={'.5rem'} width='50%'>
                                        <Box className={classes.feedback}>
                                            <h3>Обратный звонок</h3>
                                        </Box>
                                    </Box>
                                    <Box width='50%' display='flex' pl={'2rem'}
                                         alignItems='center'>
                                        <Box>
                                            <img src={'./images/guardSymbol.svg'} alt="Guard Icon"/>
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
        </Box>
    );
};

export default Footer;
