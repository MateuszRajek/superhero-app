import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getHeroLimitedInfo } from '../../requests'
import { Link } from 'react-router-dom';


const featuredHeroesArray = [123, 456, 712]

function FeaturedHeroes() {
  const [heroes, setHeroesState] = useState([]);


  const getAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesArray) {
      const data = await getHeroLimitedInfo(heroId)
      heroes.push(data)
    }

    setHeroesState(heroes)
  }

  useEffect(() => {
    getAndRenderFeaturedHeroes()
  }, [heroes])


  return (
    <>
      {<section className="featured_heroes_displayed">
        {heroes.map(hero => {
          return (
            <div className="featured_hero" key={hero.id}>
              <h2 className="hero_name">{hero.name}</h2>
              <div className="img_container">
                <Link to={`/hero/${hero.id}`}><img className="hero_img" src={hero.imageUrl} alt="" /></Link>
              </div>
            </div>
          );
        })
        }
      </section>
      }
    </>
  )
}
export default FeaturedHeroes;
