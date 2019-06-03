import React, { Component } from 'react'
import './Skills.css'



export default class Skills extends Component {
    render() {
      return (
        <div className="skills container" id="skills">
        <h3>O QUE EU FAÇO</h3>
        <div className="row">
            <div className="col-md">
                <span className="icon"><i className="fa fa-3x fa-cog"></i></span>
                <h6>Desenvolvimento de Aplicação Web</h6>
                <p>Criação de sistemas web no Back-end.</p>
            </div>
            <div className="col-md">
            <span className="icon"><i class="fa fa-3x fa-mobile"></i></span>
            <h6>Desenvolvimento de Aplicativos</h6>
                <p>Criação de aplicativos utilizando React Native</p>
            </div>
        </div>
        </div>
      )
    }
  }


