import Layout from "../components/Layout"

export default function Jsx(){

    const a = Math.random()
    const b = Math.random()

    const result = a + b

    const titulo = <h1>NEXT.JS</h1>


    function subtitulo() {
        return <h2>Fundamentos</h2>
    }

    return (
        <Layout titulo='Fundamento do JSX'>
            {titulo}
            {subtitulo()}
            <h1>JSX é um conceito central</h1>
            <p> Resultado: <strong>{result}</strong></p>
            <p>
                {JSON.stringify({nome: 'Gabriel', idade :23, endereco: 'João Pessoa, Paraíba'})}
            </p>
        </Layout>
    )
}