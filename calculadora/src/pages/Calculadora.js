import React from 'react'
import Visor from './Visor'
import Teclado from './Teclado'

export default class Calculadora extends React.Component{
  render(){
    return(
      <div id="calculadora">
        <Visor/>
        <Teclado/>
      </div>
    )
  }
}