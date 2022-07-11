import styles from '../styles/Estiloso.module.css'
import Link from "next/link"
import Layout from '../components/Layout'


export default function Estiloso(props){
    return (
        <Layout titulo='Exemplo de CSS Modularizado'>
            <div className={styles.roxo}>
                
                <h1>Componente Estiloso</h1>
                <h2>Esilo usando CSS Módulo</h2>

            </div>
        </Layout>
        
    )
}