import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const Tablas = ({tablas, quitarTabla}) => (
    <section>
        <h2>Tablas</h2>
        <div className= "tablas">
            {
                tablas.map(m => (
                    <article className= "tabla" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = {() => quitarTabla (m)}>X</button>
                    
                </div>
                    <p>{m.nombre}</p>
            </article>
                ))
            }
            

        </div>
    </section>
)

const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    tablas : state.tablas
});

const mapDispatchToProps = dispatch => ({   //mapDispatchToProps mapea las funciones y las convierte en propiedades
    quitarTitular (modelo) {
        dispatch ({
            type: "QUITAR_TABLA",
            modelo
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchToProps) (Tablas);