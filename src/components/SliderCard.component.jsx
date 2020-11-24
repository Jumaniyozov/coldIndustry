import React from 'react';
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    textlist: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: '#000',
        fontWeight: '400',
        lineHeight: '1.5rem',
    },
    imageHeader: {
        textAlign: 'center',
        '& h1': {
            padding: 0,
            margin: 0,
            fontSize: '1rem'
        }
    }
});

const SliderCard = ({text, imageUrl}) => {
    const classes = useStyles();

    return (
        <>
            <Box mb='2rem' bgcolor='#FFF' display='flex' flexDirection='column' justifyContent='center'
                 alignItems='center'>
                <Box>
                    <img style={{maxWidth: '100%'}} src={imageUrl} alt=""/>
                </Box>
                <Box className={classes.imageHeader}>
                    <h1>{text}</h1>
                </Box>
            </Box>
        </>
    );
};

export default SliderCard;
