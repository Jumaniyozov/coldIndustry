import React from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    leftBorder: {
        backgroundClip: "padding-box",
        borderRight: "solid 2px",
        borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
        borderImageSlice: 1
    },

    demo_wrap: {
        position: `relative`,
        overflow: 'hidden',
        height: '100%',
        cursor: 'pointer',

        '& h1, & p': {
            position: 'relative',
            zIndex: 2
        },

        '&::before': {
            padding: 0,
            margin: 0,
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0,
            backgroundImage: "linear-gradient(to bottom, #d38716, #d6b600)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            transition: "all 0.2s ease-in-out"
        },


        '&:hover::before': {
            opacity: 1,
        }
    },

    infoText: {
        color: 'white',
        width: "100%",

        '& a': {
            textDecoration: 'none',
            color: 'inherit'
        }
        // borderTopLeftRadius: '5px',
        // borderBottomLeftRadius: '5px',
        // background: 'none',
        // transition: "background-image 2s ease-in-out",

        // "&:hover": {
        //     background: "linear-gradient(to bottom, #D38716 , #D6B600)"
        // },

        // ["@media (max-width:500px)"]: {
        //     borderRadius: '5px',
        // }
    }
});


const InfoText = ({header, content, linkTo, side = false}) => {
    const {infoText, leftBorder, demo_wrap} = useStyles();
    return (
        <Box display='flex' flexDirection="column"
             className={`${infoText} ${side ? leftBorder : ''}`}>
            <Box pl={2} pt={1} pr={1} className={demo_wrap}>
                <Link to={linkTo}>
                    <h1>{header}</h1>
                    <p>{content}</p>
                </Link>
            </Box>
        </Box>
    )
}


export default InfoText;
