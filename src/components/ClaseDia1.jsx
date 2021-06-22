import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { connect } from "react-redux"; //me conecto al store para poder leer la data

const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

  function ClaseDia1 ({dia1, quitarDia1}) {
    const classes = useStyles();
  
    return (
  
    <React.Fragment>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            Aula 1
          </Typography>
          <List className={classes.list}>
            {
            dia1.map ( m => (
              <React.Fragment key={m.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={m.foto} />
                  </ListItemAvatar>
                  <ListItemText primary={m.nombre} secondary={m.calificaciones}/>
                  <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" size="small">
                    <Button onClick = { () => quitarDia1 (m)}>X</Button>
                  </ButtonGroup>                    
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>

)};

const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    dia1 : state.dia1
});

const mapDispatchToProps = dispatch => ({ //mapDispatchToProps mapea las funciones y las convierte en propiedades
    quitarDia1 (alumno) {
        dispatch ({
            type: "QUITAR_DIA1",
            alumno,
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchToProps) (ClaseDia1);