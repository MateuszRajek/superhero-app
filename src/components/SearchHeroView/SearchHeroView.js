import React from 'react';
import './SearchHeroView.css';
import { searchingHeroName } from '../Nav/Nav'
import { getHeroBySearchedName } from '../../requests'
import { Link } from 'react-router-dom';


class SearchHeroView extends React.Component {
  constructor() {
    super();

    this.state = {
      searchingHeroName: searchingHeroName,
      heroesList: [],
    }

  }
  getAndRenderSearchedHeroes = () => {
    const heroName = this.state.searchingHeroName;
    // const heroesListArray = []       <--dlaczego przypisanie data.results do zmiennej heroesListArray i aktualizacja stanu po tej zmiennej nie działa??
    getHeroBySearchedName(heroName).then(response => {
      const { data } = response
      console.log(data)

      const { results } = data
      // heroesListArray.push(results);
      // this.setState({ searchingHeroName: heroName })
      this.setState({ heroesList: results })
      console.log(results)
    });


  }


  componentDidMount() {
    this.getAndRenderSearchedHeroes()
  }

  render() {
    return (
      <section className="searched_heroes_displayed">
        {
          this.state.heroesList.map(hero => {
            return (
              <div className="hero" key={hero.id}>
                <h2 className="hero_name">{hero.name}</h2>
                <div className="img_container">
                  <Link to={`hero/${hero.id}`}><img className="hero_img" src={hero.image.url} alt=""></img></Link>
                </div>
              </div>
            );
          })
        }
      </section >
    )
  }
}
export default SearchHeroView;
