import { createStore } from "redux"

const initialState = {
    alumnos: [{
        id: 1,
        nombre: "Juan",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 7"
    },
    {
        id: 2,
        nombre: "Carlos",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 6"
    },
    {
        id: 3,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 4,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 5,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 6,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 7,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 8,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 9,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    },
    {
        id: 10,
        nombre: "María",
        foto: "./images/product-images/1.png",
        calificaciones: "Última Calificación: 5"
    }],
    dia1: [],
    dia2: []
}

//FUNCIÓN REDUCTORA - ENCARGADA DE HACER LOS CAMBIOS EN LA APLICACIÓN
const reducerSeleccion = (state = initialState, action) => { //RECIBE DOS PARAMETROS: EL ESTADO ACTUAL Y UN OBJETO ACTION
    
    if (action.type === "AGREGAR_DIA1") {
        return {
            ...state,
            dia1: state.dia1.concat (action.alumno), // en el objeto action está llegando un modelo
            alumnos: state.alumnos.filter(m => m.id !== action.alumno.id)
        }
    }

    if (action.type === "AGREGAR_DIA2") {
        return {
            ...state,
            dia2: state.dia2.concat (action.alumno), // en el objeto action está llegando un modelo
            alumnos: state.alumnos.filter(m => m.id !== action.alumno.id)
        }
    }

    if (action.type === "QUITAR_DIA1") {
        return {
            ...state,
            dia1: state.dia1.filter (m => m.id !== action.alumno.id), 
            alumnos: state.alumnos.concat (action.alumno)
        }
    }

    if (action.type === "QUITAR_DIA2") {
        return {
            ...state,
            dia2: state.dia2.filter (m => m.id !== action.alumno.id), 
            alumnos: state.alumnos.concat (action.alumno)
        }
    }
    return state;

}

export default createStore (reducerSeleccion);