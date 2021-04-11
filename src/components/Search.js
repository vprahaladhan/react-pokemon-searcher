import React, { useState } from 'react'

const Search = ({ searchPokemonsByName }) => {
  const [ searchText, setSearchText ] = useState('');

  const onSearchTextChange = ({ target }) => {
    setSearchText(target.value);
    searchPokemonsByName(target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearchTextChange} value={searchText} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
