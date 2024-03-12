import { useEffect, useState } from 'react'
import axios from 'axios'
import CardAnime from './components/CardAnime'
import {Swiper, SwiperSlide} from 'swiper/react'



function App() {
  const [count, setCount] = useState(0)
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        setAnimes(response.data.data);
        console.log(animes)
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData(); // Chama a função assíncrona dentro do useEffect
  }, []);
  

  return (
    <div className="container">
      <Swiper 
      slidesPerView={4}
      navigation={{ clickable: true, }}
      autoplay={{delay:3000}}
      
      style={{ width: '80%', margin: 'auto', color: '#ff0000'}}
      >
        {animes.map((anime, index) => (
          <SwiperSlide key={index}>
            <CardAnime  animeName={anime.title} animePhoto={anime.images.jpg.image_url} animeScore={anime.score} animeSynopsis={anime.synopsis} animeEpisode={anime.episodes}/>
          </SwiperSlide>
        
      ))}

      </Swiper>
      
      

    </div>
  )
}

export default App
