import React from 'react';
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {CoolingEngineInfo} from "../data/InfoText.json";
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
        '& h1': {
            padding: 0,
            margin: 0,
            fontSize: '1rem'
        }
    }
});

const SliderCard = () => {
    const classes = useStyles();

    return (
        <>
            <Box mb='2rem' bgcolor='#FFF' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
               <Box>
                   <img style={{height: '200px', width: '340px'}} src="./images/CoolingEngine/4.png" alt=""/>
               </Box>
                <Box className={classes.imageHeader}>
                    <h1>ПОЛУГЕРМЕТИЧНЫЕ КОМПАКТНЫЕ</h1>
                </Box>
            </Box>
        </>
    );
};

export default SliderCard;
