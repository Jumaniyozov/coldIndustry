import Box from "@material-ui/core/Box";
import ButtonCstm from "./Button.component";
import SandwichImg from "../assets/Group 29.png";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    mainBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxLeft: {
        width: "50%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
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

const HomeShowCard = ({
                          header = 'Header',
                          text = 'text',
                          btnText = 'button',
                          leftSideText = false,
                          imageUrl = SandwichImg,
                          imageHeight = '600px',
                          imageWidth = '600px',
                          linkTo,
                      }) => {
    const classes = useStyles();

    return (
        <>
            <Box display='flex' width="100%" className={classes.mainBox}>
                {
                    leftSideText
                        ? (<>
                            <Box width="50%" pt={"2rem"} display='flex' alignItems='center' justifyContent='center'>
                                <Box pt={3}>
                                    <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                         alt={`${header}`}/>
                                </Box>
                            </Box>
                            <Box className={classes.boxLeft}>
                                <Box pr={5}>
                                    <h1>{header}</h1>
                                    <p>{text}</p>
                                    {linkTo && <Link to={`${linkTo}`}>
                                        <ButtonCstm width={'15rem'} height={'3rem'}>
                                            {btnText}
                                        </ButtonCstm>
                                    </Link>
                                    }
                                </Box>
                            </Box>
                        </>)
                        : (<>
                            <Box className={classes.boxLeft}>
                                <Box pr={5}>
                                    <h1>{header}</h1>
                                    <p>{text}</p>
                                    {linkTo && <Link to={`${linkTo}`}>
                                        <ButtonCstm width={'15rem'} height={'3rem'}>
                                            {btnText}
                                        </ButtonCstm>
                                    </Link>
                                    }
                                </Box>
                            </Box>
                            <Box width="50%" pt={"2rem"} display='flex' alignItems='center' justifyContent='center'>
                                <Box pt={3}>
                                    <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                         alt={`${header}`}/>
                                </Box>
                            </Box>
                        </>)
                }
            </Box>
        </>
    )
}


export default HomeShowCard;
