import React from 'react';
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import CarFrameS1 from "../assets/CoolingFrame/CarFrameS1.png";
import CarFrameS2 from "../assets/CoolingFrame/CarFrameS2.png";
import CarFrameS3 from "../assets/CoolingFrame/CarFrameS3.png";
import CarFrameS4 from "../assets/CoolingFrame/CarFrameS4.png";
import CarFrameS5 from "../assets/CoolingFrame/CarFrameS5.png";
import CarFrameS6 from "../assets/CoolingFrame/CarFrameS6.png";
import CarFrameS7 from "../assets/CoolingFrame/CarFrameS7.png";
import CarFrameS8 from "../assets/CoolingFrame/CarFrameS8.png";
import CarFrameS9 from "../assets/CoolingFrame/CarFrameS9.png";
import CarFrameS10 from "../assets/CoolingFrame/CarFrameS10.png";
import CarFrameS11 from "../assets/CoolingFrame/CarFrameS11.png";

import CoolingFramesSG1 from "../assets/CoolingFrame/CoolingFramesSG1.png";
import CoolingFramesSG2 from "../assets/CoolingFrame/CoolingFramesSG2.png";
import CoolingFramesSG3 from "../assets/CoolingFrame/CoolingFramesSG3.png";
import CoolingFramesSG4 from "../assets/CoolingFrame/CoolingFramesSG4.png";
import CoolingFramesSG5 from "../assets/CoolingFrame/CoolingFramesSG5.png";
import CoolingFramesSG6 from "../assets/CoolingFrame/CoolingFramesSG6.png";


import {CoolingFrameInfo} from "../data/InfoText.json";

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
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
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
    imagecontainer: {
        gap: '1.5rem'
    },
    galleryContainer: {
        padding: '2.5% 7.5%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '1rem',

        '& img': {
            maxWidth: '100%',
            display: 'block',
            objectFit: 'cover'

        }
        // gridRowGap: '1rem',
    }
});

const FrameRenderer = () => {
    const classes = useStyles();

    return (
        <Box bgcolor="#1F1F23">
            <Box bgcolor="#1F1F23" pt={'8rem'} pl={'3rem'}>
                <HomeShowCard
                    header={CoolingFrameInfo.mainH.header}
                    text={``}
                    imageUrl={CarFrameS1}
                    imageHeight='25rem'
                    imageWidth='38rem'
                    leftSideText
                />
            </Box>
            <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={4}>
                    <Box pl={'3rem'}>
                        <ul className={classes.optionlist}>
                            {CoolingFrameInfo.subMenu.map(sb => <li>{sb.header}</li>)}
                        </ul>
                    </Box>
                </Grid>
                <Grid lg={8} className={classes.textlist}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Box>
                            {CoolingFrameInfo.subMenu[0].text}
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box width='50%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={7}>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Box>
                            <img style={{height: '520px', width: '700px'}} src={CarFrameS2}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={5} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>{CoolingFrameInfo.subOption.text1}</p>
                    </Box>
                </Grid>
            </Box>
            <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={5} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>{CoolingFrameInfo.subOption.text2}</p>
                    </Box>
                </Grid>
                <Grid lg={7}>
                    <Box display='flex' alignItems='center' justifyContent='center' mt={'2rem'} pl={'3rem'}>
                        <Box display='flex' className={classes.imagecontainer}>
                            <Grid>
                                <img style={{height: '100%', width: '350px'}} src={CarFrameS3}
                                     alt="sandwich sub image1"/>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="center"
                                className={classes.imagecontainer}
                            >
                                <img src={CarFrameS4}
                                     style={{height: '220px', width: '330px'}}
                                     alt="sandwich sub image1"/>
                                <img src={CarFrameS5}
                                     style={{height: '220px', width: '330px'}}
                                     alt="sandwich sub image1"/>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box width='50%' pl={'3rem'} pt={'5rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={6}>
                    <Box display='flex' alignItems='center' justifyContent='center' pr={'8rem'}>
                        <Box>
                            <img style={{height: '400px', width: '600px'}} src={CarFrameS6}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={6}>
                    <Box pr={'3rem'}>
                        <Box className={classes.textlist}>
                            <p>{CoolingFrameInfo.subOption.text3}</p>
                        </Box>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <img src={CarFrameS7}
                                 style={{height: '140px', width: '225px'}}
                                 alt="sandwich sub image1"/>
                            <img src={CarFrameS8}
                                 style={{height: '140px', width: '225px'}}
                                 alt="sandwich sub image1"/>
                            <img src={CarFrameS9}
                                 style={{height: '140px', width: '225px'}}
                                 alt="sandwich sub image1"/>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={6} className={classes.textlist}>
                    <Box pl={'5rem'}>
                        <p>{CoolingFrameInfo.subOption.text4}</p>
                    </Box>
                </Grid>
                <Grid lg={6}>
                    <Box display='flex' alignItems='center' justifyContent='center' pl={'1rem'} pr={'8rem'}>
                        <Box>
                            <img style={{height: '380px', width: '600px'}} src={CarFrameS10}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box width='50%' pl={'3rem'} pt={'5rem'} bgcolor="#1F1F23">
                <hr className={classes.hr}/>
            </Box>
            <Box display='flex' mt={'5rem'}>
                <Grid lg={5}>
                    <Box ml={'8rem'} display='flex' alignItems='center' justifyContent='center' pr={'8rem'}>
                        <Box>
                            <img style={{height: '400px', width: '400px'}} src={CarFrameS11}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={7} className={classes.textlist}>
                    <Box pl={'5rem'} display='flex' alignItems='center'>
                        <p>{CoolingFrameInfo.subOption.text5}</p>
                    </Box>
                </Grid>
            </Box>
            <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                    <h1>Галерея</h1>
                </Box>
                <Box width='50%'>
                    <hr className={classes.hr}/>
                </Box>
            </Box>
            <Box width='100%'>
                <Box
                    className={classes.galleryContainer}
                >
                    <img src={CoolingFramesSG1}
                         alt="sandwich sub image1"/>
                    <img src={CoolingFramesSG2}
                         alt="sandwich sub image1"/>
                    <img src={CoolingFramesSG3}
                         alt="sandwich sub image1"/>
                    <img src={CoolingFramesSG4}
                         alt="sandwich sub image1"/>
                    <img src={CoolingFramesSG5}
                         alt="sandwich sub image1"/>
                    <img src={CoolingFramesSG6}
                         alt="sandwich sub image1"/>

                </Box>
            </Box>
        </Box>
    )
}

const CoolingFramePage = () => {
    return (
        <div>
            <FrameRenderer/>
        </div>
    );
};

export default CoolingFramePage;
