import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const Modelos = ({modelos, agregarLija, agregarTabla}) => (
    <section>
        <h2>Modelos</h2>
        <div className= "contenedor-modelos">
            {
                modelos.map ( m => (
                    <article className= "modelo" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = { () => agregarLija (m)}>Lija</button>
                    <button onClick = { () => agregarTabla (m)}>Tabla</button>
                </div>

            </article>
                ))
            }
            
        </div>
    </section>

)


const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    modelos : state.modelos
});

const mapDispatchToProps = dispatch => ({ //mapDispatchToProps mapea las funciones y las convierte en propiedades
    agregarLija (modelo) {
        dispatch ({                         // objeto action
                type: "AGREGAR_LIJA",    //tipo de action
                modelo                    //objeto
            })
        },
    agregarTabla (modelo) {
        dispatch ({                         // objeto action
                type: "AGREGAR_TABLA",    //tipo de action
                modelo                    //objeto
            })
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Modelos); 


