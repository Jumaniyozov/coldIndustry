import React, {useContext, useEffect, useState} from 'react';
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

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
        },

        ["@media (max-width: 1280px)"]: {
            fontSize: '1rem',
            padding: 0
        },
        ["@media (max-width: 880px)"]: {
            fontSize: '1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '1rem',

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

        ["@media (max-width: 1280px)"]: {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
        },
        ["@media (max-width: 1080px)"]: {
            fontSize: '1rem',

            '&.sectionText': {
                width: '50%'
            }
        },
        ["@media (max-width: 880px)"]: {
            padding: 0,
            width: '100%'
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
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
        '& img': {
            objectFit: 'fill',
            width: '100%',
            height: '100%',
        },
        gap: '.5rem'
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
        },

        ["@media (max-width: 880px)"]: {
            gridTemplateColumns: '1fr 1fr',
        },
        ["@media (max-width: 480px)"]: {
            gridTemplateColumns: '1fr',
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
    },
    varText: {

        ["@media (max-width: 880px)"]: {
            display: 'flex',
            flexDirection: 'column',

            '& .catList': {
                width: '100%'
            }
        }
    },
    subMenuContainer: {
        '&.toMd': {
            display: 'none',
            color: '#FFF',

            '& h1': {
                fontSize: '1.5rem'
            },

            '& ul': {
                listStyle: 'none',
                padding: 0,
                margin: 0
            },

            '& li': {
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#FFF',
                fontWeight: '300',
                lineHeight: '2rem',
            }
        },
        ["@media (max-width: 880px)"]: {
            display: 'none',

            '&.toMd': {
                display: 'flex',
                flexDirection: 'column',

            }
        },
    },
    imageSideContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '.5rem'
    },
    preGallery: {
        ["@media (max-width: 880px)"]: {
            paddingTop: '2rem'
        },
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
                            <Box bgcolor="#1F1F23" pl={'3rem'} pr={'3rem'}>
                                <Box bgcolor="#1F1F23" pt={'8rem'} display='flex' className={classes.menuContainer}>
                                    <Box width="50%" pt={"2rem"} display='flex' alignItems='center'
                                         justifyContent='center'
                                         className={classes.imageSide}>
                                        <Box>
                                            <img src={coolingFramePageInfo.mainH.imageUrl}
                                                 alt={`${coolingFramePageInfo.mainH.header}`}/>
                                        </Box>
                                    </Box>
                                    <Box className={classes.boxLeft}>
                                        <h1 className={'headerLg'}>{coolingFramePageInfo.mainH.header}</h1>
                                        <p>{coolingFramePageInfo.mainH.text}</p>
                                        <h1 className={'headerMd'}>{coolingFramePageInfo.mainH.header}</h1>
                                        <Box className={classes.btnCatalog}>
                                            <Link to='' style={{width: '100%'}}>
                                                <ButtonCstm width={'100%'} height={'3rem'}>
                                                    {coolingFramePageInfo.mainH.btnText}
                                                </ButtonCstm>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box width='50%' pl={'25%'} pt={'3rem'} bgcolor="#1F1F23">
                                    <hr className={classes.hr}/>
                                </Box>
                                <Box display='flex' mt={'7rem'} className={classes.varText}>
                                    <Box width='25%' className={'catList'}>
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
                                    <Box width='75%' display='flex' alignItems='center'
                                         justifyContent='center' className={classes.textlist}>
                                        <Box>
                                            {Array.isArray(coolingFramePageInfo.subMenu[subText].text)
                                                ? (coolingFramePageInfo.subMenu[subText].text.map(par =>
                                                    <p>{par}</p>))
                                                : <p>{coolingFramePageInfo.subMenu[subText].text}</p>
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.subMenuContainer}>
                                    <Box width='50%' pt={'8rem'} bgcolor="#1F1F23">
                                        <hr className={classes.hr}/>
                                    </Box>
                                    <Box display='flex' mt={'5rem'}>
                                        <Box width='40%' display='flex' alignItems='center' justifyContent='center'>
                                            <Box>
                                                <img style={{maxWidth: '100%'}}
                                                     src={coolingFramePageInfo.subOption[0].imageUrl}
                                                     alt="sandwich sub image1"/>
                                            </Box>
                                        </Box>
                                        <Box width='60%' pl={'5rem'} className={classes.textlist}>
                                            <p>{coolingFramePageInfo.subOption[0].text}</p>
                                        </Box>
                                    </Box>
                                    <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                                        <hr className={classes.hr}/>
                                    </Box>
                                    <Box display='flex' mt={'5rem'}>
                                        <Box width='50%' className={classes.textlist}>
                                            <p>{coolingFramePageInfo.subOption[1].text}</p>
                                        </Box>
                                        <Box width='50%' display='flex' alignItems='center' justifyContent='center'
                                             mt={'2rem'}
                                             pl={'2rem'}>
                                            <Box className={classes.imageGridContainer}>
                                                <Box>
                                                    <img
                                                        // style={{maxWidth: '100%'}}
                                                        src={coolingFramePageInfo.subOption[1].imageUrl}
                                                        alt="sandwich sub image1"/>
                                                </Box>
                                                <Box
                                                    display='flex'
                                                    flexDirection="column"
                                                    alignItems="center"
                                                    gap='.5rem'
                                                >
                                                    {
                                                        coolingFramePageInfo.subOption[1].images.map((el) => (
                                                            <img src={el}
                                                                 style={{height: '50%'}}
                                                                 alt=""/>
                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box width='50%' pt={'5rem'} bgcolor="#1F1F23">
                                        <hr className={classes.hr}/>
                                    </Box>
                                    <Box display='flex' mt={'5rem'}>
                                        <Box width='50%' display='flex' alignItems='center' justifyContent='center'
                                             pr={'2rem'}>
                                            <Box>
                                                <img style={{maxWidth: '100%'}}
                                                     src={coolingFramePageInfo.subOption[2].imageUrl}
                                                     alt="sandwich sub image1"/>
                                            </Box>
                                        </Box>
                                        <Box width='50%'>
                                            <Box className={classes.textlist}>
                                                <p>{coolingFramePageInfo.subOption[2].text}</p>
                                            </Box>
                                            <Box
                                                className={classes.imageSideContainer}
                                            >
                                                {
                                                    coolingFramePageInfo.subOption[2].images.map(el => (
                                                        <img src={el}
                                                             style={{maxWidth: '100%'}}
                                                             alt=""/>
                                                    ))
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box width='50%' pl={'47%'} pt={'5rem'} bgcolor="#1F1F23">
                                        <hr className={classes.hr}/>
                                    </Box>
                                    <Box display='flex' mt={'5rem'}>
                                        <Box width='50%' className={classes.textlist}>
                                            <p>{coolingFramePageInfo.subOption[3].text}</p>
                                        </Box>
                                        <Box width='50%' display='flex' alignItems='center' justifyContent='center'
                                             pl={'1rem'}
                                             pr={'8rem'}>
                                            <Box>
                                                <img style={{maxWidth: '100%'}}
                                                     src={coolingFramePageInfo.subOption[3].imageUrl}
                                                     alt="sandwich sub image1"/>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box width='50%' pl={'3rem'} pt={'5rem'} bgcolor="#1F1F23">
                                        <hr className={classes.hr}/>
                                    </Box>
                                    <Box display='flex' mt={'5rem'}>
                                        <Box width='40%' ml={'8rem'} display='flex' alignItems='center'
                                             justifyContent='center'>
                                            <Box>
                                                <img style={{maxWidth: '100%'}}
                                                     src={coolingFramePageInfo.subOption[4].imageUrl}
                                                     alt="sandwich sub image1"/>
                                            </Box>
                                        </Box>
                                        <Box pl={'2rem'} width='60%' className={classes.textlist} display='flex'
                                             alignItems='center'>
                                            <p>{coolingFramePageInfo.subOption[4].text}</p>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box className={`${classes.subMenuContainer} toMd ${classes.textlist}`}>
                                    {coolingFramePageInfo.subOptionMd.text.map((el, index) => (
                                        <p>{el}</p>
                                    ))
                                    }
                                    <Box p={2}>
                                        <img
                                            src={coolingFramePageInfo.subOptionMd.imageUrl}
                                            style={{maxWidth: '100%'}}
                                            alt=""/>
                                    </Box>
                                </Box>
                                <Box className={classes.preGallery} width='100%' pl={'7.5%'} pt={'8rem'}
                                     bgcolor="#1F1F23">
                                    <Box display='flex' justifyContent='space-between'
                                         className={classes.subHeader}>
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
