import React from 'react';
import { AppBar, Toolbar, List, ListItem, ListItemText, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white'
  }
});

const navLinks = [
  { title: 'Expenses', path: '/expenses' },
  { title: 'Income', path: '/income' },
  { title: 'Budget', path: '/budget' }
];

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navDisplayFlex}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              href="/home"
            >
              <Home fontSize="large" />
            </IconButton>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a
                  href={path}
                  key={title}
                  className={classes.linkText}
                >
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
