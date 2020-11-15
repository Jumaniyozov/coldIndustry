import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: props => props.width,
        lineHeight: props => props.height,
        background: "linear-gradient(270deg, #D6B600 0%, #D38716 100%)",
        borderRadius: "10px",
        color: "white",
        fontWeight: 300,
        fontSize: "15px",
        border: "none",
        fontFamily: "'Montserrat', sans-serif"
    }
})

const ButtonCstm = ({width = '200px', height = '50px', children}, props) => {
    const classes = useStyles({width, height})
    return (
        <button className={classes.root} {...props}>
            {children}
        </button>
    );
};

export default ButtonCstm;
