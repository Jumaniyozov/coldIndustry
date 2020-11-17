import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {DoorInfo} from "../data/InfoText.json";

//Images
import HeroImageDoors from '../assets/Doors/HeroImageDoors.png';
import DoorLogoSvg from '../assets/Doors/DoorLogo.svg';
import LittleSigns from '../assets/Doors/LittleSigns.png';

import CarouselDoorImage1 from "../assets/Doors/carousel/1.png";
import CarouselDoorImage2 from "../assets/Doors/carousel/2.png";
import CarouselDoorImage3 from "../assets/Doors/carousel/3.png";
import CarouselDoorImage4 from "../assets/Doors/carousel/4.png";
import CarouselDoorImage5 from "../assets/Doors/carousel/5.png";
import CarouselDoorImage6 from "../assets/Doors/carousel/6.png";
import CarouselDoorImage7 from "../assets/Doors/carousel/7.png";
import CarouselDoorImage8 from "../assets/Doors/carousel/8.png";
import CarouselDoorImage9 from "../assets/Doors/carousel/9.png";
import CarouselDoorImage10 from "../assets/Doors/carousel/10.png";
import DoorInsideStyle1 from "../assets/Doors/DoorInsideStyles/DoorInsideStyle1.png";
import DoorShowcase1 from "../assets/Doors/DoorShowcase1.svg";
import DoorShowcase2 from "../assets/Doors/DoorShowcase2.svg";
//

// Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
        paddingRight: '5rem',

        '&.cataloglist': {
            fontSize: '1.25rem',
            fontStyle: 'normal',
            justifyContent: 'flex-start',

            '& a': {
                fontWeight: 600,
                fontStyle: 'italic',
            }
        },

        "& h1": {
            fontStyle: 'normal'
        }
    },
    optionlist: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        listStyle: 'none',
        color: '#FFF',
        fontSize: '1.25rem',
        lineHeight: '2.5rem',
        margin: 0,
        padding: 0,

        '&.doorlist': {
            fontSize: '1rem',
            lineHeight: '3.5rem',
            '& li': {
                fontWeight: 400,
            }
        },

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
    },
    galleryContainer: {
        padding: '2.5% 7.5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 400px)',
        gridGap: '1rem',

        '& img': {
            objectFit: 'cover',
            width: '100%',
            maxHeight: '100%'
        }
    },
    dividegallery: {
        padding: '0 0 0 1rem',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 200px)',


        '& img': {
            objectFit: 'cover',
            width: '100%',
            maxHeight: '100%'
        }
    },
    paginationText: {
            display: 'flex',
            justifyContent: 'flex-end',
        gap: '.75rem',
            fontSize: '1.5rem',
            color: '#FFF',
            fontWeight: '300',

            "& h1": {
                fontStyle: 'normal'
            }
    },
    nextIcon: {
        fontSize: '2rem',
        fill: '#D6B600',

        '&.reverse': {
            transform: 'rotate(-180deg)'
        }
    },
    subHeader: {
        '& h1': {
            color: '#FFF'
        }
    },
});

