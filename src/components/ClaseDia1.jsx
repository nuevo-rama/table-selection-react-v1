import React from "react";
import { connect } from "react-redux"; //me conecto al store para poder leer la data

const ClaseDia1 = ({dia1, quitarDia1}) => (
    <section>
        <h2>Clase Día 1</h2>
        <div className= "design">
            {
                dia1.map(m => (
                    <article className= "lija" key= {m.id}>
                <img src={m.foto} alt={m.nombre}/>
                <h3>{m.nombre}</h3>
                <div>
                    <button onClick = {() => quitarDia1 (m)}>X</button>
                    
                </div>
                    <p>{m.nombre}</p>
            </article>
                ))
            }
            

        </div>
    </section>
)

const mapStateToProps = state => ({ //mapStateToProps mapea lo que tengo en el estado y lo convierte en propiedades 
    dia1 : state.dia1
});

const mapDispatchToProps = dispatch => ({ //mapDispatchToProps mapea las funciones y las convierte en propiedades
    quitarDia1 (alumno) {
        dispatch ({
            type: "QUITAR_DIA1",
            alumno,
        })
    }
}); 

export default connect(mapStateToProps, mapDispatchToProps) (ClaseDia1);