import { Provider } from "react-redux";
import store from "./store";
import Alumnos from "./components/Alumnos";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ItemsSeleccionados from "./components/ItemsSeleccionados";
import "./styles/styles.css";


const App = () => ( //COMPONENTE PRINCIPAL
  <Provider store = {store}>
    <main>
      <Header/>
      <header className= "header"></header>
      <div className= "contenedor-total">
      <h1>Tabla de Selección</h1>
      <Alumnos/>
      <section className= "centro"></section>
      <ItemsSeleccionados/>
      </div>
      <Footer/>
      <footer className="footer"></footer>
      


    </main>
    </Provider>
  
) 


export default App;
