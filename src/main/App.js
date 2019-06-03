import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Header from '../components/template/Header/Header'
import Main from '../components/template/Main/Main'
import Footer from '../components/template/Footer/Footer'

class App extends Component {
    render() {
      return (
        <div className="app">
          <Header /> 
          <Main />
          <Footer />       
        </div>
      )
    }
  }

export default App    