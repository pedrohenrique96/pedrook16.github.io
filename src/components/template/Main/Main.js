import React, { Component } from 'react'


import Hello from '../Hello/Hello'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Portifolio from '../Portifolio/Portifolio'
import Contact from '../Contact/Contact'


export default class Main extends Component {
    render() {
      return (
        <div className="main">
        < Hello />       
        <Skills />
        <About />
        <Portifolio />
        <Contact />
        </div>
      )
    }
  }

   