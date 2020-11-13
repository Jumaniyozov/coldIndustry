import React from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    leftBorder: {
        backgroundClip: "padding-box",
        borderRight: "solid 2px",
        borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
        borderImageSlice: 1
    },

    infoText: {
        color: 'white',
        width: "100%",
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        background: 'none',
        transition: "background-image 2s ease-in-out",

        '& h1': {
            margin: 0,
            fontSize: '1.8rem'
        },
        '& p': {
            fontSize: '1rem',
            lineHeight: '1.2rem',
            width: '100%',
        },

        "&:hover": {
            background: "linear-gradient(to bottom, #D38716 , #D6B600)"
        }
    }
});


const InfoText = ({header, content, side = false}) => {
    const {infoText, leftBorder} = useStyles();
    return (
        <Box height="9rem" width="13.5rem" display='flex' flexDirection="column"
             className={`${infoText} ${side ? leftBorder : ''}`}>
            <Box pl={2} pt={1} pr={1}>
                <h1>{header}</h1>
                <p>{content}</p>
            </Box>
        </Box>
    )
}


export default InfoText;
