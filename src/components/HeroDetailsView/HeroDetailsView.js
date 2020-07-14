import React, { useEffect, useState } from 'react';
import './HeroDetailsView.css';
import { getFullHeroInfoById } from '../../requests'
import { useParams } from 'react-router';

function HeroDetailsView() {
  const { id } = useParams()
  const [hero, setHero] = useState({})
  const [isLoading, setLoadingState] = useState(true)
  const { appearance, powerstats, name, image } = hero
  console.log(image)

  const getHeroInfo = async () => {
    await getFullHeroInfoById(id).then(response => {
      const { data } = response;
      setHero(data);
      setLoadingState(false)
      console.log(data)
    })
  }

  useEffect(() => {
    getHeroInfo();
  }, [id])


  return (
    <>
      {!isLoading && <section className="hero_displayed">
        <h1>{name}</h1>
        <div className="img_container">
          <img className="hero_img" src={image.url} alt="" />
        </div>
        <h2>Gender: </h2>
        <p>{(appearance.gender == null) ? "no data available" : appearance.gender}</p>
        <p>{(appearance.race == null) ? "no data available" : appearance.race}</p>
        <ul>
          <h3>Powerstats: </h3>
          <li>Combat: {(powerstats.combat === null) ? "no data available" : powerstats.combat}</li>
        </ul>

      </section>
      }
    </>

  )
}
export default HeroDetailsView;
