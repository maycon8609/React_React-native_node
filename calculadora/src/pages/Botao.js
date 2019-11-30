import React from 'react'
import './Style.css'

export default class Botao extends React.Component {
  render() {
    return (
      <div className="botao">
        <p>{this.props.valor}</p>
      </div>
    )
  }
}