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
      
      <Alumnos/>
      
      <ItemsSeleccionados/>
      
      <Footer/>
      


    </main>
    </Provider>
  
) 


export default App;
