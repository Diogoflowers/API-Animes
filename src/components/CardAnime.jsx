import React from 'react';
import "./cardAnime.css";
import iconStar from "../img/icon-star.png"



function CardAnime({animeName, animePhoto, animeScore, animeSynopsis, animeEpisode}) {
    return (
        <div>
            <div className="card">
                <div className="anime">
                    <img src={animePhoto} alt="" />
                    <div class="gradient-overlay"></div>
                    <div className="score">
                    <div className="score-container">
                    <span>{animeScore}</span>
                    <img src={iconStar} alt="icon-ranking" />
                    </div>
                    </div>
                    <span className="episode">{animeEpisode} Eps</span>
                </div>

                <div className="content">
                    <div className="title">
                        <h1>{animeName}</h1>
                    </div>
                    <div className="description">
                        <p>
                            {animeSynopsis}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardAnime;
