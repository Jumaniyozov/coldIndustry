import Box from "@material-ui/core/Box";
import ButtonCstm from "./Button.component";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    mainBox: {

        '& .downToMd': {
            display: 'none',
        },

        ["@media (max-width:650px)"]: {
            '& .downToMd': {
                display: 'flex',
            },
            '& .upToLg': {
                display: 'none'
            }

        }
    },

    boxLeft: {
        width: "50%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
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

        ["@media (max-width:650px)"]: {
            width: "100%",
            "& p": {
                padding: 0,
                margin: 0
            },

            "& h1": {
                padding: 0,
                margin: 0
            },
        }
    }
});

const HomeShowCard = ({
                          header = 'Header',
                          text = 'text',
                          btnText = 'button',
                          leftSideText = false,
                          imageUrl,
                          imageHeight = '600px',
                          imageWidth = '600px',
                          linkTo,
                          className
                      }) => {
    const classes = useStyles();

    return (
        <>
            <Box width="100%" className={`${classes.mainBox} ${className}`}>
                {
                    leftSideText
                        ? (<>
                            <Box className='upToLg' display='flex' width='100%' alignItems='center' justifyContent='center'>
                                <Box width="50%" pt={"2rem"} display='flex' alignItems='center' justifyContent='center'>
                                    <Box>
                                        <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                             alt={`${header}`}/>
                                    </Box>
                                </Box>
                                <Box className={classes.boxLeft}>
                                    <Box>
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
                            </Box>
                            <Box className='downToMd'
                                 display='flex'
                                 width='100%'
                                 alignItems='center'
                                 justifyContent='center'
                            >
                                <Box className={classes.boxLeft}>
                                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                        <h1>{header}</h1>
                                        <p>{text}</p>
                                        <Box pt={2} pb={2}>
                                            <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                                 alt={`${header}`}/>
                                        </Box>
                                        {linkTo && <Link to={`${linkTo}`}>
                                            <ButtonCstm width={'15rem'} height={'3rem'}>
                                                {btnText}
                                            </ButtonCstm>
                                        </Link>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </>)
                        : (<>
                            <Box className='upToLg' display='flex' width='100%' alignItems='center' justifyContent='center'>
                                <Box className={classes.boxLeft}>
                                    <Box>
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
                                    <Box>
                                        <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                             alt={`${header}`}/>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='downToMd'
                                 display='flex'
                                 width='100%'
                                 alignItems='center'
                                 justifyContent='center'
                            >
                                <Box className={classes.boxLeft}>
                                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                        <h1>{header}</h1>
                                        <p>{text}</p>
                                        <Box pt={2} pb={2}>
                                            <img style={{height: `${imageHeight}`, width: `${imageWidth}`}} src={imageUrl}
                                                 alt={`${header}`}/>
                                        </Box>
                                        {linkTo && <Link to={`${linkTo}`}>
                                            <ButtonCstm width={'15rem'} height={'3rem'}>
                                                {btnText}
                                            </ButtonCstm>
                                        </Link>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </>)
                }
            </Box>
        </>
    )
}


export default HomeShowCard;
