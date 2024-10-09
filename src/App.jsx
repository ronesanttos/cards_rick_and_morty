import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  const [dados, setDados] = useState([])
  const [cont, setcont] = useState(1)

  const characters = async () => {
    await fetch(`https://rickandmortyapi.com/api/character?page=${cont}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setDados(data.results)
      })
      .catch(err => console.log(err))
  }

  const nextPage = () => {
    setcont(cont + 1)
    window.scrollTo(0, 0)
  }

  const beforePage = () => {
    setcont(cont - 1)
    if (cont <= 1) {
      setcont(cont)
    }
    window.scrollTo(0, 0)
  }

  const inicio = () => {
    setcont(1)
  }

  useEffect(() => {
    characters()
  }, [cont])

  return (
    <div >
      <NavBar onclick={inicio} />
      <div className='App'>
        {dados && dados.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
      {cont > 1 && <Button handleFunction={beforePage} text={'Voltar'} />}
      <Button handleFunction={nextPage} text={'Proximo'} />
      <Footer />
    </div>
  )
}

export default App
