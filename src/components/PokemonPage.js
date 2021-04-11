import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons: [],
    searchedPokemons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemons => this.setState({
        pokemons,
        searchedPokemons: pokemons
      }))
  }

  searchPokemonsByName = searchText => {  
    this.setState(prevState => ({
      searchedPokemons: searchText.trim().length === 0 ? prevState.pokemons : prevState.pokemons.filter(pokemon => pokemon.name.includes(searchText))
    }));
  }

  createNewPokemon = pokemon => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: pokemon.name,
        hp: pokemon.hp,
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl
        }
      })
    })
      .then(response => response.json())
      .then(pokemon => this.setState(prevState => (
        {...prevState, pokemons: prevState.pokemons.concat(pokemon)}
      )));
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createNewPokemon} />
        <br />
        <Search searchPokemonsByName={this.searchPokemonsByName} />
        <br />
        <PokemonCollection pokemons={this.state.searchedPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
