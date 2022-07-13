import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado(){
    
    

   

    const [state, setState] = useState(0)

    function incrementar(){
        setState(state + 1)
    }

    const estado = useState(1)
    let numero = estado[0]
    let altNum = estado[1]

    function incrementar2(){
        altNum(numero + 1)
    }
    return (
        <Layout titulo='Componente Com Estado'>
            <div>{state}</div>
            <button onClick={incrementar}>Incrementar</button>
            <div>Botão 2 com outra forma do UseState</div>
            <div>{numero}</div>
            <button onClick={incrementar2}>Incrementar 2</button>
        </Layout>
    )
}