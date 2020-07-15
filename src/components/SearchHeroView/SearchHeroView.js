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
            <div className="hero" key={hero.id}>
              <h2 className="hero_name">{hero.name}</h2>
              <div className="img_container">
                <Link to={`/hero/${hero.id}`}><img className="hero_img" src={hero.image.url} alt=""></img></Link>
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
