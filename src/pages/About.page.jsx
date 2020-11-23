import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {GlobalContext} from "../context/Main.context";


const useStyles = makeStyles({
    heroSection: {
        '&.list': {
            "& p": {
                lineHeight: "3.5rem",
            }
        },

        '&.list2': {
            "& p": {
                lineHeight: "2rem",
                marginTop: '1.5rem',
            }
        },

        '&.list3': {
            "& p": {
                fontSize: '1.5rem',
                lineHeight: "2rem",
                marginTop: '2rem',
            }
        },

        "& p": {
            fontSize: "1.25rem",
            fontWeight: "300",
            fontStyle: "normal",
            color: '#FFF',
            lineHeight: "2.25rem",
            padding: 0,
            margin: 0
        },

        '& h2': {
            fontWeight: "bold",
            fontSize: "1.25rem",
            lineHeight: "3.5rem",
            color: '#FFF'
        },
        "& h1, & .header1": {
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: "3.5rem",
            color: '#FFF'
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
        }
    },
});

const AboutPageRenderer = () => {
    const classes = useStyles();

    const {aboutPageInfo, fetchAboutPage} = useContext(GlobalContext);

    useEffect(() => {
        fetchAboutPage();
    }, [aboutPageInfo])

    return (
        <>
            {
                aboutPageInfo.length < 1
                    ? <h1>Loading...</h1>
                    : (<>
                            <Box bgcolor="#1F1F23" pt='8rem' pl={'3rem'}>
                                <Box className={classes.heroSection}>
                                    <p>
                                        <span className={`header1`}>
                                            {aboutPageInfo.mainSection.header1}
                                        </span>
                                        {aboutPageInfo.mainSection.text1}
                                    </p>
                                    <Box mt={'5rem'}>
                                        <p style={{fontStyle: 'italic'}}>{aboutPageInfo.mainSection.text2}</p>
                                    </Box>
                                </Box>
                                <Box className={`${classes.heroSection} list`} mt={'5rem'}>
                                    <h2>
                                        {aboutPageInfo.mainSection.header2}
                                    </h2>
                                    {aboutPageInfo.mainSection.text3.map(text => <p>{text}</p>)}
                                </Box>
                                <Box pt='3rem'>
                                    <Box width='80%' className={`${classes.heroSection} list2`}>
                                        <h1>
                                            {aboutPageInfo.secondSection.header}
                                        </h1>
                                        {aboutPageInfo.secondSection.text.map(text => <p>{text}</p>)}
                                    </Box>
                                </Box>
                                <Box pt='3rem'>
                                    <Box className={`${classes.heroSection} list3`}>
                                        <Box width='80%'>
                                            <h1>
                                                {aboutPageInfo.thirdSection.header}
                                            </h1>
                                        </Box>
                                        <Box width='90%'>
                                            {aboutPageInfo.thirdSection.text.map(text => <p>{text}</p>)}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box pt='3rem'>
                                    <Box className={`${classes.heroSection} list2`}>
                                        <Box width='80%'>
                                            <h1>
                                                {aboutPageInfo.lastSection.header}
                                            </h1>
                                        </Box>
                                        <Box width='90%'>
                                            {aboutPageInfo.lastSection.text.map(text => <p>{text}</p>)}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )}
        </>
    );
};

export default AboutPageRenderer;
