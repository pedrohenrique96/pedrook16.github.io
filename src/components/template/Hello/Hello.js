import React, {Component} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myImage from '../../../assets/images/about.png'
import Curriculum from '../../../assets/docs/curriculo.pdf'
import './Hello.css'


export default class Helloy extends Component {
    render() {
      return (
        <div id="hello">
         <div className="about container">
            <img src={myImage} alt="My" className="img-fluid"/>
            <span className="hello">
                <p>
                Olá! eu sou o <strong>Pedro Henrique</strong>, trabalho com desenvolvimento web.               
                </p>
            </span>
            <AnchorLink href="#skills" offset='200'>Leia mais</AnchorLink>
            <a href={Curriculum} target="blank">Currículo</a>
         </div>       
        </div>
      )
    }
  }

               
    