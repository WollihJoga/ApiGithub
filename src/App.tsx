import axios from "axios"
import {useState} from 'react'
import "./App.css"
<link href="https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>



type Githubdata ={
  name: string;
  bio: string;
  avatar_url:string;
}

function App() {

  const [username, setUsername] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarURL] = useState("Loading...")
  const handlePesquisa = () =>{
    
    axios.get<Githubdata>(`https://api.github.com/users/${username}`).then ((response) => {
      setName(response.data.name)
      setBio(response.data.bio)
      setAvatarURL(response.data.avatar_url)
    })
  }



  return (
    <div className="container-geral">
      <div className="container">
       <header>Projeto EMIDES2AM
      </header>

      <main>
        <div className="form">
          <h1>Consumindo Api do Github</h1>
          <input type="text" placeholder="Digite o Usuário" onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={handlePesquisa}>Consultar</button>
        </div>
        <div className="conteudo">
        <div>
          <img src={avatar_url} alt="" />
          <h1>{name}</h1>
          <p> {bio}</p>
        </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default App
