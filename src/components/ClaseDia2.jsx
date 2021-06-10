import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const ClaseDia2 = ({dia2, quitarDia2}) => (
    <section>
        <h2>Clase Dia 2</h2>
        <div className= "tablas">
            {
                dia2.map(m => (
                    <article className= "tabla" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = {() => quitarDia2 (m)}>X</button>
                    
                </div>
                    <p>{m.nombre}</p>
            </article>
                ))
            }
            

        </div>
    </section>
)

const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    dia2 : state.dia2
});

const mapDispatchToProps = dispatch => ({   //mapDispatchToProps mapea las funciones y las convierte en propiedades
    quitarDia2 (alumno) {
        dispatch ({
            type: "QUITAR_DIA2",
            alumno
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchToProps) (ClaseDia2);