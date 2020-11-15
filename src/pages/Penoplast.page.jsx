import React from 'react';
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {PenoplastInfo} from "../data/InfoText.json";
import makeStyles from "@material-ui/core/styles/makeStyles";

import HeroImage from "../assets/Penoplast/HeroImage.png";
import SubImage1 from "../assets/Penoplast/SubImage1.png";
import SubImage2 from "../assets/Penoplast/SubImage2.png";


const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    heroSection: {
        "& p": {
            fontSize: "1.525rem",
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: "2.25rem"
        },

        "& h1": {
            fontWeight: "bold",
            fontSize: "2.9rem",
            lineHeight: "3.5rem",
            color: '#FFF'
        }
    },
    textlist: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
        paddingRight: '5rem',

        '& ul': {
            lineHeight: '2rem',
            padding: 0,
            margin: 0
        },

        '& li': {
            listStyle: 'none',
            fontStyle: 'normal',
        },

        '&.info': {
            flexDirection: 'column',
            fontSize: '1.25rem',
        },

        "& h1": {
            fontStyle: 'normal'
        },
        "& h3": {
            fontStyle: 'normal',
            fontSize: '1.25rem'
        }
    },
});

const PenoplastPage = () => {
    const classes = useStyles();

    return (
        <>
            <Box bgcolor="#1F1F23">
                <Box className={classes.heroSection} pt={'10rem'}>
                    <Box display='flex'>
                        <Grid lg={7}>
                            <Box pl={'5rem'}>
                                <img src={HeroImage} style={{height: '500px', width: '700px'}} alt=""/>
                            </Box>
                        </Grid>
                        <Grid lg={5} className={classes.textlist}>
                            <Box ml={'5rem'} display='flex' alignItems='center' justifyContent='center'>
                                <Box>
                                    <h1>{PenoplastInfo.mainH.header}</h1>
                                    <Box pt={'2rem'}>
                                        <p>{PenoplastInfo.mainH.text}</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box display='flex' mt={'7rem'}>
                    <Box width='40%' pl={'30%'}>
                        <hr className={classes.hr}/>
                    </Box>
                </Box>
                <Box bgcolor="#1F1F23" mt={'3rem'} display='flex'>
                    <Grid lg={6}>
                        <Box className={`${classes.textlist} info`} ml={'5.5rem'}>
                            <h3>{PenoplastInfo.subMenu.header1}</h3>
                            <Box>
                                <ul>
                                    {PenoplastInfo.subMenu.text.map(item => <li>{item}</li>)}
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid lg={6}>
                        <Box>
                            <img src={SubImage1} style={{width: '640px', height: '220px'}} alt=""/>
                        </Box>
                        <Box display='flex' mt={'.5rem'}>
                            <Box>
                                <img src={SubImage2} style={{width: '315px', height: '220px'}} alt=""/>
                            </Box>
                            <Box pl={'10px'}>
                                <img src={SubImage2} style={{width: '315px', height: '220px'}} alt=""/>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Box className={`${classes.textlist} info`} ml={'5.5rem'}>
                    <Grid lg={6}>
                        <h3>{PenoplastInfo.subMenu.header2}</h3>
                        <h3>{PenoplastInfo.subMenu.header3}</h3>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

const PenoplastPageRenderer = () => {
    return (
        <div>
            <Header/>
            <PenoplastPage/>
            <Footer/>
        </div>
    );
};

export default PenoplastPageRenderer;
