import React, { useEffect, useState } from 'react';
import './SearchHeroView.css';
import { getHeroBySearchedName } from '../../requests'
import { Link, useParams } from 'react-router-dom';


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
      </section >
      }
    </>
  )
}

export default SearchHeroView;
