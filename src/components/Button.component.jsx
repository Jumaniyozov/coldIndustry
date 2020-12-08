import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: props => props.width,
        lineHeight: props => props.height,
        background: "transparent",
        borderRadius: "10px",
        color: "white",
        fontWeight: 300,
        fontSize: "15px",
        border: "solid 2px rgba(211, 135, 22, 1)",
        fontFamily: "'Montserrat', sans-serif",
        position: `relative`,
        overflow: 'hidden',
        transition: "all 0.2s ease-in-out",

        '& p': {
            padding: 'inherit',
            margin: 'inherit',
            fontSize: 'inherit',
            position: 'relative',
            zIndex: 2
        },

        '&:focus': {
            outline: 'none'
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


        '&:hover': {
            border: "solid 2px rgba(211, 135, 22, 0)",

            '&::before': {
                opacity: 1,
            }
        }

    },

})

const ButtonCstm = ({width = '200px', height = '50px', children}, props) => {
    const classes = useStyles({width, height})
    return (
        <button className={classes.root} {...props}>
            <p>{children}</p>
        </button>
    );
};

export default ButtonCstm;
