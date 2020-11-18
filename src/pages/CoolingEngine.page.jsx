import React from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeShowCard from "../components/HomeShowCat.component";
import {CoolingEngineInfo} from "../data/InfoText.json";
import HeroImageS1 from "../assets/CoolingEngine/HeroImageS1.png";
import SubImage1 from "../assets/CoolingEngine/1.png";
import SubImage3 from "../assets/CoolingEngine/3.png";
import SubImage8 from "../assets/CoolingEngine/8.png";
import SubImage13 from "../assets/CoolingEngine/13.png";
import SubImage17 from "../assets/CoolingEngine/17.png";
import CoolingDoor1 from "../assets/CoolingEngine/CoolingDoor1.png";
import CoolingDoor2 from "../assets/CoolingEngine/CoolingDoor2.png";
import CoolingDoor3 from "../assets/CoolingEngine/CoolingDoor3.png";
import CoolingDoor4 from "../assets/CoolingEngine/CoolingDoor4.png";
import Grid from "@material-ui/core/Grid";
import SliderComponent from "../components/Slider.component";


const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    headers: {
        color: '#FFF',
        textTransform: 'uppercase',
        '& h1': {
            fontSize: '2.5rem'
        }
    },
    subHeader: {
        '& h1': {
            color: '#FFF'
        }
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
        }
    },
});

const CoolingEnginePage = () => {
    const classes = useStyles();

    return (
        <>
            <Box bgcolor="#1F1F23">
                <Box pt={'5rem'} pl={'3rem'}>
                    <HomeShowCard
                        header={CoolingEngineInfo.mainSection.header}
                        text={CoolingEngineInfo.mainSection.text}
                        imageUrl={HeroImageS1}
                        imageHeight='30rem'
                        imageWidth='38rem'
                        leftSideText
                    />
                </Box>
                <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                    <hr className={classes.hr}/>
                </Box>
                <Box display='flex'>
                    <Grid lg={6}>
                        <Box height='100%' pl={'5rem'} className={classes.headers} display='flex' alignItems='center' justifyContent='flex-start'>
                            <h1>{CoolingEngineInfo.section1.header}</h1>
                        </Box>
                    </Grid>
                    <Grid lg={6} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <img style={{height: '300px', width:'520px'}} src={SubImage1} alt=""/>
                        </Box>
                    </Grid>
                </Box>
                <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                    <SliderComponent perSlideView={1}/>
                </Box>
                <Box display='flex'>
                    <Grid lg={6}>
                        <Box height='100%' pl={'5rem'} className={classes.headers} display='flex' alignItems='center' justifyContent='flex-start'>
                            <h1>{CoolingEngineInfo.section2.header}</h1>
                        </Box>
                    </Grid>
                    <Grid lg={6} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <img style={{height: '250px', width:'440px'}} src={SubImage3} alt=""/>
                        </Box>
                    </Grid>
                </Box>
                <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                    <SliderComponent perSlideView={4}/>
                </Box>
                <Box display='flex'>
                    <Grid lg={6}>
                        <Box height='100%' pl={'5rem'} className={classes.headers} display='flex' alignItems='center' justifyContent='flex-start'>
                            <h1>{CoolingEngineInfo.section3.header}</h1>
                        </Box>
                    </Grid>
                    <Grid lg={6} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <img style={{height: '300px', width:'520px'}} src={SubImage8} alt=""/>
                        </Box>
                    </Grid>
                </Box>
                <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                    <SliderComponent perSlideView={4}/>
                </Box>
                <Box display='flex'>
                    <Grid lg={6}>
                        <Box height='100%' pl={'5rem'} className={classes.headers} display='flex' alignItems='center' justifyContent='flex-start'>
                            <h1>{CoolingEngineInfo.section4.header}</h1>
                        </Box>
                    </Grid>
                    <Grid lg={6} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <img style={{height: '250px', width:'440px'}} src={SubImage13} alt=""/>
                        </Box>
                    </Grid>
                </Box>
                <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                    <SliderComponent perSlideView={3}/>
                </Box>
                <Box display='flex'>
                    <Grid lg={6}>
                        <Box height='100%' pl={'5rem'} className={classes.headers} display='flex' alignItems='center' justifyContent='flex-start'>
                            <h1>{CoolingEngineInfo.section5.header}</h1>
                        </Box>
                    </Grid>
                    <Grid lg={6} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <img style={{height: '300px', width:'520px'}} src={SubImage17} alt=""/>
                        </Box>
                    </Grid>
                </Box>
                <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                    <SliderComponent perSlideView={2}/>
                </Box>
                <Box width='80%' pl={'5.5rem'} pt={'5rem'}>
                    <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                        <h1>Холодильные двери</h1>
                    </Box>
                    <Box width='25%'>
                        <hr className={classes.hr}/>
                    </Box>
                </Box>
                <Box width='100%' mt='3rem'>
                    <Box
                        className={classes.galleryContainer}
                    >
                        <img src={CoolingDoor1}
                             alt="Cooling door 1"/>
                        <img src={CoolingDoor2}
                             alt="Cooling door 2"/>
                        <img src={CoolingDoor3}
                             alt="Cooling door 3"/>
                        <img src={CoolingDoor4}
                             alt="Cooling door 4"/>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CoolingEnginePage;
