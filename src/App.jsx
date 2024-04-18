import { useState } from "react"

import Perfil from "./components/Perfil/Profile"
import Formulario from "./components/Formulario"
import ReposList from "./components/RepoList"


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  //const nome = 'Adilson'

  //function retornaNome(){
  //return nome
//}

//const  pessoa = {
 // nome: 'Maria'
//}

//let estaDeDia = false

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    
    {nomeUsuario.length > 4 && (
      <>
    <Perfil nomeUsuario={nomeUsuario}/>
    < ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/*formularioEstaVisivel && (
      <Formulario />
    )*/}

    {/*<button onClick={() => {/*setFormularioEstaVisivel{/*(!formularioEstaVisivel)} type="button">Toggel form</button>
    
    )
}*/}

  </>

  )
}


export default App
