import React from 'react';
import "./cardAnime.css";
import iconStar from "../img/icon-star.png"


function CardAnime() {
    return (
        <div class="container">
            <div className="card">
                <div className="anime">
                <div className="score">
                    <div className="score-container">
                    <span>9.2</span>
                    <img src={iconStar} alt="icon-ranking" />
                    </div>
                </div>
                <span className="episode">12 Ep</span>
                </div>
                <div className="content">
                <div className="title">
                    <h1>Sousou no Frieren</h1>
                </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium quis veritatis nostrum sed fuga voluptates suscipit!
                    Cum possimus, tenetur reiciendis iusto ut consequuntur, ab
                    nesciunt rem sapiente, laborum pariatur accusantium. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Accusantium quis
                    veritatis nostrum sed fuga voluptates suscipit! Cum possimus,
                    tenetur reiciendis iusto ut consequuntur, ab nesciunt rem
                    sapiente, laborum pariatur accusantium.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CardAnime;
