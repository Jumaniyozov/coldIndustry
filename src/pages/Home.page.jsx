import React from 'react';
import Header from "../components/Header.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HeroLogo from "../assets/HeroLogo.svg";
import InfoText from "../components/InfoText.component";
import {textForInfo} from "../data/InfoText.json";
import {CardInfo} from "../data/InfoText.json";
import HomeShowCard from "../components/HomeShowCat.component";
import Footer from "../components/Footer.component";

//Images
import MotorImage from '../assets/motorH.png';
import CarImage from '../assets/carH.png';
import DoorImage from '../assets/doorH.png';
import PenoplastImage from '../assets/penoplastH.png';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%'
    },
    textContainer: {
        margin: 0,
        padding: '1rem',
        overflow: 'hidden',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridColumnGap: '1rem'
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
    }
});


const HomePage = ({history}) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.root} p={0} bgcolor="#1F1F23">
                <Box height="inherit" width="100%" display="flex" alignItems="center" justifyContent="center">
                    <img src={HeroLogo} alt="Hero Logo"/>
                </Box>
            </Box>
            <Box p={0} bgcolor="#1F1F23">
                <Box width="100%" style={{overflow: 'hidden'}}>
                    <Box display="grid" width="100%" className={classes.textContainer}>
                        <InfoText header={`${textForInfo.h1.header}`}
                                  content={`${textForInfo.h1.text}`}
                                  side
                        />
                        <InfoText header={`${textForInfo.h2.header}`}
                                  content={`${textForInfo.h2.text}`}
                                  side
                        />
                        <InfoText header={`${textForInfo.h3.header}`}
                                  content={`${textForInfo.h3.text}`}
                                  side
                        />
                        <InfoText header={`${textForInfo.h4.header}`}
                                  content={`${textForInfo.h4.text}`}
                                  side
                        />
                        <InfoText header={`${textForInfo.h5.header}`}
                                  content={`${textForInfo.h5.text}`}

                        />
                    </Box>
                </Box>
                <Box bgcolor="#1F1F23">
                    <Box pt={'3rem'}>
                        <hr className={classes.hr}/>
                    </Box>

                    <HomeShowCard
                        header={CardInfo.h1.header}
                        text={CardInfo.h1.text}
                        btnText={CardInfo.h1.btnText}
                        linkTo={`/sandwichpanels`}
                        imageHeight='400px'
                        imageWidth='600px'
                    />

                    <Box pt={'5rem'}>
                        <hr className={classes.hr}/>
                    </Box>

                    <HomeShowCard
                        leftSideText={true}
                        header={CardInfo.h2.header}
                        text={CardInfo.h2.text}
                        btnText={CardInfo.h2.btnText}
                        imageHeight='500px'
                        imageWidth='500px'
                        imageUrl={MotorImage}
                        linkTo={`/coolingengines`}
                    />

                    <Box pt={'5rem'}>
                        <hr className={classes.hr}/>
                    </Box>

                    <HomeShowCard
                        header={CardInfo.h3.header}
                        text={CardInfo.h3.text}
                        btnText={CardInfo.h3.btnText}
                        imageUrl={CarImage}
                        imageHeight='450px'
                        imageWidth='600px'
                        linkTo={`/coolingframes`}
                    />

                    <Box pt={'5rem'}>
                        <hr className={classes.hr}/>
                    </Box>

                    <HomeShowCard
                        leftSideText={true}
                        header={CardInfo.h4.header}
                        text={CardInfo.h4.text}
                        btnText={CardInfo.h4.btnText}
                        imageUrl={DoorImage}
                        imageHeight='550px'
                        imageWidth='600px'
                        linkTo={`/doors`}
                    />

                    <Box pt={'5rem'}>
                        <hr className={classes.hr}/>
                    </Box>

                    <HomeShowCard
                        header={CardInfo.h5.header}
                        text={CardInfo.h5.text}
                        btnText={CardInfo.h5.btnText}
                        imageUrl={PenoplastImage}
                        imageHeight='400px'
                        imageWidth='500px'
                        linkTo={`/penoplasts`}
                    />

                </Box>
                {/*{header = 'Header', text = 'text', btnText = 'button'}*/}


                {/*<Box display='flex' width="100%" height="50vh">*/}
                {/*    <Box className={classes.boxLeft}>*/}
                {/*        <h1>Сэндвич-панели</h1>*/}
                {/*        <p>Материал для строителей XXI века.*/}
                {/*            Небольшой срок изготовления и простая технология монтажа для возведения быстровозводимых*/}
                {/*            холодильных камер, ангаров, складов.</p>*/}
                {/*        <ButtonCstm width={'15rem'} height={'3rem'}>*/}
                {/*            Ознакомится*/}
                {/*        </ButtonCstm>*/}
                {/*    </Box>*/}
                {/*    <Box width="50%" pt={"2rem"}>*/}
                {/*        <img style={{height: "400px", width: "650px"}} src={SandwichImg} alt="sandwich panel"/>*/}
                {/*    </Box>*/}
                {/*</Box>*/}


            </Box>
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
