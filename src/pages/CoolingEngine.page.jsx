import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SliderComponent from "../components/Slider.component";
import {GlobalContext} from "../context/Main.context";
import {Link} from "react-router-dom";
import ButtonCstm from "../components/Button.component";
import SliderCardMain from "../components/SliderCardMain.component";


const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    hrContainer: {
        ["@media (max-width: 880px)"]: {
            width: '75%'
        },
    },
    headers: {
        color: '#FFF',
        textTransform: 'uppercase',
        '& h1': {
            fontSize: '2.5rem'
        },

        ["@media (max-width: 880px)"]: {
            '& h1': {
                fontSize: '1.75rem'
            },
        },

        ["@media (max-width:480px)"]: {
            '& h1': {
                fontSize: '1.5rem'
            }
        }
    },
    imageContainer: {
        ["@media (max-width: 880px)"]: {
            display: 'none'
        }
    },
    subHeaderContainer: {

        ["@media (max-width: 880px)"]: {
            paddingLeft: 0
        }
    },
    subHeader: {
        '& h1': {
            color: '#FFF'
        },


    },
    galleryContainer: {
        padding: '2.5% 7.5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1rem',

        '& img': {
            objectFit: 'cover',
            width: '100%',
            maxHeight: '100%'
        },

        ["@media (max-width: 880px)"]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
    menuContainer: {

        '& img': {
            maxWidth: '100%',
        },
        ["@media (max-width: 690px)"]: {
            flexDirection: 'column'
        }
    },
    imageSide: {

        ["@media (max-width: 1080px)"]: {
            width: '50%',
        },
        ["@media (max-width: 690px)"]: {
            width: '100%',
            paddingTop: 0
        }
    },
    boxLeft: {
        width: "50%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '2rem',

        "& p": {
            fontSize: "1.525rem",
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: "2.25rem"
        },

        "& h1": {
            fontWeight: "bold",
            fontSize: "2.9rem",
            lineHeight: "3.5rem"
        },

        '& .headerMd': {
            display: 'none'
        },

        ["@media (max-width: 880px)"]: {

            padding: 0,

            "& p": {
                fontSize: "1.25rem",
                lineHeight: "2rem"
            },

            "& h1": {
                fontWeight: "bold",
                fontSize: "2rem",
                lineHeight: "2.75rem"
            },
        },
        ["@media (max-width: 690px)"]: {
            width: '100%',

            '& .headerLg': {
                display: 'none'
            },

            '& .headerMd': {
                display: 'inline-block'
            }
        },
        ["@media (max-width: 480px)"]: {
            "& p": {
                fontSize: "1rem",
            },

            "& h1": {
                fontWeight: "bold",
                fontSize: "1.5rem",
                lineHeight: "2rem"
            },
        }
    },
    btnCatalog: {
        display: 'none',
        width: '100%',
        ["@media (max-width: 690px)"]: {
            display: 'flex',
        }
    }
});

