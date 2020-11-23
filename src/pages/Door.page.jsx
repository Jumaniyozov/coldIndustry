import React, {useContext, useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {GlobalContext} from "../context/Main.context";

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

        '& p': {
            margin: 0,
        },

        '&.cataloglist': {
            fontSize: '1.25rem',
            fontStyle: 'normal',
            justifyContent: 'flex-start',

            '& a': {
                fontWeight: 600,
                fontStyle: 'italic',
                textDecoration: 'none',
                color: '#FFF'
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
    const {doorPageInfo, fetchDoorPage} = useContext(GlobalContext);

    const [subText, setSubText] = useState(0);
    const [subDoor, setSubDoor] = useState(0);


    const handleSubText = (event, index) => {
        const currentClass = document.getElementsByClassName('subTextcf');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        event.target.classList.add('active');
        setSubText(index);
    }

    const handleSubDoor = (event, index) => {
        const currentClass = document.getElementsByClassName('subDoorcf');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        event.target.classList.add('active');
        setSubDoor(index);
    }

    useEffect(() => {
        fetchDoorPage()
    }, [doorPageInfo])

    return (
        <>
            {doorPageInfo.length < 1
                ? <h1>Loading...</h1>
                : <>
                    <Box bgcolor="#1F1F23">
                        <Box className={classes.heroSection} pt={'10rem'}>
                            <Box display='flex'>
                                <Grid container>
                                    <Grid item lg={7}>
                                        <Box pl={'3rem'}>
                                            <img src={doorPageInfo.mainH.imageUrl}
                                                 style={{height: '500px', width: '800px'}}
                                                 alt=""/>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={5} className={classes.textlist}>
                                        <Box ml={'5rem'} display='flex' alignItems='center' justifyContent='center'>
                                            <Box>
                                                <img src={doorPageInfo.mainH.secondaryLogo} alt=""/>
                                                <h1>{doorPageInfo.mainH.header}</h1>
                                                <p>{doorPageInfo.mainH.text}</p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box display='flex' mt={'8rem'}>
                            <Box width='60%' pl={'10%'}>
                                <hr className={classes.hr}/>
                            </Box>
                            <Box ml={'2rem'}>
                                <img style={{height: '70px'}} src={doorPageInfo.mainH.littleSign} alt=""/>
                            </Box>
                        </Box>
                        <Box className={classes.heroSection}>
                            <Box ml={'8rem'} mt={'3rem'}>
                                <h1>{doorPageInfo.subMenu.header}</h1>
                            </Box>
                            <Box display='flex' mt={'3rem'}>
                                <Grid container>
                                    <Grid item lg={5}>
                                        <Box pl={'8rem'}>
                                            <ul className={classes.optionlist}>
                                                {doorPageInfo.subMenu.options.map((sb, index) => (
                                                    <li className={`subTextcf ${index === 0 ? 'active' : ''}`}
                                                        onClick={e => handleSubText(e, index)}
                                                        key={sb.header}>
                                                        {sb.header}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={7} className={classes.textlist}>
                                        <Box display='flex' alignItems='center' justifyContent='center'>
                                            <Box>
                                                {Array.isArray(doorPageInfo.subMenu.options[subText].text)
                                                    ? (doorPageInfo.subMenu.options[subText].text.map(par =>
                                                        <p>{par}</p>))
                                                    : <p>{doorPageInfo.subMenu.options[subText].text}</p>
                                                }
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box width='100%' mt='8rem'>
                            <Box
                                className={classes.galleryContainer}
                            >
                                {
                                    doorPageInfo.doorGallery.map(i => (
                                        Array.isArray(i)
                                            ? (
                                                <Box height='100%' display='flex' flexDirection='column'
                                                     className={classes.dividegallery}>
                                                    {i.map(el => (
                                                        <img src={el}
                                                             alt="sandwich sub image1"/>
                                                    ))}
                                                </Box>
                                            ) : (
                                                <img src={i}
                                                     alt=""/>
                                            )
                                    ))
                                }

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
                                <h1>{doorPageInfo.subMenu.header}</h1>
                            </Box>
                            <Box width='35%'>
                                <hr className={classes.hr}/>
                            </Box>
                        </Box>
                        <Box pl={'5.5rem'} mt={'3rem'}>
                            <Box className={classes.textlist}>
                                <p>{doorPageInfo.subMenu.text}</p>
                            </Box>
                        </Box>
                        <Box display='flex'>
                            <Grid container>
                                <Grid item lg={5}>
                                    <Box pl={'8rem'}>
                                        <ul className={`${classes.optionlist} doorlist`}>
                                            {doorPageInfo.doorlist.map((sb, index) => (
                                                <li className={`subDoorcf ${index === 0 ? 'active' : ''}`}
                                                    onClick={e => handleSubDoor(e, index)}
                                                    key={sb.header}>
                                                    {sb.header}
                                                </li>
                                            ))}
                                        </ul>
                                    </Box>
                                </Grid>
                                <Grid item lg={7} className={classes.textlist}>
                                    <Box display='flex' alignItems='center' justifyContent='center'>
                                        <Box>
                                            <img src={doorPageInfo.doorlist[subDoor].imageUrl}
                                                 style={{height: '500px'}} alt=""/>
                                        </Box>
                                    </Box>
                                </Grid>
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
                        <Box pt='3rem' display='flex' justifyContent='center' flexDirection='column'
                             alignItems='center'>
                            <Box>
                                <img src={doorPageInfo.doorShowcase[0]} alt=""/>
                            </Box>
                            <Box mt='2rem'>
                                <img src={doorPageInfo.doorShowcase[1]} alt=""/>
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
                                <p>{doorPageInfo.catalog[0].header}</p>
                                <a href={doorPageInfo.catalog[0].docUrl}
                                   download>Cкачать</a>
                            </Box>
                            <Box ml={'2rem'} display='flex' alignItems='center' flexDirection='column'>
                                <p>{doorPageInfo.catalog[1].header}</p>
                                <a href={doorPageInfo.catalog[1].docUrl}
                                   download>Cкачать</a>
                            </Box>
                        </Box>
                    </Box>
                </>}
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
