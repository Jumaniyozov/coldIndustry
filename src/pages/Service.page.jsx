import React, {useContext, useEffect} from 'react';
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {GlobalContext} from "../context/Main.context";
import SliderCardMain from "../components/SliderCardMain.component";


const useStyles = makeStyles({
    root: {},
    heroSection: {

        '&.list': {
            "& p": {
                lineHeight: "2.5rem",
            }
        },

        '&.list2': {
            "& p": {
                lineHeight: "2rem",
                marginTop: '1.5rem',
            },
        },

        '&.list3': {
            "& p": {
                fontSize: '1.5rem',
                lineHeight: "2rem",
                marginTop: '2rem',
            },
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
            fontSize: "1.25rem",
            lineHeight: "3.5rem",
            color: '#FFF'
        },

        ["@media (max-width: 880px)"]: {

            "& p": {
                fontSize: "1rem",
                lineHeight: "2rem",
            },

            '& h2': {
                fontSize: "1.25rem",
                lineHeight: "2.5rem",
            },

            "& h1, & .header1": {
                fontSize: "1.5rem",
                lineHeight: "2.5rem",
            },


            '& .secondaryText': {
                marginTop: '2rem'
            },

            '&.list, &.list2': {
                marginTop: '2rem',
                lineHeight: "2.5rem",

                "& p": {
                    lineHeight: "2.5rem !important",
                },

                '& h2': {
                    lineHeight: "2.5rem",
                },
                "& h1, & .header1": {
                    lineHeight: "2.5rem",
                },
            },

            '&.list2, &.list3': {
                width: '100% !important',
                "& h1, & .header1": {
                    fontSize: '2rem'
                },
            },

            '&.list3': {
                "& h1, & .header1": {
                    width: '100%',
                    fontSize: '1.5rem !important'
                },
                '& p': {
                    fontSize: '1rem !important'
                },

                '& .headerContainer': {
                    width: '100%'
                }
            }
        },
        ["@media (max-width: 600px)"]: {
            '& .secondaryText': {
                // marginTop: '2rem'
            },

            '&.list, &.list2': {
                // marginTop: '2rem',
                // lineHeight: "2.5rem",

                "& p": {
                    fontSize: '1rem'
                },

                '& h2': {
                    lineHeight: "2rem",
                },
                "& h1, & .header1": {
                    lineHeight: "2rem",
                },
            },

            '&.list2, &.list3': {
                width: '100% !important',
                "& h1, & .header1": {
                    fontSize: '1.25rem'
                },
            },

            '&.list3': {
                "& h1, & .header1": {
                    fontSize: '1.25rem !important'
                },
                '& p': {
                    fontSize: '1rem !important'
                }
            }
        },
    },
    textlist: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',
        // paddingRight: '5rem',

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

const ServicePageRenderer = () => {
    const classes = useStyles();

    const {servicePageInfo, fetchServicePage} = useContext(GlobalContext);

    useEffect(() => {
        fetchServicePage();
    }, [servicePageInfo])

    return (
        <>
            {
                servicePageInfo.length < 1
                    ? <h1>Loading...</h1>
                    : (<>
                            <Box bgcolor="#1F1F23" pt='8rem' pl={'3rem'} pr={'3rem'} className={classes.root}>
                                <Box bgcolor='#FFF'>
                                    <SliderCardMain data={servicePageInfo.mainSection.content}/>
                                </Box>
                                <Box className={classes.heroSection}>
                                    <h1>
                                        {servicePageInfo.mainSection.header}
                                    </h1>
                                    {servicePageInfo.mainSection.text.map(text =>
                                        (<Box mt={'2rem'}>
                                                <p>{text}</p>
                                            </Box>
                                        ))}
                                </Box>
                                <Box className={`${classes.heroSection} list`} mt={'3rem'}>
                                    <h2>
                                        {servicePageInfo.mainSection.header2}
                                    </h2>
                                    {servicePageInfo.mainSection.text2.map(text => <p>{text}</p>)}
                                </Box>
                                <Box className={`${classes.heroSection} list`} mt={'3rem'}>
                                    {servicePageInfo.mainSection.text3.map(text => <p>{text}</p>)}
                                </Box>

                            </Box>
                        </>
                    )}
        </>
    );
};

export default ServicePageRenderer;
