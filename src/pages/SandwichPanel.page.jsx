import React, {useContext, useEffect, useState} from 'react';
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import {GlobalContext} from "../context/Main.context";
import {Link} from "react-router-dom";
import ButtonCstm from "../components/Button.component";

const useStyles = makeStyles({
    hr: {
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #D38716 , #D6B600)',
        height: '2px',
        border: 'none'
    },
    optionlist: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        color: '#FFF',
        fontSize: '1.25rem',
        lineHeight: '2.5rem',


        '& li': {
            fontWeight: 700,
            cursor: 'pointer',
            '&:hover, &.active': {
                '-webkitBackgroundClip': 'text',
                backgroundClip: 'text',
                color: 'transparent',
                background: 'linear-gradient(to right, #D38716 , #D6B600)',
            }
        },

        ["@media (max-width: 1280px)"]: {
            fontSize: '1rem',
            padding: 0
        },
        ["@media (max-width: 880px)"]: {
            fontSize: '1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '1rem',

            '& li': {
                backgroundClip: "padding-box",
                borderLeft: "solid 2px",
                paddingLeft: '1rem',
                borderImageSource: "linear-gradient(to bottom, #D38716 , #D6B600)",
                borderImageSlice: 1
            },
        },
        ["@media (max-width: 600px)"]: {
            gridTemplateColumns: '1fr 1fr',
        },
        ["@media (max-width: 460px)"]: {
            fontSize: '0.75rem',
            gridTemplateColumns: '1fr',
            gridGap: 0,
            paddingLeft: 0,
        }
    },
    textlist: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontStyle: 'italic',
        color: '#FFF',
        fontWeight: '300',
        lineHeight: '2rem',

        ["@media (max-width: 1280px)"]: {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
        },
        ["@media (max-width: 1080px)"]: {
            fontSize: '1rem',

            '&.sectionText': {
                width: '50%'
            }
        },
        ["@media (max-width: 880px)"]: {
            padding: 0,
            width: '100%'
        },

    },
    submenu: {
        color: '#FFF',
        fontSize: '1.5rem',
        fontWeight: '300',

        '& p:hover, & p.active': {
            cursor: 'pointer',
            '-webkitBackgroundClip': 'text',
            backgroundClip: 'text',
            color: 'transparent',
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
        },

        ["@media (max-width: 1080px)"]: {
            width: '100%',

            '& hr': {
                width: '50%'
            },

            '& .subOptions': {
                flexDirection: 'column',


                '& p': {
                    padding: 0,
                    margin: 0,
                    marginBottom: '1rem'
                }
            }
        },

        ["@media (max-width: 880px)"]: {
            paddingTop: '2rem',
        }
    },
    subHeader: {
        '& h1': {
            color: '#FFF'
        }
    },
    calcsection: {
        position: 'relative',

        '& #inlength1': {
            position: 'absolute',
            top: '26%',
            right: '16.5%',
            width: '10%'
        },
        '& #inheight1': {
            position: 'absolute',
            top: '61.5%',
            right: '3.25%',
            width: '10%'
        },
        '& #inheightk1': {
            position: 'absolute',
            top: '63.5%',
            right: '32.5%',
            width: '10%'
        },
        '& #inwidth1': {
            position: 'absolute',
            bottom: '2%',
            right: '34.5%',
            width: '10%'
        },


        '& #inlength2': {
            position: 'absolute',
            top: '14%',
            right: '22.5%',
            width: '10%'
        },
        '& #inheight2': {
            position: 'absolute',
            top: '61.5%',
            right: '3.25%',
            width: '10%'
        },
        '& #inheightk2': {
            position: 'absolute',
            top: '67.5%',
            right: '32.5%',
            width: '10%'
        },
        '& #inwidth2': {
            position: 'absolute',
            bottom: '2%',
            right: '34.5%',
            width: '10%'
        },


        '& #inlength3': {
            position: 'absolute',
            top: '32%',
            right: '19.5%',
            width: '10%'
        },
        '& #inheight3': {
            position: 'absolute',
            top: '64.5%',
            right: '3.25%',
            width: '10%'
        },
        '& #inwidth3': {
            position: 'absolute',
            bottom: '0%',
            right: '33.75%',
            width: '10%'
        },

        ["@media (max-width: 620px)"]: {
           '& img': {
                width: '480px !important',
               height: '320px !important'
           },
            '& #inwidth1, #inwidth2': {
                bottom: '1%',
            },

            '& #inwidth3': {
                bottom: '-1%',
            },
        },

        ["@media (max-width: 490px)"]: {
            '& img': {
                width: '340px !important',
                height: '240px !important'
            },
            '& #inlength1': {
                right: '16.5%',
            },
            '& #inheight1, #inheight2': {
                right: '2.85%',
            },
            '& #inheightk1, #inheightk2': {
                right: '30.5%',
            },
            '& #inwidth1, #inwidth2': {
                bottom: '-1%',
                right: '33.75%',
            },


            '& #inlength2': {
                right: '22.5%',
            },
            '& #inwidth2': {
                bottom: '-1%',
                right: '33.75%',
            },

            '& #inwidth3': {
                bottom: '-3%',

            },
        }
    },
    calccard: {
        backgroundColor: 'rgba(196,196,196, .2)',
        height: '27.5rem',
        width: '20rem',
        padding: '0 1rem',
        borderRadius: '1.5rem',

        '& hr': {
            margin: 0,
            padding: 0,
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
            height: '1.5px',
            border: 'none'
        },

        ["@media (max-width: 1080px)"]: {
            width: '50%',
            minWidth: '300px'
        }

    },
    submenu2: {
        color: '#FFF',
        fontSize: '1rem',
        fontWeight: '300',

        '& p:hover, & p.active': {
            cursor: 'pointer',
            '-webkitBackgroundClip': 'text',
            backgroundClip: 'text',
            color: 'transparent',
            background: 'linear-gradient(to right, #D38716 , #D6B600)',
        },

    },
    calcresults: {
        color: '#FFF',

        '& h2': {
            fontSize: '1.75rem',
            fontWeight: '400',
        },
        '& h3': {
            fontSize: '1.2rem',
            fontWeight: '400',
        }
    },
    boxLeft: {
        width: "50%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',

        "& p": {
            fontSize: "1.525rem",
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: "2.25rem"
        },

        "& h1": {
            fontWeight: "bold",
            fontSize: "2.9rem",
            lineHeight: "3.5rem"
        },

        '& .headerMd': {
            display: 'none'
        },

        ["@media (max-width: 880px)"]: {

            padding: 0,

            "& p": {
                fontSize: "1.25rem",
                lineHeight: "2rem"
            },

            "& h1": {
                fontWeight: "bold",
                fontSize: "2rem",
                lineHeight: "2.75rem"
            },
        },
        ["@media (max-width: 690px)"]: {
            width: '100%',

            '& .headerLg': {
                display: 'none'
            },

            '& .headerMd': {
                display: 'inline-block'
            }
        },
        ["@media (max-width: 480px)"]: {
            "& p": {
                fontSize: "1rem",
            },

            "& h1": {
                fontWeight: "bold",
                fontSize: "1.5rem",
                lineHeight: "2rem"
            },
        }
    },
    menuContainer: {

        '& img': {
            maxWidth: '100%',
        },
        ["@media (max-width: 690px)"]: {
            flexDirection: 'column'
        }
    },
    imageSide: {

        ["@media (max-width: 1080px)"]: {
            width: '50%',
        },
        ["@media (max-width: 690px)"]: {
            width: '100%',
            paddingTop: 0
        }
    },
    btnCatalog: {
        display: 'none',
        width: '100%',
        ["@media (max-width: 690px)"]: {
            display: 'flex',
        }
    },
    varText: {

        ["@media (max-width: 880px)"]: {
            display: 'flex',
            flexDirection: 'column',

            '& .catList': {
                width: '100%'
            }
        }
    },
    subMenuContainer: {
        '&.toMd': {
            display: 'none',
            color: '#FFF',

            '& h1': {
                fontSize: '1.5rem'
            },

            '& ul': {
                listStyle: 'none',
                padding: 0,
                margin: 0
            },

            '& li': {
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#FFF',
                fontWeight: '300',
                lineHeight: '2rem',
            }
        },
        ["@media (max-width: 880px)"]: {
            display: 'none',

            '&.toMd': {
                display: 'flex',
                flexDirection: 'column',

            }
        },
    },
    calcContainer: {
        justifyContent: 'space-around',

        ["@media (max-width: 1080px)"]: {
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center'
        },

        ["@media (max-width: 880px)"]: {
            paddingTop: 0,
            marginTop: '2rem'
        },
    },
    calcHeader: {
        ["@media (max-width: 880px)"]: {
            paddingTop: '2rem'
        },

    },

    hrContainer: {
        ["@media (max-width: 880px)"]: {
            display: 'none'
        },
    }
});

