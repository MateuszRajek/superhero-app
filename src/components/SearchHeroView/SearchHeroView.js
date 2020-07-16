import React, { useEffect, useState } from 'react';
import './SearchHeroView.css';
import { getHeroBySearchedName } from '../../requests'
import { Link, useParams } from 'react-router-dom';
import Powerstats from '../HeroDataComponents/Powerstats/Powerstats';
import Loader from '../Loader/Loader';
import Hero from '../Hero/Hero';


function SearchHeroView() {
  const { name } = useParams();
  const [heroesList, setHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState('');


  const getAndRenderSearchedHeroes = async () => {
    await getHeroBySearchedName(name).then(response => {
      const { data } = response
      if (data.error) {
        setErrorState(data.error);
        return
      }
      const { results } = data;
      setHeroesList(results);
      setLoadingState(false);
      setErrorState('');
    });
  }

  useEffect(() => {
    getAndRenderSearchedHeroes()
  }, [name])

  return (
    <>
      {error && <p>{error}</p>}
      {!isLoading && <section className="searched_heroes_displayed">
        {heroesList.map(hero => {
          return (
            <div className="searched_hero" key={hero.id}>
              <Hero id={hero.id} name={hero.name} imageUrl={hero.image.url} hero={hero} />
            </div>
          );
        })
        }
      </section >
      }
      {isLoading && <Loader />}
    </>
  )
}

export default SearchHeroView;
