import React, {useContext, useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {GlobalContext} from "../context/Main.context";
import {Link} from "react-router-dom";
import ButtonCstm from "../components/Button.component";

const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    hrContainer: {

        ["@media (max-width: 820px)"]: {
            padding: 0,
            marginTop: '2rem',

            '& div': {
                width: '100%',
                padding: 0
            },

            '& .imageCnt': {
                display: 'none'
            }
        },
    },
    textSectionContainer: {
        ["@media (max-width: 880px)"]: {
            paddingLeft: 0,
            marginLeft: 0
        },

        ["@media (max-width: 480px)"]: {
            '& h1': {
                fontSize: '2rem !important'
            }
        },
    },
    heroSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    varText: {
        marginTop: '0',

        ["@media (max-width: 880px)"]: {
            display: 'flex',
            flexDirection: 'column',

            '& .catList': {
                width: '100%'
            }
        }
    },
    doorStyles: {
        ["@media (max-width: 880px)"]: {
            alignItems: 'flex-start',

            '& > div': {
                padding: 0,
                margin: 0
            }
        },
        ["@media (max-width: 720px)"]: {
            display: 'none',
        }
    },
    doorStyleItemsContainer: {
        ["@media (max-width: 880px)"]: {
            flexDirection: 'column',

            '& > div': {
                width: '100%'
            }
        }
    },
    optionlist: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        color: '#FFF',
        fontSize: '1.25rem',
        lineHeight: '2.5rem',
        justifyContent: 'flex-start',
        height: '100%',

        '&.doorlist': {
            justifyContent: 'center',
            lineHeight: '3.5rem',
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
        },

        ["@media (max-width: 1280px)"]: {
            fontSize: '1rem',
            // padding: 0,

            '&.doorlist': {
                lineHeight: '2.5rem',
            },
        },
        ["@media (max-width: 880px)"]: {
            fontSize: '1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '1rem',
            padding: 0,

            '& li': {
                backgroundClip: "padding-box",
                borderLeft: "solid 2px",
                paddingLeft: '1rem',
                borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
                borderImageSlice: 1
            },
        },
        ["@media (max-width: 600px)"]: {
            gridTemplateColumns: '1fr 1fr',
        },
        ["@media (max-width: 460px)"]: {
            fontSize: '0.75rem',
            gridTemplateColumns: '1fr',
            gridGap: 0,
            paddingLeft: 0,
        }
    },
    textlist: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
        paddingLeft: '2rem',

        '& a': {
            color: '#FFF',
            textDecoration: 'none',
            fontStyle: 'normal',
            fontWeight: 'bold',
        },

        ["@media (max-width: 1280px)"]: {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',

            '& p': {
                fontSize: '1.25rem'
            }
        },
        ["@media (max-width: 1080px)"]: {
            fontSize: '1rem',

            '&.sectionText': {
                width: '50%'
            },

            '&.doorimage': {
                padding: 0,
                justifyContent: 'center'
            }
        },
        ["@media (max-width: 880px)"]: {
            padding: 0,
            width: '100%',

            '&.cataloglist': {
                flexDirection: 'column',
                padding: 0,
                margin: 0,
                '& > div': {
                    padding: 0,
                    margin: 0
                },


            },

            '&.doorimage': {
                '& img': {
                    paddingLeft: '15%',
                    width: '50% !important'
                }
            }
        },

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
    gallerySectionContainer: {

        ["@media (max-width: 1080px)"]: {
            marginTop: '3rem'
        },

        ["@media (max-width: 720px)"]: {
            display: 'none'
        },
    },
    galleryContainer: {
        padding: '2.5% 7.5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '1rem',

        '& img': {
            objectFit: 'fit',
            width: '100%',
            height: '100%'
        },

        ["@media (max-width: 1080px)"]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
        },

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
        },

        ["@media (max-width: 720px)"]: {
            display: 'none'
        },
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
        },
    },
    subHeaderContainer: {
        ["@media (max-width: 880px)"]: {
            paddingLeft: 0
        },
        ["@media (max-width: 720px)"]: {
            margin: 0,
            padding: 0
        },
    },
    footerDoorStyles: {
        '& img': {
            maxWidth: '100%'
        }
    },
    menuContainer: {
        ["@media (max-width: 1280px)"]: {
            // alignItems: 'flex-start'
        },

        '& img': {
            maxWidth: '100%',
        },
        ["@media (max-width: 820px)"]: {
            flexDirection: 'column'
        }
    },
    imageSide: {

        ["@media (max-width: 1080px)"]: {
            width: '50%',
        },
        ["@media (max-width: 820px)"]: {
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

        ["@media (max-width: 1280px)"]: {
            '& img': {
                display: 'none'
            }
        },

        ["@media (max-width: 1080px)"]: {
            textAlign: 'center',

            "& h1": {
                fontSize: "2rem",
            },
            '& p': {
                padding: 0,
                margin: 0
            }
        },

        ["@media (max-width: 880px)"]: {


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
        ["@media (max-width: 820px)"]: {
            width: '100%',
            padding: 0,

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
        ["@media (max-width: 820px)"]: {
            display: 'flex',
        }
    }
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
                    <Box bgcolor="#1F1F23" pl={'3rem'} pr={'3rem'}>
                        <Box bgcolor="#1F1F23" pt={'8rem'} display='flex' className={classes.menuContainer}>
                            <Box width="60%" pt={"2rem"} display='flex' alignItems='center'
                                 justifyContent='center'
                                 className={`${classes.imageSide}`}>
                                <Box>
                                    <img src={doorPageInfo.mainH.imageUrl}
                                         alt={`${doorPageInfo.mainH.header}`}/>
                                </Box>
                            </Box>
                            <Box width='40%' className={classes.boxLeft}>
                                <Box width='25%'>
                                    <img style={{maxWidth: '100%'}} src={doorPageInfo.mainH.secondaryLogo} alt=""/>
                                </Box>
                                <h1 className={'headerLg'}>{doorPageInfo.mainH.header}</h1>
                                <p>{doorPageInfo.mainH.text}</p>
                                <h1 className={'headerMd'}>{doorPageInfo.mainH.header}</h1>
                                <Box className={classes.btnCatalog}>
                                    <Link to='' style={{width: '100%'}}>
                                        <ButtonCstm width={'100%'} height={'3rem'}>
                                            {doorPageInfo.mainH.btnText}
                                        </ButtonCstm>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' mt={'8rem'} className={classes.hrContainer}>
                            <Box width='60%' pl={'10%'}>
                                <hr className={classes.hr}/>
                            </Box>
                            <Box ml={'2rem'} className={'imageCnt'}>
                                <img style={{height: '70px'}} src={doorPageInfo.mainH.littleSign} alt=""/>
                            </Box>
                        </Box>
                        <Box className={classes.heroSection}>
                            <Box ml={'6rem'} mt={'3rem'} className={classes.textSectionContainer}>
                                <h1>{doorPageInfo.subMenu.header}</h1>
                            </Box>
                            <Box display='flex' mt={'7rem'} className={classes.varText}>
                                <Box width='25%' className={'catList'}>
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
                                <Box width='75%' display='flex' alignItems='center'
                                     justifyContent='center' className={classes.textlist}>
                                    <Box>
                                        {Array.isArray(doorPageInfo.subMenu.options[subText].text)
                                            ? (doorPageInfo.subMenu.options[subText].text.map(par =>
                                                <p key={par}>{par}</p>))
                                            : <p>{doorPageInfo.subMenu.options[subText].text}</p>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box width='100%' mt='8rem' className={classes.gallerySectionContainer}>
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
                        <Box className={classes.doorStyles}>
                            <Box pl={'5.5rem'} pt={'3rem'}>
                                <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                    <h1>{doorPageInfo.subMenu.header}</h1>
                                </Box>
                                <Box width='35%'>
                                    <hr className={classes.hr}/>
                                </Box>
                            </Box>
                            <Box className={classes.doorStyleItemsContainer} display='flex'>
                                <Box width='50%'>
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
                                <Box width='50%' className={`${classes.textlist} doorimage`} display='flex'
                                     alignItems='center'
                                     justifyContent='center'>
                                    <img src={doorPageInfo.doorlist[subDoor].imageUrl}
                                         style={{width: '75%'}} alt=""/>
                                </Box>
                            </Box>
                        </Box>
                        <Box width='80%' pl={'5.5rem'} pt={'3rem'} className={classes.subHeaderContainer}>
                            <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                <h1>Варианты изготовления дверей</h1>
                            </Box>
                            <Box width='50%'>
                                <hr className={classes.hr}/>
                            </Box>
                        </Box>
                        <Box pt='3rem' display='flex' justifyContent='center' flexDirection='column'
                             alignItems='center' className={classes.footerDoorStyles}>
                            <Box>
                                <img src={doorPageInfo.doorShowcase[0]} alt=""/>
                            </Box>
                            <Box mt='2rem'>
                                <img src={doorPageInfo.doorShowcase[1]} alt=""/>
                            </Box>
                        </Box>
                        <Box width='80%' pl={'5.5rem'} pt={'5rem'} className={classes.subHeaderContainer}>
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
