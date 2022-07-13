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
      <Navegador destino='/navegacao' texto='Navegação #01' cor='green'></Navegador>
      <Navegador destino='/cliente/pb/123' texto='Navegação #01' cor='blue'></Navegador>
      <Navegador destino='/estado' texto='Componente com Estado' cor='gray'></Navegador>
      <Navegador destino='/integracao_1' texto='Integração com API #01' cor='#82E0AA'></Navegador>

    </div>
  )
}