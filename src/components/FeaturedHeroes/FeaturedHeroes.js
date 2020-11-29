import React, { useEffect, useState } from 'react';
import './FeaturedHeroes.css';
import { getHeroLimitedInfo } from '../../requests';
import Loader from '../Loader/Loader';
import Hero from '../Hero/Hero';

const featuredHeroesArray = [659, 720, 332]

function FeaturedHeroes() {
  const [heroes, setHeroesState] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState('');

  const getAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesArray) {
      const data = await getHeroLimitedInfo(heroId);
      heroes.push(data);
      if (data.error) {
        setErrorState(data.error);
        console.log(data)
        return
      }
    }

    setHeroesState(heroes);
    setLoadingState(false);
    setErrorState('');
  }

  useEffect(() => {
    getAndRenderFeaturedHeroes()
  }, [])

  return (
    <section className="featured_heroes">
      {error && <p>{error}</p>}
      {!isLoading && <>
        <h2 className="featured_heroes_section_title">featured heroes:</h2>
        <div className="featured_heroes_displayed">
          {heroes.map(hero => {
            return (
              <div className="featured_hero" key={hero.id}>
                <Hero id={hero.id} name={hero.name} imageUrl={hero.imageUrl} hero={hero} />
              </div>
            );
          })
          }
        </div>
      </>
      }
      {isLoading && <Loader />
      }
    </section>
  )
}
export default FeaturedHeroes;
