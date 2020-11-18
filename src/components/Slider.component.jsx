// import Swiper core and required components
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Box from "@material-ui/core/Box";
import React from "react";
import SliderCardMain from "./SliderCardMain.component";
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

        '& .swiper-wrapper': {
            paddingRight: '5rem',
            // marginRight: '5rem',
        }
    }
})

const SliderComponent = ({perSlideView = 3}) => {
    const classes = useStyles();
    return (
        <Swiper
            className={classes.swiperMain}
            spaceBetween={50}
            slidesPerView={perSlideView}
            navigation
            loop={true}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            {
                perSlideView === 1
                    ? (
                        <SwiperSlide><SliderCardMain/></SwiperSlide>
                    ) : (
                        <>
                            <SwiperSlide><SliderCard /></SwiperSlide>
                            <SwiperSlide><SliderCard /></SwiperSlide>
                            <SwiperSlide><SliderCard /></SwiperSlide>
                            <SwiperSlide><SliderCard /></SwiperSlide>
                        </>
                    )
            }
            {/*<SwiperSlide><SliderCardMain/></SwiperSlide>*/}
            {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
        </Swiper>
    );
};

export default SliderComponent;
