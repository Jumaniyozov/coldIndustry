import makeStyles from "@material-ui/core/styles/makeStyles";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import React from 'react';
import {Box} from "@material-ui/core";


const useStyles = makeStyles({
    swiperMain: {
        backgroundColor: '#FFF',

        '& .swiper-pagination-bullets, & .swiper-scrollbar': {
            display: 'none'
        },

        '& .swiper-button-next, & .swiper-button-prev ': {
            color: "black !important",
            // paddingLeft: '2rem',
            // paddingRight: '2rem',
        },

        '&.multiple': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            '& .swiper-button-next, & .swiper-button-prev ': {
                paddingLeft: '2.5%',
                paddingRight: '2.5%',
            }
        },

        '& .swiper-wrapper': {
            // paddingRight: '5rem',
            // marginRight: '5rem',
        }
    },
    textlist: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: '#000',
        fontWeight: '400',
        lineHeight: '1.5rem',

        ["@media (max-width: 1080px)"]: {
            '& p': {
                fontSize: '1rem'
            }
        }
    },
    imageHeader: {
        '& h1': {
            margin: 0,
            padding: 0
        },

        ["@media (max-width: 1080px)"]: {
            '& h1': {
                fontSize: '1.5rem'
            },
        },
        ["@media (max-width: 600px)"]: {
            '& p': {
                display: 'none'
            },
        },
        ["@media (max-width:480px)"]: {
            '& h1': {
                fontSize: '1.25rem'
            }
        }
    },
    containerToLg: {
        padding: '1rem',
        ["@media (max-width: 775px)"]: {
            display: 'none',

        }
    },
    containerToMd: {
        padding: '1rem',
        display: 'none',
        ["@media (max-width: 775px)"]: {
            display: 'flex',
            textAlign: 'center'
        }
    }
});

const SliderCardMain = ({data}) => {
    const classes = useStyles();

    return (
        <Swiper
            className={`${classes.swiperMain}`}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
        >
            <SwiperSlide>
                <Box mb='2rem' bgcolor='#FFF' width='100%' display='flex'>
                    <Box className={classes.containerToLg} display='flex'>
                        <Box width='50%' className={classes.imageHeader} flexDirection='column'
                             display='flex' alignItems='center' justifyContent='center'>
                            <Box pb={0} mb={0}>
                                <img style={{maxWidth: '100%'}} src={data.imageUrl}
                                     alt="sandwich sub image1"/>
                            </Box>
                            <Box>
                                <h1>{data.header}</h1>
                            </Box>
                        </Box>
                        <Box>
                        </Box>
                        <Box pl={'2rem'} pr={'2rem'} width='50%' className={classes.textlist} display='flex'
                             alignItems='center'>
                            <p>{data.text}</p>
                        </Box>
                    </Box>
                    <Box className={classes.containerToMd} display='flex'>
                        <Box
                            className={classes.imageHeader}
                            flexDirection='column'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Box>
                                <h1>{data.header}</h1>
                            </Box>
                            <Box>
                                <img style={{maxWidth: '100%'}} src={data.imageUrl}
                                     alt="sandwich sub image1"/>
                            </Box>
                            <Box width='100%' className={classes.textlist} display='flex' alignItems='center'>
                                <p>{data.text}</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderCardMain;
