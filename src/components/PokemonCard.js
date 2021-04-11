import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imageSrc: 'front'
  }

  setImageSide = () => {
    this.setState(prevState => ({
        imageSrc: prevState.imageSrc.includes('front') ? 'back' : 'front'
      })
    );
  }

  render() {
    return (
      <Card>
        <div onClick={this.setImageSide}>
          <div className="image">
            <img src={this.props.pokemon.sprites[`${this.state.imageSrc}`]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
