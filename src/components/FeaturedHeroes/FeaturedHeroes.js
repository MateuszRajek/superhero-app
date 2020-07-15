import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getHeroLimitedInfo } from '../../requests'
import { Link } from 'react-router-dom';
import Powerstats from '../HeroDataComponents/Powerstats/Powerstats';
import Loader from '../Loader/Loader';


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
      {!isLoading && <section className="featured_heroes">
        <h2 className="featured_heroes_section_title">featured heroes:</h2>
        <div className="featured_heroes_displayed">
          {heroes.map(hero => {
            return (
              <div className="featured_hero" key={hero.id}>
                <h2 className="hero_name">{hero.name}</h2>
                <div className="hero_img_container">
                  <Link to={`/hero/${hero.id}`}><img className="hero_img" src={hero.imageUrl} alt="" /></Link>
                </div>
                <Powerstats combat={hero.powerstats.combat} durability={hero.powerstats.durability} intelligence={hero.powerstats.intelligence}
                  speed={hero.powerstats.speed} strength={hero.powerstats.strength} />
              </div>
            );
          })
          }
        </div>
      </section>
      }
      {isLoading && <Loader />
      }
    </>
  )
}
export default FeaturedHeroes;
