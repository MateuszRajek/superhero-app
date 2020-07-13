import React, { useEffect, useState } from 'react';
import './HeroDetailsView.css';
import { getFullHeroInfoById } from '../../requests'
import { useParams } from 'react-router';

function HeroDetailsView() {
  const { id } = useParams()
  const [hero, setHero] = useState([])
  console.log(id)


  const getHeroInfo = async () => {
    await getFullHeroInfoById(id).then(resp => {
      const { data } = resp;
      console.log(data);
      setHero(data);
      console.log(hero)
    })
  }

  useEffect(() => {
    getHeroInfo();
  }, [])


  return (
    <section className="hero_displayed">
      <h1>TEST</h1>
      {
        // hero.map(hero => {
        //   return (
        //     <div className="hero" key={hero.id}>
        //       <h2 className="hero_name">{hero.name}</h2>
        //       <div className="img_container">
        //         <img className="hero_img" src={hero.image.url} alt=""></img>
        //       </div>
        //     </div>
        //   );
        // })
      }
    </section>
  )
}
export default HeroDetailsView;
