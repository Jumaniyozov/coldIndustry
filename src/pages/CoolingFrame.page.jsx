import React, {useContext, useEffect, useState} from 'react';
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import {GlobalContext} from "../context/Main.context";

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

        '&.changer': {
            '& p': {
                padding: 0,
                margin: 0
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
            background: 'linear-gradient(to right, #D38716 0%, #D6B600 100%)',
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
    imageGridContainer: {
      flexWrap: 'nowrap',
        gap: '1.5rem'
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
    const {coolingFramePageInfo, fetchCFPage} = useContext(GlobalContext);


    const [subText, setSubText] = useState(0);

    const handleSubText = (event, index) => {
        const currentClass = document.getElementsByClassName('subTextcf');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        console.log(currentClass);
        event.target.classList.add('active');
        setSubText(index);
    }

    useEffect(() => {
        fetchCFPage();
    }, [coolingFramePageInfo]);

    return (
        <>
            {
                coolingFramePageInfo.length < 1
                    ? <h1>Loading...</h1>
                    :
                    (
                        <>

                            <Box bgcolor="#1F1F23">
                                <Box bgcolor="#1F1F23" pt={'8rem'} pl={'3rem'}>
                                    <HomeShowCard
                                        header={coolingFramePageInfo.mainH.header}
                                        text={``}
                                        imageUrl={coolingFramePageInfo.mainH.imageUrl}
                                        imageHeight='25rem'
                                        imageWidth='38rem'
                                        leftSideText
                                    />
                                </Box>
                                <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'5rem'}>
                                    <Grid container>

                                        <Grid item lg={4}>
                                            <Box pl={'3rem'}>
                                                <ul className={classes.optionlist}>
                                                    {coolingFramePageInfo.subMenu.map((sb, index) => (
                                                        <li className={`subTextcf ${index === 0 ? 'active' : ''}`}
                                                            onClick={e => handleSubText(e, index)}
                                                            key={sb.header}>
                                                            {sb.header}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={8} className={`${classes.textlist} changer`}>
                                            <Box display='flex' alignItems='center' justifyContent='center'>
                                                <Box>
                                                    {Array.isArray(coolingFramePageInfo.subMenu[subText].text)
                                                        ? (coolingFramePageInfo.subMenu[subText].text.map(par =>
                                                            <p>{par}</p>))
                                                        : <p>{coolingFramePageInfo.subMenu[subText].text}</p>
                                                    }
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box width='50%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'5rem'}>
                                    <Grid container>

                                        <Grid item lg={7}>
                                            <Box display='flex' alignItems='center' justifyContent='center'>
                                                <Box>
                                                    <img style={{height: '520px', width: '700px'}}
                                                         src={coolingFramePageInfo.subOption[0].imageUrl}
                                                         alt="sandwich sub image1"/>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={5} className={classes.textlist}>
                                            <Box pl={'5rem'}>
                                                <p>{coolingFramePageInfo.subOption[0].text}</p>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'5rem'}>
                                    <Grid container >

                                        <Grid item lg={5} className={classes.textlist}>
                                            <Box pl={'5rem'}>
                                                <p>{coolingFramePageInfo.subOption[1].text}</p>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={7}>
                                            <Box display='flex' alignItems='center' justifyContent='center' mt={'2rem'}
                                                 pl={'3rem'}>
                                                <Box display='flex' className={classes.imagecontainer}>
                                                    <Grid container className={classes.imageGridContainer}>
                                                        <Grid item>
                                                            <img style={{height: '100%', width: '350px'}}
                                                                 src={coolingFramePageInfo.subOption[1].imageUrl}
                                                                 alt="sandwich sub image1"/>
                                                        </Grid>
                                                        <Grid item
                                                              container
                                                              direction="column"
                                                              justify="space-between"
                                                              alignItems="center"
                                                              className={classes.imagecontainer}
                                                        >
                                                            {
                                                                coolingFramePageInfo.subOption[1].images.map((el) => (
                                                                    <img src={el}
                                                                         style={{height: '220px', width: '330px'}}
                                                                         alt=""/>
                                                                ))
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box width='50%' pl={'3rem'} pt={'5rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'5rem'}>
                                    <Grid container>

                                        <Grid item lg={6}>
                                            <Box display='flex' alignItems='center' justifyContent='center' pr={'8rem'}>
                                                <Box>
                                                    <img style={{height: '400px', width: '600px'}}
                                                         src={coolingFramePageInfo.subOption[2].imageUrl}
                                                         alt="sandwich sub image1"/>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <Box pr={'3rem'}>
                                                <Box className={classes.textlist}>
                                                    <p>{coolingFramePageInfo.subOption[2].text}</p>
                                                </Box>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="space-between"
                                                    alignItems="center"
                                                >
                                                    {
                                                        coolingFramePageInfo.subOption[2].images.map(el => (
                                                            <img src={el}
                                                                 style={{height: '140px', width: '225px'}}
                                                                 alt=""/>
                                                        ))
                                                    }
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'5rem'}>
                                    <Grid lg={6} className={classes.textlist}>
                                        <Box pl={'5rem'}>
                                            <p>{coolingFramePageInfo.subOption[3].text}</p>
                                        </Box>
                                    </Grid>
                                    <Grid lg={6}>
                                        <Box display='flex' alignItems='center' justifyContent='center' pl={'1rem'}
                                             pr={'8rem'}>
                                            <Box>
                                                <img style={{height: '380px', width: '600px'}}
                                                     src={coolingFramePageInfo.subOption[3].imageUrl}
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
                                        <Box ml={'8rem'} display='flex' alignItems='center' justifyContent='center'
                                             pr={'8rem'}>
                                            <Box>
                                                <img style={{height: '400px', width: '400px'}}
                                                     src={coolingFramePageInfo.subOption[4].imageUrl}
                                                     alt="sandwich sub image1"/>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid lg={7} className={classes.textlist}>
                                        <Box pl={'5rem'} display='flex' alignItems='center'>
                                            <p>{coolingFramePageInfo.subOption[4].text}</p>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                                    <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                        <h1>{coolingFramePageInfo.imagesContainer.header}</h1>
                                    </Box>
                                    <Box width='50%'>
                                        <hr className={classes.hr}/>
                                    </Box>
                                </Box>
                                <Box width='100%'>
                                    <Box
                                        className={classes.galleryContainer}
                                    >
                                        {
                                            coolingFramePageInfo.imagesContainer.images.map(el => (
                                                <img src={el}
                                                     alt="sandwich sub image1"/>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )}
        </>
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
