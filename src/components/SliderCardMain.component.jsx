import React from 'react';
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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
            margin: 0,
            padding: 0
        }
    }
});

const SliderCardMain = ({data}) => {
    const classes = useStyles();

    return (
        <>
            <Box bgcolor='#FFF' width='90%' display='flex'>
                <Grid lg={4}>
                    <Box className={classes.imageHeader} height='100%' pl={'15rem'} flexDirection='column'
                         display='flex' alignItems='center' justifyContent='center'>
                        <Box pb={0} mb={0}>
                            <img style={{height: '400px', width: '600px'}} src={data.imageUrl}
                                 alt="sandwich sub image1"/>
                        </Box>
                        <Box pr={'2rem'} mb='3rem'>
                            <h1>data.header</h1>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={8} className={classes.textlist}>
                    <Box height='100%' pl={'10rem'} display='flex' alignItems='center'>
                        <p>{data.text}</p>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default SliderCardMain;
