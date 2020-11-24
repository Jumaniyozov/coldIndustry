import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        ["@media (max-width: 480px)"]: {
            marginTop: '2rem'
        }
    },
    generalContainer: {
        ["@media (max-width: 480px)"]: {
            marginTop: 0
        }
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
    textContainer: {
        ["@media (max-width: 1080px)"]: {
            width: '100%'
        }
    },
    imageContainer: {
        ["@media (max-width: 1080px)"]: {
            display: 'none'
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
        },

        ["@media (max-width: 1080px)"]: {
            width: '100%'
        },

        ["@media (max-width: 480px)"]: {
            '&.info': {
                fontSize: '1rem',
            },
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
        alignItems: 'center',
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
                textAlign: 'center',
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

const PenoplastPage = () => {
    const classes = useStyles();
    const {fetchPenoPage, penoplastPageInfo} = useContext(GlobalContext);

    useEffect(() => {
        fetchPenoPage();
    }, [penoplastPageInfo])

    return (
        <>
            {
                penoplastPageInfo.length < 1
                    ? <h1>Loading...</h1>
                    : (<>
                        <Box bgcolor="#1F1F23" pl={'3rem'} pr={'3rem'}>
                            <Box bgcolor="#1F1F23" pt={'8rem'} display='flex' className={classes.menuContainer}>
                                <Box width="40%" pt={"2rem"} display='flex' alignItems='center'
                                     justifyContent='center'
                                     className={classes.imageSide}>
                                    <Box>
                                        <img src={penoplastPageInfo.mainH.imageUrl}
                                             alt={`${penoplastPageInfo.mainH.header}`}/>
                                    </Box>
                                </Box>
                                <Box width='50%' className={classes.boxLeft}>
                                    <h1 className={'headerLg'}>{penoplastPageInfo.mainH.header}</h1>
                                    <p>{penoplastPageInfo.mainH.text}</p>
                                    <h1 className={'headerMd'}>{penoplastPageInfo.mainH.header}</h1>
                                    <Box className={classes.btnCatalog}>
                                        <Link to='' style={{width: '100%'}}>
                                            <ButtonCstm width={'100%'} height={'3rem'}>
                                                {penoplastPageInfo.mainH.btnText}
                                            </ButtonCstm>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex' mt={'7rem'} className={classes.hrContainer}>
                                <Box width='40%' pl={'30%'}>
                                    <hr className={classes.hr}/>
                                </Box>
                            </Box>
                            <Box bgcolor="#1F1F23" mt={'3rem'} display='flex' className={classes.generalContainer}>
                                <Box width='70%' className={classes.textContainer}>
                                    <Box className={`${classes.textlist} info`}>
                                        <h3>{penoplastPageInfo.subMenu.header1}</h3>
                                        <Box>
                                            <ul>
                                                {penoplastPageInfo.subMenu.text.map(item => <li>{item}</li>)}
                                            </ul>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box width='30%' className={classes.imageContainer}>
                                    <Box>
                                        <img src={penoplastPageInfo.subMenu.images[0]}
                                             style={{maxWidth: '100%'}} alt=""/>
                                    </Box>
                                    <Box display='flex' mt={'.5rem'}>
                                        <Box>
                                            <img src={penoplastPageInfo.subMenu.images[1]}
                                                 style={{maxWidth: '100%'}} alt=""/>
                                        </Box>
                                        <Box pl={'10px'}>
                                            <img src={penoplastPageInfo.subMenu.images[1]}
                                                 style={{maxWidth: '100%'}} alt=""/>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={`${classes.textlist} info`}>
                                <Grid lg={6}>
                                    <h3>{penoplastPageInfo.subMenu.header2}</h3>
                                    <h3>{penoplastPageInfo.subMenu.header3}</h3>
                                </Grid>
                            </Box>
                        </Box>
                    </>)}
        </>
    )
}

const PenoplastPageRenderer = () => {
    return (
        <div>
            <PenoplastPage/>
        </div>
    );
};

export default PenoplastPageRenderer;
