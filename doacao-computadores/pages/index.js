import axios from 'axios'

export default function Home() {
  const alive = axios.get('https://doar-computador-api.herokuapp.com/')
    
  if (alive===true){
      return (
        <div>
          <header>
            <h1 class='titulo'></h1>
            <p>API Online</p>
          </header>
          <main>
            <form method='post'>
              Nome: <input type='text' name='nome'></input>
              E-mail: <input type='email' name='email'></input>
              Telefone: <input type='number' name='telefone'></input>
            </form>
          </main>
        </div>
      )
  }
  else{
      return (
        <div>
          <header>
            <h1 class='titulo'></h1>
            <p>API Offline</p>
          </header>
          <main>
            <form method='post'>
              Nome: <input type='text' name='nome'></input>
              E-mail: <input type='email' name='email'></input>
              Telefone: <input type='number' name='telefone'></input>
            </form>
          </main>
        </div>
      )
    }
}
