import { useEffect, useState } from 'react'
import axios from 'axios'
import CardAnime from './components/CardAnime'
function App() {
  const [count, setCount] = useState(0)
  const [animes, setAnimes] = useState([])



  return (
    <div>
      <CardAnime/>
    </div>
  )
}

export default App
