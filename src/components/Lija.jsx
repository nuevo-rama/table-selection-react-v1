import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const Lijas = ({lijas, quitarLija}) => (
    <section>
        <h2>Lijas</h2>
        <div className= "design">
            {
                lijas.map(m => (
                    <article className= "lija" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = {() => quitarLija (m)}>X</button>
                    
                </div>
                    <p>{m.nombre}</p>
            </article>
                ))
            }
            

        </div>
    </section>
)

const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    lijas : state.lijas
});

const mapDispatchToProps = dispatch => ({ //mapDispatchToProps mapea las funciones y las convierte en propiedades
    quitarTitular (modelo) {
        dispatch ({
            type: "QUITAR_LIJA",
            modelo,
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchToProps) (Lijas);