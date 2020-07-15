import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getHeroLimitedInfo } from '../../requests'
import { Link } from 'react-router-dom';


const featuredHeroesArray = [659, 720, 332]

function FeaturedHeroes() {
  const [heroes, setHeroesState] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const getAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesArray) {
      const data = await getHeroLimitedInfo(heroId);
      heroes.push(data);
    }

    setHeroesState(heroes);
    setLoadingState(false);
  }

  useEffect(() => {
    getAndRenderFeaturedHeroes();
  }, [])


  return (
    <>
      <section className="featured_heroes">
        <h2 className="featured_heroes_section_title">featured heroes</h2>
        {!isLoading && <div className="featured_heroes_displayed">
          {heroes.map(hero => {
            return (
              <div className="featured_hero" key={hero.id}>
                <h2 className="hero_name">{hero.name}</h2>
                <div className="hero_img_container">
                  <Link to={`/hero/${hero.id}`}><img className="hero_img" src={hero.imageUrl} alt="" /></Link>
                </div>
                <div className="hero_powerstats">
                  <div className="hero_powerstats_info">
                    <i className="fas fa-fist-raised"></i>
                    <p>{hero.powerstats.combat}</p>
                  </div>
                  <div className="hero_powerstats_info">
                    <i className="fas fa-battery-full"></i>
                    <p>{hero.powerstats.durability}</p>
                  </div>
                  <div className="hero_powerstats_info">
                    <i className="fas fa-brain"></i>
                    <p>{hero.powerstats.intelligence}</p>
                  </div>
                  <div className="hero_powerstats_info">
                    <i className="fas fa-tachometer-alt"></i>
                    <p>{hero.powerstats.speed}</p>
                  </div>
                  <div className="hero_powerstats_info">
                    <i className="fas fa-dumbbell"></i>
                    <p>{hero.powerstats.strength}</p>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
        }
      </section>

    </>
  )
}
export default FeaturedHeroes;