const SandwichRenderer = ({history}) => {
    const classes = useStyles();
    const {sandwichPanelPageInfo, fetchSPPage} = useContext(GlobalContext);

    const [subText, setSubText] = useState(0);
    const [subOption, setSubOption] = useState(0);
    const [subRoof, setSubRoof] = useState(0);

    const handleSubText = (event, index) => {
        const currentClass = document.getElementsByClassName('subTextli');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        console.log(currentClass);
        event.target.classList.add('active');
        setSubText(index);
    }

    const handleSubOption = (event, index) => {
        const currentClass = document.getElementsByClassName('subOptionItem');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        event.target.classList.add('active');
        setSubOption(index);
    }

    const handleRoofOption = (event, index) => {
        const currentClass = document.getElementsByClassName('roofOptionItem');

        Array.from(currentClass).forEach(cc => cc.classList.remove('active'));
        event.target.classList.add('active');
        setSubRoof(index);
    }

    useEffect(() => {
        fetchSPPage();
    }, [sandwichPanelPageInfo, history])

    // varText
    // optionlist
    // textlist
    return (
        <>
            {sandwichPanelPageInfo.length < 1
                ? <h1>Loading...</h1>
                : <>
                    <Box bgcolor="#1F1F23" pl={'3rem'} pr={'3rem'}>
                        <Box bgcolor="#1F1F23" pt={'8rem'} display='flex' className={classes.menuContainer}>
                            <Box width="50%" pt={"2rem"} display='flex' alignItems='center' justifyContent='center'
                                 className={classes.imageSide}>
                                <Box>
                                    <img src={sandwichPanelPageInfo.mainH.imageUrl}
                                         alt={`${sandwichPanelPageInfo.mainH.header}`}/>
                                </Box>
                            </Box>
                            <Box className={classes.boxLeft}>
                                <Box>
                                    <h1 className={'headerLg'}>{sandwichPanelPageInfo.mainH.header}</h1>
                                    <p>{sandwichPanelPageInfo.mainH.text}</p>
                                    <h1 className={'headerMd'}>{sandwichPanelPageInfo.mainH.header}</h1>
                                    <Box className={classes.btnCatalog}>
                                        <Link to='' style={{width: '100%'}}>
                                            <ButtonCstm width={'100%'} height={'3rem'}>
                                                {sandwichPanelPageInfo.mainH.btnText}
                                            </ButtonCstm>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.hrContainer} width='30%' pl={'2.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                            <hr className={classes.hr}/>
                        </Box>
                        <Box display='flex' mt={'7rem'} className={classes.varText}>
                            <Box width='25%' className={'catList'}>
                                <ul className={classes.optionlist}>
                                    {sandwichPanelPageInfo.subMenu.map((sb, index) => (
                                        <li className={`subTextli ${index === 0 ? 'active' : ''}`}
                                            onClick={e => handleSubText(e, index)}
                                            key={sb.header}>
                                            {sb.header}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                            <Box width='75%' display='flex' alignItems='center'
                                 justifyContent='center' className={classes.textlist}>
                                <Box>
                                    {Array.isArray(sandwichPanelPageInfo.subMenu[subText].text)
                                        ? (sandwichPanelPageInfo.subMenu[subText].text.map(par =>
                                            <p>{par}</p>))
                                        : <p>{sandwichPanelPageInfo.subMenu[subText].text}</p>
                                    }
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.subMenuContainer}>
                            <Box width='30%' pt={'8rem'} bgcolor="#1F1F23" className={classes.submenu}>
                                <Box display='flex' justifyContent='space-between' className={'subOptions'}>
                                    {
                                        sandwichPanelPageInfo.subOption.map((ty, index) => (
                                                <p
                                                    className={`subOptionItem ${index === 0 ? 'active' : ''}`}
                                                    onClick={(e) => handleSubOption(e, index)}>
                                                    {ty.type}
                                                </p>
                                            )
                                        )
                                    }
                                </Box>
                                <hr className={classes.hr}/>
                            </Box>
                            <Box display='flex' mt={'5rem'}>
                                <Box width='70%' className={`${classes.textlist} sectionText`}>
                                    <p>{sandwichPanelPageInfo.subOption[subOption].content.header1}</p>
                                </Box>
                                <Box className={classes.imageSide} width='30%' display='flex' alignItems='center'
                                     justifyContent='center'>
                                    <img style={{maxWidth: '100%'}}
                                         src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl1}
                                         alt="sandwich sub image1"/>
                                </Box>
                            </Box>
                            <Box display='flex' mt={'5rem'}>
                                <Box width='30%' display='flex' alignItems='center' justifyContent='center' mt={'2rem'}>
                                    <img style={{maxWidth: '100%'}}
                                         src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl2}
                                         alt="sandwich sub image1"/>
                                </Box>
                                <Box width='70%' className={classes.textlist}>
                                    <p>{sandwichPanelPageInfo.subOption[subOption].content.header2}</p>
                                </Box>
                            </Box>
                            <Box display='flex' mt={'5rem'}>
                                <Box width='70%' className={classes.textlist}>
                                    <p>{sandwichPanelPageInfo.subOption[subOption].content.header3}</p>
                                </Box>
                                <Box width='30%' display='flex' alignItems='center' justifyContent='center'>
                                    <img style={{maxWidth: '100%'}}
                                         src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl3}
                                         alt="sandwich sub image1"/>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={`${classes.subMenuContainer} toMd`}>
                            <h1>{sandwichPanelPageInfo.subOptionMd.header}</h1>
                            <ul>
                                {sandwichPanelPageInfo.subOptionMd.text.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))
                                }
                            </ul>
                        </Box>
                        <Box width='30%' className={classes.calcHeader} pt={'8rem'} bgcolor="#1F1F23">
                            <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                <h1>Калькулятор стоимости</h1>
                            </Box>
                            <hr className={classes.hr}/>
                        </Box>

                        <Box display='flex' mt={'5rem'} className={classes.calcContainer}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                                <Box className={classes.calcsection}>
                                    <img style={{height: '400px', width: '600px'}}
                                         src={sandwichPanelPageInfo.calcRoof[subRoof].imageUrl}
                                         alt="sandwich sub image1"/>
                                    {/*subRoof*/}
                                    {subRoof === 0 &&
                                    <Box>
                                        <input type="number" id='inlength1'/>
                                        <input type="number" id='inheight1'/>
                                        <input type="number" id='inheightk1'/>
                                        <input type="number" id='inwidth1'/>
                                    </Box>
                                    }
                                    {subRoof === 1 &&
                                    <Box>
                                        <input type="number" id='inlength2'/>
                                        <input type="number" id='inheight2'/>
                                        <input type="number" id='inheightk2'/>
                                        <input type="numbers" id='inwidth2'/>
                                    </Box>
                                    }
                                    {subRoof === 2 &&
                                    <Box>
                                        <input type="number" id='inlength3'/>
                                        <input type="number" id='inheight3'/>
                                        <input type="numbers" id='inwidth3'/>
                                    </Box>
                                    }
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'>
                                <Card className={classes.calccard}>
                                    <Box height='100%' display='flex' flexDirection='column'
                                         justifyContent='space-between'>
                                        <Box>
                                            <Box display='flex' justifyContent='space-between'
                                                 className={classes.submenu2}>
                                                {
                                                    sandwichPanelPageInfo.calcRoof.map((ri, index) => (
                                                        <p
                                                            className={`roofOptionItem ${index === 0 ? 'active' : ''}`}
                                                            onClick={e => handleRoofOption(e, index)}
                                                        >
                                                            {ri.type}
                                                        </p>
                                                    ))
                                                }
                                            </Box>
                                            <hr/>
                                        </Box>
                                        <Box className={classes.calcresults} mb={'2rem'}>
                                            {
                                                sandwichPanelPageInfo.calcRoof[subRoof].header
                                                    ? (
                                                        <Box>
                                                            <p>{sandwichPanelPageInfo.calcRoof[subRoof].header}</p>
                                                        </Box>
                                                    )
                                                    : ''
                                            }
                                            <h3>Площадь кровли: 77.03 м2</h3>
                                            <h3>Площадь стен: 90.00 м2</h3>
                                            <h2>Итого: 167.03 м2</h2>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </>
    )
}

const SandwichPanelPage = () => {
    return (
        <div>
            <SandwichRenderer/>
        </div>
    );
};

export default SandwichPanelPage;
