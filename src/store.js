import { createStore } from "redux"

const initialState = {
    jugadores: [],
    titulares: [],
    suplentes: []
}

//FUNCIÓN REDUCTORA - ENCARGADA DE HACER LOS CAMBIOS EN LA APLICACIÓN
const reducerEntrenador = (state = initialState, action) => { //RECIBE DOS PARAMETROS: EL ESTADO ACTUAL Y UN OBJETO ACTION
    return state;

}

export default createStore (reducerEntrenador);