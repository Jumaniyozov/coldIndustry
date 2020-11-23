import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeShowCard from "../components/HomeShowCat.component";
import Grid from "@material-ui/core/Grid";
import SliderComponent from "../components/Slider.component";
import {GlobalContext} from "../context/Main.context";


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
    const {coolingEnginePageInfo, fetchCEPage} = useContext(GlobalContext);

    useEffect(() => {
        fetchCEPage();
    }, [coolingEnginePageInfo])

    return (
        <>
            {coolingEnginePageInfo.length < 1
                ? <h1>Loading...</h1>
                : (
                    <Box bgcolor="#1F1F23">
                        <Box pt={'5rem'} pl={'3rem'}>
                            <HomeShowCard
                                header={coolingEnginePageInfo.mainSection.header}
                                text={coolingEnginePageInfo.mainSection.text}
                                imageUrl={coolingEnginePageInfo.mainSection.imageUrl}
                                imageHeight='30rem'
                                imageWidth='38rem'
                                leftSideText
                            />
                        </Box>
                        <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                            <hr className={classes.hr}/>
                        </Box>
                        <Box display='flex'>
                            <Grid container>
                                <Grid item lg={6}>
                                    <Box height='100%' pl={'5rem'} className={classes.headers} display='flex'
                                         alignItems='center' justifyContent='flex-start'>
                                        <h1>{coolingEnginePageInfo.section1.header}</h1>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                        <img style={{height: '300px', width: '520px'}}
                                             src={coolingEnginePageInfo.section1.imageUrl} alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section1.content} soloComponent={true}
                                             perSlideView={1}/>
                        </Box>
                        <Box display='flex'>
                            <Grid container>

                                <Grid item lg={6}>
                                    <Box height='100%' pl={'5rem'} className={classes.headers} display='flex'
                                         alignItems='center' justifyContent='flex-start'>
                                        <h1>{coolingEnginePageInfo.section2.header}</h1>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                        <img style={{height: '250px', width: '440px'}}
                                             src={coolingEnginePageInfo.section2.imageUrl} alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section2.content} perSlideView={4}/>
                        </Box>
                        <Box display='flex'>
                            <Grid container>
                                <Grid item lg={6}>
                                    <Box height='100%' pl={'5rem'} className={classes.headers} display='flex'
                                         alignItems='center' justifyContent='flex-start'>
                                        <h1>{coolingEnginePageInfo.section3.header}</h1>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                        <img style={{height: '300px', width: '520px'}}
                                             src={coolingEnginePageInfo.section3.imageUrl} alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section3.content} perSlideView={4}/>
                        </Box>
                        <Box display='flex'>
                            <Grid container>
                                <Grid item lg={6}>
                                    <Box height='100%' pl={'5rem'} className={classes.headers} display='flex'
                                         alignItems='center' justifyContent='flex-start'>
                                        <h1>{coolingEnginePageInfo.section4.header}</h1>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                        <img style={{height: '250px', width: '440px'}}
                                             src={coolingEnginePageInfo.section4.imageUrl} alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section4.content} perSlideView={3}/>
                        </Box>
                        <Box display='flex'>
                            <Grid container>
                                <Grid item lg={6}>
                                    <Box height='100%' pl={'5rem'} className={classes.headers} display='flex'
                                         alignItems='center' justifyContent='flex-start'>
                                        <h1>{coolingEnginePageInfo.section5.header}</h1>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                        <img style={{height: '300px', width: '520px'}} src={coolingEnginePageInfo.section5.imageUrl} alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor='#FFF'>
                            <SliderComponent data={coolingEnginePageInfo.section5.content} perSlideView={1}/>
                        </Box>
                        <Box width='80%' pl={'5.5rem'} pt={'5rem'}>
                            <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                <h1>{coolingEnginePageInfo.refDoors.header}</h1>
                            </Box>
                            <Box width='25%'>
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
