import { Provider } from "react-redux";
import store from "./store";
import Modelos from "./components/Modelos";
import Header from "./components/Header";
import ItemsSeleccionados from "./components/ItemsSeleccionados";
import "./styles/styles.css";


const App = () => ( //COMPONENTE PRINCIPAL
  <Provider store = {store}>
    <main>
      <Header/>
      <header className= "header"></header>
      <div className= "contenedor-total">
      <h1>Tabla de Selección</h1>
      <Modelos/>
      <section className= "centro"></section>
      <ItemsSeleccionados/>
      </div>
      <footer className="footer"></footer>
      


    </main>
    </Provider>
  
) 


export default App;
