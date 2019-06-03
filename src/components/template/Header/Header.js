import React, { Component } from 'react'
import './Header.css'

import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'


export default class Header extends Component {
    render() {
      return (
        <header className="header" id="top">
        <Nav />
        <Banner />
        </header>
      )
    }
  }



   