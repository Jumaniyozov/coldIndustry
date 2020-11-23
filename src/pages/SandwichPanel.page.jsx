import React, {useContext, useEffect, useState} from 'react';
import HomeShowCard from "../components/HomeShowCat.component";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import {GlobalContext} from "../context/Main.context";

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
        // marginRight:'3rem',
        paddingRight: '5rem',
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
        }
    }, subHeader: {
        '& h1': {
            color: '#FFF'
        }
    },
    calcsection: {
        position: 'relative',

        '& #inlength': {
            position: 'absolute',
            top: '20%',
            right: '19.5%',
            width: '10%'
        },
        '& #inheight': {
            position: 'absolute',
            top: '60%',
            right: '3%',
            width: '10%'
        },
        '& #inwidth': {
            position: 'absolute',
            bottom: '0%',
            right: '34%',
            width: '10%'
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


    return (
        <>
            {sandwichPanelPageInfo.length < 1
                ? <h1>Loading...</h1>
                : <>
                    <Box bgcolor="#1F1F23">
                        <Box bgcolor="#1F1F23" pt={'8rem'} pl={'3rem'}>
                            <HomeShowCard
                                header={sandwichPanelPageInfo.mainH.header}
                                text={sandwichPanelPageInfo.mainH.text}
                                imageUrl={sandwichPanelPageInfo.mainH.imageUrl}
                                imageHeight='25rem'
                                imageWidth='38rem'
                                leftSideText
                            />
                        </Box>
                        <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                            <hr className={classes.hr}/>
                        </Box>
                        <Box display='flex' mt={'5rem'}>
                            <Grid container>
                                <Grid item lg={4}>
                                    <Box pl={'3rem'}>
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
                                </Grid>
                                <Grid item lg={8} className={classes.textlist}>
                                    <Box width='100%' display='flex' alignItems='center' justifyContent='flex-start'>
                                        <Box>
                                            {Array.isArray(sandwichPanelPageInfo.subMenu[subText].text)
                                                ? (sandwichPanelPageInfo.subMenu[subText].text.map(par => <p>{par}</p>))
                                                : <p>{sandwichPanelPageInfo.subMenu[subText].text}</p>
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                            <Box display='flex' justifyContent='space-between' className={classes.submenu}>
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
                            <Grid container>
                                <Grid item lg={7} className={classes.textlist}>
                                    <Box pl={'5rem'}>
                                        <p>{sandwichPanelPageInfo.subOption[subOption].content.header1}</p>
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box display='flex' alignItems='center' justifyContent='center' pr={'3rem'}>
                                        <Box>
                                            <img style={{height: '400px', width: '500px'}}
                                                 src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl1}
                                                 alt="sandwich sub image1"/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display='flex' mt={'5rem'}>
                            <Grid container>
                                <Grid item lg={5}>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt={'2rem'}
                                         pl={'3rem'}>
                                        <Box>
                                            <img style={{height: '300px', width: '500px'}}
                                                 src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl2}
                                                 alt="sandwich sub image1"/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={7} className={classes.textlist}>
                                    <Box pl={'5rem'}>
                                        <p>{sandwichPanelPageInfo.subOption[subOption].content.header2}</p>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display='flex' mt={'5rem'}>
                            <Grid container>
                                <Grid item lg={7} className={classes.textlist}>
                                    <Box pl={'5rem'}>
                                        <p>{sandwichPanelPageInfo.subOption[subOption].content.header3}</p>
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box display='flex' alignItems='center' justifyContent='center' pr={'8rem'}>
                                        <Box>
                                            <img style={{height: '400px', width: '600px'}}
                                                 src={sandwichPanelPageInfo.subOption[subOption].content.imageUrl3}
                                                 alt="sandwich sub image1"/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box width='30%' pl={'5.5rem'} pt={'8rem'} bgcolor="#1F1F23">
                            <Box display='flex' justifyContent='space-between' className={classes.subHeader}>
                                <h1>Калькулятор стоимости</h1>
                            </Box>
                            <hr className={classes.hr}/>
                        </Box>

                        <Box display='flex' mt={'5rem'}>
                            <Grid container>
                                <Grid item lg={7}>
                                    <Box display='flex' alignItems='center' justifyContent='center'>
                                        <Box className={classes.calcsection}>
                                            <img style={{height: '400px', width: '600px'}}
                                                 src={sandwichPanelPageInfo.calcRoof[subRoof].imageUrl}
                                                 alt="sandwich sub image1"/>
                                            {sandwichPanelPageInfo.calcRoof[subRoof].inputNum === 3
                                                ? (
                                                    <>
                                                        <input type="number" id='inlength'/>
                                                        <input type="number" id='inheight'/>
                                                        <input type="numbers" id='inwidth'/>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input type="number" id='inlength'/>
                                                        <input type="number" id='inheight'/>
                                                        <input type="numbers" id='inwidth'/>
                                                        <input type="numbers" id='inwidth'/>
                                                    </>
                                                )
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box pl={'5rem'}>
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
                                </Grid>
                            </Grid>
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
