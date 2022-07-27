import axios from 'axios'

export default function Home() {
  document.getElementsByClassName('titulo').innerHTML = 'Doação de computadores usados'
  const alive = axios.get('https://doar-computador-api.herokuapp.com/')
    
  if (alive===true){
      return (
        <div>
          <main>
            <h1 class='titulo'></h1>
            <p>API Online</p>
          </main>
        </div>
      )
  }
  else{
      return (
        <div>
          <main>
            <h1 class='titulo'></h1>
            <h1>Doação de computadores usados</h1>
            <p>API Offline</p>
          </main>
        </div>
      )
    }
}
