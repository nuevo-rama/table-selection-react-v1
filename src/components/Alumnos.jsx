import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const Alumnos = ({alumnos, agregarDia1, agregarDia2}) => (
    <section>
        <h2>Alumnos</h2>
        <div className= "contenedor-modelos">
            {
                alumnos.map ( m => (
                    <article className= "modelo" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = { () => agregarDia1 (m)}>Clase Día 1</button>
                    <button onClick = { () => agregarDia2 (m)}>Clase Día 2</button>
                </div>

            </article>
                ))
            }
            
        </div>
    </section>

)


const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    alumnos : state.alumnos
});

const mapDispatchToProps = dispatch => ({ //mapDispatchToProps mapea las funciones y las convierte en propiedades
    agregarDia1 (alumno) {
        dispatch ({                         // objeto action
                type: "AGREGAR_DIA1",    //tipo de action
                alumno                   //objeto
            })
        },
    agregarDia2 (alumno) {
        dispatch ({                         // objeto action
                type: "AGREGAR_DIA2",    //tipo de action
                alumno                   //objeto
            })
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Alumnos); 


