import React from 'react';
import './FeaturedHeroes.css';
import { getHeroLimitedInfo } from '../../requests'


const featuredHeroesArray = [123, 456, 712]

class FeaturedHeroes extends React.Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
    }
  }


  getAndRenderFeaturedHeroes = async () => {
    const heroes = [];
    for (const heroId of featuredHeroesArray) {
      const data = await getHeroLimitedInfo(heroId)
      heroes.push(data)
    }

    this.setState({ heroes })
    console.log(heroes)
  }


  componentDidMount() {
    this.getAndRenderFeaturedHeroes()
  }

  render() {
    return (
      <section className="featured_heroes_displayed">
        {
          this.state.heroes.map(hero => {
            return (
              <div className="hero" key={hero.id}>
                <h2 className="hero_name">{hero.name}</h2>
                <div className="img_container">
                  <img className="hero_img" src={hero.imageUrl} alt=""></img>
                </div>
              </div>
            );
          })
        }
      </section>
    )
  }
}
export default FeaturedHeroes;
