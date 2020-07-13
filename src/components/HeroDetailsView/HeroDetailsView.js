import React from 'react';
import './HeroDetailsView.css';
import { getFullHeroInfoById } from '../../requests'




class HeroDetailsView extends React.Component {
  constructor(props) {
    super();
    console.log(props.match)
    this.state = {
      state: props.match
      // heroId: props.match.params.id,
    }
  }


  getHeroInfo = () => {
    // const { heroId } = this.state;
    getFullHeroInfoById(143).then(resp => {
      const { data } = resp;
      console.log(data)
    })
  }


  componentDidMount() {
    this.getHeroInfo()
    console.log(this.state.state)
  }

  render() {
    return (
      <section className="hero_displayed">
        <h1>TEST</h1>
        {/* {
          this.state.heroes.map(hero => {
            return (
              <div className="hero" key={hero.id}>
                <h2 className="hero_name">{hero.name}</h2>
                <div className="img_container">
                  <img className="hero_img" src={hero.image.url} alt=""></img>
                </div>
              </div>
            );
          })
        } */}
      </section>
    )
  }
}
export default HeroDetailsView;
