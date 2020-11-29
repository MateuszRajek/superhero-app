import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Hero from '../Hero/Hero';
import { getHeroBySearchedName } from '../../requests';
import './HeroesBattle.css';

function HeroesBattle() {
  const [firstHeroName, setFirstHeroName] = useState('');
  const [secondHeroName, setSecondHeroName] = useState('');
  const [firstFighterHeroesList, setHeroesFirstList] = useState([]);
  const [secondFighterHeroesList, setHeroesSecondList] = useState([]);
  const [isLoading, setLoadingState] = useState('');
  const [error, setErrorState] = useState('');

  const getAndRenderSearchedHero = async event => {
    event.preventDefault()
    setLoadingState(true)
    const name = event.target.previousSibling.value
    const buttonId = event.target.id
  console.log(event.target.id, buttonId)
    await getHeroBySearchedName(name).then(response => {
    const { data } = response
    if (data.error) {
      setErrorState(data.error);
      setLoadingState(false);
      return
    }
    const { results } = data;
    buttonId === 'first' ? setHeroesFirstList(results) : setHeroesSecondList(results)
    setLoadingState(false);
    setErrorState('');
    });
  }

   const onInputChange = event => {
    event.target.name === 'firstHero' ? setFirstHeroName(event.target.value) : setSecondHeroName(event.target.value);
  }

  const clearHeroesNameState = event => {
    event.target.id === 'first' ? setFirstHeroName('') : setSecondHeroName('');
  }
  
  useEffect(() => {
  // onInputChange()
  },[])
  
  return (
    <section className="heroes_battlefield">
      <div className="first_hero_area">
       <form className="search_hero" >
         <div className="wrapper">
          <label className="type_hero_name_label" forhtml="type_hero_name_input">Enter the name of first hero: </label>
          <input onChange={onInputChange} value={firstHeroName} className="type_hero_name" type="text" name="firstHero"></input>
          <button onClick={getAndRenderSearchedHero} id="first">Submit</button>
         </div>
      </form>
      {firstFighterHeroesList.map(hero => {
          return (
           !isLoading && <div className="searched_hero" key={hero.id}>
              <Hero id={hero.id} name={hero.name} imageUrl={hero.image.url} hero={hero} />
            </div>
           );
        })
        }
         {isLoading && <Loader />}
       </div>
      <div className="second_hero_area">
       <form className="search_hero" >
         <div className="wrapper">
          <label className="type_hero_name_label" forhtml="type_hero_name_input">Enter the name of second hero: </label>
          <input onChange={onInputChange} value={secondHeroName} className="type_hero_name" type="text" name="secondHero"></input>
          <button onClick={getAndRenderSearchedHero} id="second">Submit</button>
         </div>
       </form>
       {secondFighterHeroesList.map(hero => {
          return (
            <div className="searched_hero" key={hero.id}>
              <Hero id={hero.id} name={hero.name} imageUrl={hero.image.url} hero={hero} />
            </div>
          );
        })
        }
       </div>
     </section>
  )
}
export default HeroesBattle;
