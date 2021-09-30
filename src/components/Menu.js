import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from "axios";
import apiUrl from "../config/httpConnect";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(30) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl.url + "/categorys")
      .then((res) => {
        setMenuItems(res.data);
        window.localStorage.setItem("categoriyalar", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [setMenuItems]);

  const classes = useStyles();
  const theme = useTheme();

  const [openm, setOpenm] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenm(true);
  };

  const handleDrawerClose = () => {
    setOpenm(false);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleClose1 = (event) => {
    setOpen1(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleListKeyDown1(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    }
  }

  const history = useHistory();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openm,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openm,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Codemy
          </Typography>
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open1 ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle1}
            >
              <InfoIcon style={{ color: "white" }} />
            </Button>
            <Popper
              open={open1}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose1}>
                      <MenuList
                        autoFocusItem={open1}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown1}
                      >
                        <MenuItem
                          component={Link}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose1}
                          to={"/costs"}
                        >
                          Xarajatlar
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to={"/debts"}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose1}
                        >
                          Qarzlar
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to={"/birthday"}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose1}
                        >
                          Birthday
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <SettingsIcon style={{ color: "white" }} />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          component={Link}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose}
                          to={"/setcustomer"}
                        >
                          Customers
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to={"/setproduct"}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose}
                        >
                          Product
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to={"/setcategory"}
                          style={{ fontSize: "26px" }}
                          onClick={handleClose}
                        >
                          Category
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Button>
            <AddShoppingCartIcon
              style={{ color: "white" }}
              onClick={() => {
                history.push("/cart");
              }}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openm,
          [classes.drawerClose]: !openm,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openm,
            [classes.drawerClose]: !openm,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((menuItem, index) => {
            const { title, id } = menuItem;

            window.localStorage.setItem(`${title}`, id);

            return (
              <ListItemText key={index}>
                <Button
                  component={Link}
                  to={`/${title}`}
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemText style={{ marginLeft: "15px" }}>
                    {title}
                  </ListItemText>
                </Button>
              </ListItemText>
            );
          })}
        </List>
        {/* <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Button
            style={{
              display: "flex",
              position: "fixed",
              margin: "20px",
              backgroundColor: "#3F51B5",
              color: "#fff",
              width: "170px",
              bottom: "100px",
            }}
            component={Link}
            to={"/costs"}
          >
            Xarajatlar
          </Button>
          <Button
            style={{
              display: "flex",
              position: "fixed",
              margin: "20px",
              backgroundColor: "#3F51B5",
              color: "#fff",
              width: "170px",
              bottom: "50px",
            }}
            component={Link}
            to={"/birthday"}
          >
            birthday
          </Button>
          <Button
            style={{
              display: "flex",
              position: "fixed",
              margin: "20px",
              backgroundColor: "#3F51B5",
              color: "#fff",
              width: "170px",
            }}
            component={Link}
            to={"/debts"}
          >
            qarzlar
          </Button>
        </div> */}
      </Drawer>
    </div>
  );
}
