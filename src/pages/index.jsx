import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',

    }}>

      <Navegador destino='/estiloso' texto='Estiloso'></Navegador>
      <Navegador destino='/exemplo' texto='Exemplo' cor='violet'></Navegador>
      <Navegador destino='/jsx' texto='JSX' cor='crimson'></Navegador>
    </div>
  )
}