import React, { useEffect, useState } from 'react';
import './SearchHeroView.css';
// import { searchingHeroName } from '../Nav/Nav'
import { getHeroBySearchedName } from '../../requests'
import { Link, useParams } from 'react-router-dom';


function SearchHeroView() {
  const { name } = useParams();
  // const [searchingHeroName, setSearchingHeroName] = useState({ name })
  const [heroesList, setHeroesList] = useState([])
  const [isLoading, setLoadingState] = useState(true)
  console.log(heroesList)




  const getAndRenderSearchedHeroes = async () => {
    // const heroName = name;
    // const heroesListArray = []       <--dlaczego przypisanie data.results do zmiennej heroesListArray i aktualizacja stanu po tej zmiennej nie działa??
    await getHeroBySearchedName(name).then(response => {
      const { data } = response
      console.log(data)

      const { results } = data
      // heroesListArray.push(results);
      // this.setState({ searchingHeroName: heroName })
      setHeroesList(results)
      setLoadingState(false)
      console.log(results)
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
