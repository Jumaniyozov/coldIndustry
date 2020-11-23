import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InfoText from "../components/InfoText.component";
import HomeShowCard from "../components/HomeShowCat.component";
import {GlobalContext} from "../context/Main.context";

//Images

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',

        '& img': {
            width: '80%'
        }
    },
    textContainer: {
        margin: 0,
        overflow: 'hidden',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridColumnGap: '1rem',

        '& h1': {
            margin: 0,
            fontSize: '1.8rem'
        },
        '& p': {
            fontSize: '1rem',
            lineHeight: '1.2rem',
            width: '100%',
        },

        ["@media (max-width:1450px)"]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',

            '& > div': {
                backgroundClip: "padding-box",
                borderRight: "solid 2px",
                borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
                borderImageSlice: 1
            }
        },
        ["@media (max-width:1150px)"]: {
            '& h1': {
                margin: 0,
                fontSize: '1.5rem'
            },
            '& p': {
                fontSize: '.825rem',
                lineHeight: '1.2rem',
                width: '100%',
            },
        },
        ["@media (max-width:800px)"]: {
            '& h1': {
                fontSize: '1.25rem'
            },
            // '& p': {
            //     fontSize: '1.15rem'
            // }
        },
        ["@media (max-width:500px)"]: {
            gridTemplateColumns: '1fr',

            '& > div': {
                borderRight: "none"
            }
        }
    },
    hr: {
        width: "95%",
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    btn: {
        width: "10rem",
        height: "2rem"
    },
    boxLeft: {
        width: "50%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
        paddingLeft: "5rem",

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
        }
    },
    allSectionContainer: {
        ["@media (max-width:800px)"]: {
            paddingLeft: '2rem',
            paddingRight: '2rem'
        }
    },
    sectionContainer: {
        ["@media (max-width:1150px)"]: {
            '& h1': {
                fontSize: '2rem'
            },
            '& p': {
                fontSize: '1.25rem'
            }
        },
        ["@media (max-width:800px)"]: {
            // '& h1': {
            //     fontSize: '1.5rem'
            // },
            '& p': {
                fontSize: '1.15rem'
            }
        }
    },
    showCard1: props => ({
        ["@media (max-width:1150px)"]: {
            '& img': {
                width: '400px !important',
                height: '300px !important'
            }
        },
        ["@media (max-width:800px)"]: {
            '& img': {
                width: '300px !important',
                height: '200px !important'
            }
        }
    }),
    showCard2: props => ({
        ["@media (max-width:1150px)"]: {
            '& img': {
                width: '300px !important',
                height: '300px !important'
            }
        },
        ["@media (max-width:800px)"]: {
            '& img': {
                width: '200px !important',
                height: '200px !important'
            }
        }
    }),
    showCard3: props => ({
        ["@media (max-width:1150px)"]: {
            '& img': {
                width: '400px !important',
                height: '350px !important'
            }
        },
        ["@media (max-width:800px)"]: {
            '& img': {
                width: '300px !important',
                height: '250px !important'
            }
        }
    })
});


