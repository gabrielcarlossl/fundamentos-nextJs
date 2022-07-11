import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function Exemplo(){
    return (

        <Layout titulo='Usando Componentes'>
            <Cabecalho titulo='Next.js & React' subtitulo='Fundamentos'></Cabecalho>
            <Cabecalho titulo='Gabriel'></Cabecalho>
        </Layout>
        
    )
}