const CoolingEnginePage = () => {
    const classes = useStyles();
    const {coolingEnginePageInfo, fetchCEPage} = useContext(GlobalContext);

    useEffect(() => {

        fetchCEPage();
    }, [coolingEnginePageInfo])

    return (
        <>
            {coolingEnginePageInfo.length < 1
                ? <h1>Loading...</h1>
                : (
                    <Box bgcolor="#1F1F23" pl={'3rem'} pr={'3rem'}>
                        <Box bgcolor="#1F1F23" pt={'8rem'} display='flex' className={classes.menuContainer}>
                            <Box width="50%" pt={"2rem"} display='flex' alignItems='center'
                                 justifyContent='center'
                                 className={`${classes.imageSide}`}>
                                <Box>
                                    <img src={coolingEnginePageInfo.mainSection.imageUrl}
                                         alt={`${coolingEnginePageInfo.mainSection.header}`}/>
                                </Box>
                            </Box>
                            <Box className={classes.boxLeft}>
                                <h1 className={'headerLg'}>{coolingEnginePageInfo.mainSection.header}</h1>
                                <p>{coolingEnginePageInfo.mainSection.text}</p>
                                <h1 className={'headerMd'}>{coolingEnginePageInfo.mainSection.header}</h1>
                                <Box className={classes.btnCatalog}>
                                    <Link to='' style={{width: '100%'}}>
                                        <ButtonCstm width={'100%'} height={'3rem'}>
                                            {coolingEnginePageInfo.mainSection.btnText}
                                        </ButtonCstm>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                            <hr className={classes.hr}/>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Box height='60%' className={classes.headers} display='flex'
                                 alignItems='center' justifyContent='flex-end'>
                                <h1>{coolingEnginePageInfo.section1.header}</h1>
                            </Box>
                            <Box width='40%' display='flex' alignItems='center'
                                 justifyContent='flex-start' className={classes.imageContainer}>
                                <img style={{maxWidth: '100%'}}
                                     src={coolingEnginePageInfo.section1.imageUrl} alt=""/>
                            </Box>
                        </Box>
                        <Box bgcolor='#FFF'>
                            <SliderCardMain data={coolingEnginePageInfo.section1.content}/>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Box height='60%' className={classes.headers} display='flex'
                                 alignItems='center' justifyContent='flex-end'>
                                <h1>{coolingEnginePageInfo.section2.header}</h1>
                            </Box>
                            <Box width='40%' display='flex' alignItems='center'
                                 justifyContent='flex-start' className={classes.imageContainer}>
                                <img style={{maxWidth: '100%'}}
                                     src={coolingEnginePageInfo.section2.imageUrl} alt=""/>
                            </Box>
                        </Box>
                        <Box bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section2.content} perSlideView={4}/>
                        </Box>
                        <Box display='flex'>

                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box height='60%' className={classes.headers} display='flex'
                                     alignItems='center' justifyContent='flex-end'>
                                    <h1>{coolingEnginePageInfo.section3.header}</h1>
                                </Box>
                                <Box width='40%' display='flex' alignItems='center'
                                     justifyContent='flex-start' className={classes.imageContainer}>
                                    <img style={{maxWidth: '100%'}}
                                         src={coolingEnginePageInfo.section3.imageUrl} alt=""/>
                                </Box>
                            </Box>
                        </Box>
                        <Box bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section3.content} perSlideView={4}/>
                        </Box>
                        <Box display='flex'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box height='60%' className={classes.headers} display='flex'
                                     alignItems='center' justifyContent='flex-end'>
                                    <h1>{coolingEnginePageInfo.section4.header}</h1>
                                </Box>
                                <Box width='40%' display='flex' alignItems='center'
                                     justifyContent='flex-start' className={classes.imageContainer}>
                                    <img style={{maxWidth: '100%'}}
                                         src={coolingEnginePageInfo.section4.imageUrl} alt=""/>
                                </Box>
                            </Box>
                        </Box>
                        <Box bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section4.content} perSlideView={3}/>
                        </Box>
                        <Box display='flex'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box height='60%' className={classes.headers} display='flex'
                                     alignItems='center' justifyContent='flex-end'>
                                    <h1>{coolingEnginePageInfo.section5.header}</h1>
                                </Box>
                                <Box width='40%' display='flex' alignItems='center'
                                     justifyContent='flex-start' className={classes.imageContainer}>
                                    <img style={{maxWidth: '100%'}}
                                         src={coolingEnginePageInfo.section5.imageUrl} alt=""/>
                                </Box>
                            </Box>
                        </Box>
                        <Box bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section5.content} perSlideView={1}/>
                        </Box>
                        <Box width='80%' pl={'5.5rem'} pt={'5rem'} className={classes.subHeaderContainer}>
                            <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                <h1>{coolingEnginePageInfo.refDoors.header}</h1>
                            </Box>
                            <Box width='25%' className={classes.hrContainer}>
                                <hr className={classes.hr}/>
                            </Box>
                        </Box>
                        <Box width='100%' mt='3rem'>
                            <Box
                                className={classes.galleryContainer}
                            >
                                {
                                    coolingEnginePageInfo.refDoors.content.map(el => <img src={el.imageUrl} alt=""/>)
                                }
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </>
    );
};

export default CoolingEnginePage;
