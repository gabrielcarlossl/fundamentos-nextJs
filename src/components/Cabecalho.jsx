export default function Cabecalho(props){
    return (
        <header>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </header>
    )
}