const HomePage = ({history}) => {
    const details = {};
    const classes = useStyles(details);
    const {homePageInfo, fetchHomePage, loading} = useContext(GlobalContext);

    useEffect(() => {
        fetchHomePage();
    }, [history, homePageInfo]);

    return (
        <>

            {homePageInfo.length < 1
                ?
                (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <Box className={classes.root} p={0} bgcolor="#1F1F23">
                            <Box height="inherit" width="100%" display="flex" alignItems="center"
                                 justifyContent="center">
                                <img src={`./images/HeroLogo.svg`} alt="Hero Logo"/>
                            </Box>
                        </Box>
                        <Box pl={'3rem'} pr={'3rem'} bgcolor="#1F1F23" className={classes.allSectionContainer}>
                            <Box width="100%">
                                <Box display="grid" width="100%" className={classes.textContainer}>
                                    <InfoText header={`${homePageInfo.cardInfo.h1.header}`}
                                              content={`${homePageInfo.cardInfo.h1.text}`}
                                              side
                                    />
                                    <InfoText header={`${homePageInfo.cardInfo.h2.header}`}
                                              content={`${homePageInfo.cardInfo.h2.text}`}
                                              side
                                    />
                                    <InfoText header={`${homePageInfo.cardInfo.h3.header}`}
                                              content={`${homePageInfo.cardInfo.h3.text}`}
                                              side
                                    />
                                    <InfoText header={`${homePageInfo.cardInfo.h4.header}`}
                                              content={`${homePageInfo.cardInfo.h4.text}`}
                                              side
                                    />
                                    <InfoText header={`${homePageInfo.cardInfo.h5.header}`}
                                              content={`${homePageInfo.cardInfo.h5.text}`}

                                    />
                                </Box>
                            </Box>
                            <Box bgcolor="#1F1F23" className={classes.sectionContainer}>
                                <Box pt={'3rem'}>
                                    <hr className={classes.hr}/>
                                </Box>
                                <HomeShowCard
                                    header={homePageInfo.sectionInfo.h1.header}
                                    text={homePageInfo.sectionInfo.h1.text}
                                    btnText={homePageInfo.sectionInfo.h1.btnText}
                                    linkTo={`/sandwichpanels`}
                                    imageUrl='./images/sandwichPanelH.png'
                                    imageHeight='400px'
                                    imageWidth='600px'
                                    className={classes.showCard1}
                                />

                                <Box pt={'5rem'}>
                                    <hr className={classes.hr}/>
                                </Box>

                                <HomeShowCard
                                    leftSideText={true}
                                    header={homePageInfo.sectionInfo.h2.header}
                                    text={homePageInfo.sectionInfo.h2.text}
                                    btnText={homePageInfo.sectionInfo.h2.btnText}
                                    imageHeight='500px'
                                    imageWidth='500px'
                                    imageUrl='./images/motorH.png'
                                    linkTo={`/coolingengines`}
                                    className={classes.showCard2}
                                />

                                <Box pt={'5rem'}>
                                    <hr className={classes.hr}/>
                                </Box>

                                <HomeShowCard
                                    header={homePageInfo.sectionInfo.h3.header}
                                    text={homePageInfo.sectionInfo.h3.text}
                                    btnText={homePageInfo.sectionInfo.h3.btnText}
                                    imageUrl={'./images/carH.png'}
                                    imageHeight='450px'
                                    imageWidth='600px'
                                    linkTo={`/coolingframes`}
                                    className={classes.showCard1}
                                />

                                <Box pt={'5rem'}>
                                    <hr className={classes.hr}/>
                                </Box>

                                <HomeShowCard
                                    leftSideText={true}
                                    header={homePageInfo.sectionInfo.h4.header}
                                    text={homePageInfo.sectionInfo.h4.text}
                                    btnText={homePageInfo.sectionInfo.h4.btnText}
                                    imageUrl={'./images/doorH.png'}
                                    imageHeight='550px'
                                    imageWidth='600px'
                                    linkTo={`/doors`}
                                    className={classes.showCard3}
                                />

                                <Box pt={'5rem'}>
                                    <hr className={classes.hr}/>
                                </Box>

                                <HomeShowCard
                                    header={homePageInfo.sectionInfo.h5.header}
                                    text={homePageInfo.sectionInfo.h5.text}
                                    btnText={homePageInfo.sectionInfo.h5.btnText}
                                    imageUrl={'./images/penoplastH.png'}
                                    imageHeight='400px'
                                    imageWidth='500px'
                                    linkTo={`/penoplasts`}
                                    className={classes.showCard3}
                                />

                            </Box>
                        </Box>
                    </>
                )
            }
        </>
    );
};


const ComposedHomePage = () => {
    return (
        <div>
            <HomePage/>
        </div>
    )
}

export default ComposedHomePage;
