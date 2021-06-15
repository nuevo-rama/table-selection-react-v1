import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Alumnos from "./components/Alumnos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemsSeleccionados from "./components/ItemsSeleccionados";

import CssBaseline from '@material-ui/core/CssBaseline';

import "./styles/styles.css";


const App = () => ( //COMPONENTE PRINCIPAL
  <Provider store = {store}>
    <React.Fragment>
      <CssBaseline />
      <Header/>
      
      <Alumnos/>
      
      <ItemsSeleccionados/>
      
      <Footer/>
    </React.Fragment>
    
  </Provider>
  
) 


export default App;
