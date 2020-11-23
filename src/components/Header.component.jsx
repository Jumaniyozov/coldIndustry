import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    list: {
        width: 250,

    },
    icons: {
        color: 'white'
    },
    listItem: {
        // color: 'green',
        '& a': {
            width: '100%',
            color: '#FFF',
            textDecoration: 'none'
        },
        '&:hover': {
            backgroundImage: 'linear-gradient(to right, #D38716 , #D6B600)'
        }
    },
    fullList: {
        width: 'auto',
    },
    sideList: {
        color: 'white',

        '& hr': {
            display: 'none'
        }
    },
    header: {
        width: "100%",
        height: "4rem",
        position: "fixed",
        zIndex: 999,

        '& #siteLogo': {
            ["@media (max-width:460px)"]: {
                width: '100%'
            }
        }
    }
});

export default function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/*{['', '', '', '', '', ''].map((text, index) => (*/}
                {/*    <ListItem className={classes.listItem} button key={text}>*/}
                {/*        <ListItemText primary={text}/>*/}
                {/*    </ListItem>*/}
                {/*))}*/}
                <ListItem className={classes.listItem} button key={'О Нас'}>
                    <Link to={`/about`}>
                        <ListItemText primary={'О Нас'}/>
                        {/*<button>О Нас</button>*/}
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} button key={'Сендвич Панели'}>
                    <Link to={`/sandwichpanels`}>
                        <ListItemText primary={'Сендвич Панели'}/>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} button key={'Холодильные Кузова'}>
                    <Link to={`/coolingframes`}>
                        <ListItemText primary={'Холодильные Кузова'}/>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} button key={'Холодильное Оборудование'}>
                    <Link to={`/coolingengines`}>
                        <ListItemText primary={'Холодильное Оборудование'}/>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} button key={`Двери 'Mano'`}>
                    <Link to={`/doors`}>
                        <ListItemText primary={`Двери 'Mano'`}/>
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem} button key={'Пенополистирол'}>
                    <Link to={`/penoplasts`}>
                        <ListItemText primary={'Пенополистирол'}/>
                    </Link>
                </ListItem>
            </List>
            <Divider/>
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem className={classes.listItem} button key={text}>*/}
            {/*            <ListItemIcon className={classes.icons}>{index % 2 === 0 ? <InboxIcon/> :*/}
            {/*                <MailIcon/>}</ListItemIcon>*/}
            {/*            <ListItemText primary={text}/>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
    );

    return (
        <div className={classes.header}>
            <Box height='100%' display="flex" p={1} bgcolor="#1F1F23" justifyContent="space-between">
                <Link to='/'>
                    <Box ml={3}>
                        <img
                            id='siteLogo'
                            src={'./images/SiteLogoText.svg'}
                            style={{height: '50px'}}
                            alt="website logo"
                        />
                    </Box>
                </Link>

                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            <img
                                src={'./images/HamburgerMenu.svg'}
                                style={{height: '25px', width: '25px'}}
                                alt="hamburger Menu"
                            />
                        </Button>
                        <Drawer className={classes.mainList} anchor={anchor} open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}>
                            <Box height='100%' bgcolor="#1F1F23" className={classes.sideList}>
                                {list(anchor)}
                            </Box>
                        </Drawer>
                    </React.Fragment>
                ))}
            </Box>
        </div>
    );
}
