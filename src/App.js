import { Provider } from "react-redux";
import store from "./store";
import Modelos from "./components/Modelos";
import ItemsSeleccionados from "./components/ItemsSeleccionados";
import "./styles/styles.css";


const App = () => ( //COMPONENTE PRINCIPAL
  <Provider store = {store}>
    <main>
      <h1>Tabla de Selección</h1>
      <Modelos/>
      <ItemsSeleccionados/>
      


    </main>
    </Provider>
  
) 


export default App;
