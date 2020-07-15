import React, { useEffect, useState } from 'react';
import './SearchHeroView.css';
import { getHeroBySearchedName } from '../../requests'
import { Link, useParams } from 'react-router-dom';
import Powerstats from '../HeroDataComponents/Powerstats/Powerstats';


function SearchHeroView() {
  const { name } = useParams();
  const [heroesList, setHeroesList] = useState([])
  const [isLoading, setLoadingState] = useState(true)

  const getAndRenderSearchedHeroes = async () => {
    await getHeroBySearchedName(name).then(response => {
      const { data } = response
      const { results } = data
      setHeroesList(results)
      setLoadingState(false)
    });
  }

  useEffect(() => {
    getAndRenderSearchedHeroes()
  }, [name])

  return (
    <>
      {!isLoading && <section className="searched_heroes_displayed">
        {heroesList.map(hero => {
          return (
            <div className="searched_hero" key={hero.id}>
              <h2 className="hero_name">{hero.name}</h2>
              <div className="hero_img_container">
                <Link to={`/hero/${hero.id}`}><img className="hero_img" src={hero.image.url} alt=""></img></Link>
              </div>
              <Powerstats />
            </div>
          );
        })
        }
      </section >
      }
    </>
  )
}

export default SearchHeroView;
