import React, { useEffect, useState } from 'react';
import './HeroDetailsView.css';
import { getFullHeroInfoById } from '../../requests'
import { useParams } from 'react-router';

function HeroDetailsView() {
  const { id } = useParams();
  const [hero, setHero] = useState({});
  const [isLoading, setLoadingState] = useState(true);
  const { appearance, powerstats, name, image } = hero;

  const getHeroInfo = async () => {
    await getFullHeroInfoById(id).then(response => {
      const { data } = response;
      setHero(data);
      setLoadingState(false);
    })
  }

  useEffect(() => {
    getHeroInfo();
  }, [id])


  return (
    <>
      {!isLoading && <section className="hero_displayed">
        <div className="hero">
          <h2 className="hero_name">{name}</h2>
          <div className="hero_img_container">
            <img className="hero_img" src={image.url} alt="" />
          </div>
          <div className="hero_details_info">
            <div className="hero_appearance">
              <div className="hero_appearance_info">
                <i className="fas fa-venus-mars" />
                <p>{(appearance.gender == null) ? "no data available" : appearance.gender}</p>
              </div>
              <div className="hero_appearance_info">
                <i className="fas fa-flag-usa" />
                <p>{(appearance.race == null) ? "no data available" : appearance.race}</p>
              </div>
              <div className="hero_appearance_info">
                <i className="fas fa-ruler-vertical" />
                <p>{(appearance.height == null) ? "no data available" : appearance.height[1]}</p>
              </div>
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
        </div>

      </section>
      }
    </>

  )
}
export default HeroDetailsView;
