import React, {useState} from 'react';

const Contapp = () => {

    let [contador,setContador] = useState(0);
    let [otroContador,setOtroContador] = useState(0);
    
    const incrementarClick = () => {
        setContador(contador + 1);
    }

    const decrementarClick = () => {
        setContador(contador - 1);
    }

   const modificarContador = (tipo) => {
        if  (tipo==="suma")  setOtroContador(otroContador + 1); else setOtroContador(otroContador - 1); 
    }

    return(
        <div className="contenedorGrupo">
            <div className="contenedorDiv">
                <p>Contador de Clicks</p>
                <button onClick={incrementarClick} className="btn btn-outline-success m-2 incrementar">Incrementar</button>
                <button onClick={decrementarClick} className="btn btn-outline-info m-2 decrementar">Decrementar</button>
                <h5>Cicks: {contador}</h5>
            </div>
            <div className="p-10 contenedorDiv">
                <p>Otro Contador de Clicks</p>
                <button onClick={() => modificarContador("suma")} className="btn btn-outline-success m-2 incrementar">Incrementar</button>
                <button onClick={() => modificarContador("resta")} className="btn btn-outline-info m-2 decrementar">Decrementar</button>
                <h5>Cicks: {otroContador}</h5>
            </div>
        </div>
    )
}

export default Contapp;