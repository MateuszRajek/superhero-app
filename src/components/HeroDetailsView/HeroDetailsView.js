import React, { useEffect, useState } from 'react';
import './HeroDetailsView.css';
import { getFullHeroInfoById } from '../../requests'
import { useParams } from 'react-router';
import Powerstats from '../HeroDataComponents/Powerstats/Powerstats';
import Appearance from '../HeroDataComponents/Appearance/Appearance';
import Biography from '../HeroDataComponents/Biography/Biography';
import OtherDetails from '../HeroDataComponents/OtherDetails/OtherDetails';

function HeroDetailsView() {
  const { id } = useParams();
  const [hero, setHero] = useState({});
  const [isLoading, setLoadingState] = useState(true);
  const { appearance, powerstats, name, image, biography, work, connections } = hero;

  console.log(biography)

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
          <Biography fullName={biography['full-name']} alterEgos={biography['alter-egos']} placeOfBirth={biography['place-of-birth']} />
          <div className="hero_img_container">
            <img className="hero_img" src={image.url} alt="" />
          </div>
          <div className="hero_details_info">
            <Appearance gender={appearance.gender} race={appearance.race} height={appearance.height} weight={appearance.weight} />
            <Powerstats combat={powerstats.combat} durability={powerstats.durability} intelligence={powerstats.intelligence}
              speed={powerstats.speed} strength={powerstats.strength} />
          </div>
        </div>
        <OtherDetails firstAppearance={biography['first-appearance']} occupation={work.occupation} team={connections['group-affiliation']} relatives={connections.relatives} />
      </section>
      }
    </>
  )
}
export default HeroDetailsView;