const DoorPage = () => {
    const classes = useStyles();

    return (
        <>
            <Box bgcolor="#1F1F23">
                <Box className={classes.heroSection} pt={'10rem'}>
                    <Box display='flex'>
                        <Grid lg={7}>
                            <Box pl={'3rem'}>
                                <img src={HeroImageDoors} style={{height: '500px', width: '800px'}} alt=""/>
                            </Box>
                        </Grid>
                        <Grid lg={5} className={classes.textlist}>
                            <Box ml={'5rem'} display='flex' alignItems='center' justifyContent='center'>
                                <Box>
                                    <img src={DoorLogoSvg} alt=""/>
                                    <h1>{DoorInfo.mainH.header}</h1>
                                    <p>{DoorInfo.mainH.text}</p>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box display='flex' mt={'8rem'}>
                    <Box width='60%' pl={'10%'}>
                        <hr className={classes.hr}/>
                    </Box>
                    <Box ml={'2rem'}>
                        <img style={{height: '70px'}} src={LittleSigns} alt=""/>
                    </Box>
                </Box>
                <Box className={classes.heroSection}>
                    <Box ml={'8rem'} mt={'3rem'}>
                        <h1>{DoorInfo.subMenu.header}</h1>
                    </Box>
                    <Box display='flex' mt={'3rem'}>
                        <Grid lg={5}>
                            <Box pl={'8rem'}>
                                <ul className={classes.optionlist}>
                                    {DoorInfo.subMenu.options.map(sb => <li>{sb.header}</li>)}
                                </ul>
                            </Box>
                        </Grid>
                        <Grid lg={7} className={classes.textlist}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                                <Box>
                                    {DoorInfo.subMenu.options[0].text}
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box width='100%' mt='8rem'>
                    <Box
                        className={classes.galleryContainer}
                    >
                        <img src={CarouselDoorImage1}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage2}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage3}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage4}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage5}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage6}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage7}
                             alt="sandwich sub image1"/>
                        <img src={CarouselDoorImage8}
                             alt="sandwich sub image1"/>

                        <Box height='100%' display='flex' flexDirection='column' className={classes.dividegallery}>
                            <img src={CarouselDoorImage9}
                                 alt="sandwich sub image1"/>

                            <img src={CarouselDoorImage10}
                                 alt="sandwich sub image1"/>
                        </Box>
                    </Box>
                    <Box className={classes.paginationText} pr={'8rem'}>
                        <p>Страница</p>
                        <p><PlayArrowIcon className={`${classes.nextIcon} reverse`}/></p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p><PlayArrowIcon className={`${classes.nextIcon} `}/></p>
                    </Box>
                </Box>
                <Box width='80%' pl={'5.5rem'} pt={'3rem'}>
                    <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                        <h1>{DoorInfo.subMenu.header}</h1>
                    </Box>
                    <Box width='35%'>
                        <hr className={classes.hr}/>
                    </Box>
                </Box>
                <Box pl={'5.5rem'} mt={'3rem'}>
                    <Box className={classes.textlist}>
                        <p>{DoorInfo.subMenu.text}</p>
                    </Box>
                </Box>
                <Box display='flex'>
                    <Grid lg={5}>
                        <Box pl={'8rem'}>
                            <ul className={`${classes.optionlist} doorlist`}>
                                {DoorInfo.doorlist.map(sb => <li>{sb.header}</li>)}
                            </ul>
                        </Box>
                    </Grid>
                    <Grid lg={7} className={classes.textlist}>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Box>
                                <img src={DoorInsideStyle1} style={{height: '500px'}} alt=""/>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Box width='80%' pl={'5.5rem'} pt={'3rem'}>
                    <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                        <h1>Варианты изготовления дверей</h1>
                    </Box>
                    <Box width='50%'>
                        <hr className={classes.hr}/>
                    </Box>
                </Box>
                <Box pt='3rem' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                    <Box >
                        <img src={DoorShowcase1} alt=""/>
                    </Box>
                    <Box mt='2rem'>
                        <img src={DoorShowcase2} alt=""/>
                    </Box>
                </Box>
                <Box width='80%' pl={'5.5rem'} pt={'5rem'}>
                    <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                        <h1>Наш каталог</h1>
                    </Box>
                    <Box width='25%'>
                        <hr className={classes.hr}/>
                    </Box>
                </Box>
                <Box ml={'5.5rem'} className={`${classes.textlist} cataloglist`}>
                    <Box display='flex' alignItems='center' flexDirection='column'>
                        <p>Межкомнатные двери</p>
                        <a>Cкачать</a>
                    </Box>
                    <Box ml={'2rem'} display='flex' alignItems='center' flexDirection='column'>
                        <p>Промышленные двери</p>
                        <a>Cкачать</a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


const DoorPageRendered = () => {
    return (
        <div>
            <DoorPage/>
        </div>
    );
};

export default DoorPageRendered;
