// import Swiper core and required components
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import React from "react";
import SliderCard from "./SliderCard.component";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
    }
})

const SliderComponent = ({perSlideView = 3, data = [], soloComponent = false}) => {
    const classes = useStyles();
    return (
        <Swiper
            className={`${classes.swiperMain} ${perSlideView > 1 ? 'multiple' : ''}`}
            spaceBetween={50}
            slidesPerView={perSlideView}
            navigation
            loop={true}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            breakpoints={{
                1: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 30
                },
                // when window width is <= 499px
                600: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 30
                },
                820: {
                    slidesPerView: 3,
                },
                // when window width is <= 999px
                900: {
                    slidesPerView: 4,
                    spaceBetweenSlides: 40
                },

            }}
        >
            {
                <>
                    {
                        data.map(el => (
                            <SwiperSlide><SliderCard text={el.header} imageUrl={el.imageUrl}/></SwiperSlide>
                        ))
                    }
                </>
            }
            {/*<SwiperSlide><SliderCardMain/></SwiperSlide>*/}
            {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
        </Swiper>
    );
};

export default SliderComponent;
