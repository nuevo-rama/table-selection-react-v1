import { createStore } from "redux"

const initialState = {
    modelos: [{
        id: 1,
        nombre: "Tabla 1",
        foto: "./images/product-images/skate-1.png"
    },
    {
        id: 2,
        nombre: "Tabla 2",
        foto: "./images/product-images/skate-1.png"
    },
    {
        id: 3,
        nombre: "Tabla 3",
        foto: "./images/product-images/skate-1.png"
    }],
    lijas: [],
    tablas: []
}

//FUNCIÓN REDUCTORA - ENCARGADA DE HACER LOS CAMBIOS EN LA APLICACIÓN
const reducerSeleccion = (state = initialState, action) => { //RECIBE DOS PARAMETROS: EL ESTADO ACTUAL Y UN OBJETO ACTION
    
    if (action.type === "AGREGAR_LIJA") {
        return {
            ...state,
            lijas: state.lijas.concat (action.modelo), // en el objeto action está llegando un modelo
            modelos: state.modelos.filter(m => m.id !== action.modelo.id)
        }
    }

    if (action.type === "AGREGAR_TABLA") {
        return {
            ...state,
            tablas: state.tablas.concat (action.modelo), // en el objeto action está llegando un modelo
            modelos: state.modelos.filter(m => m.id !== action.modelo.id)
        }
    }

    if (action.type === "QUITAR_LIJA") {
        return {
            ...state,
            lijas: state.lijas.filter (m => m.id !== action.modelo.id), 
            modelos: state.modelos.concat (action.modelo)
        }
    }

    if (action.type === "QUITAR_TABLA") {
        return {
            ...state,
            tablas: state.tablas.filter (m => m.id !== action.modelo.id), 
            modelos: state.modelos.concat (action.modelo)
        }
    }
    return state;

}

export default createStore (reducerSeleccion);