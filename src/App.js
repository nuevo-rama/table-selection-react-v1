import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/Jugadores";


const App = () => ( //COMPONENTE PRINCIPAL
  <Provider store = {store}>
    <main>
      <h1>Tabla de Selección</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
      


    </main>
    </Provider>
  
) 


export default App;
