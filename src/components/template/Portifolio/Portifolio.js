import React, { Component } from 'react'

import Imagem1 from '../../../assets/images/portifolio/5.png'
import Imagem2 from '../../../assets/images/portifolio/5.png'
import Imagem3 from '../../../assets/images/portifolio/5.png'
import Card from './Card'
import './Portifolio.css'


export default class Portifolio extends Component {
    render() {
      
      return (
        <React.Fragment>
        <div className="portifolio" id="portifolio">
          <h3>PORTIFOLIO</h3>
        </div>
        <div className="container d-flex justify-content-center align-items-center">      
          <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem1}  />
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
               <Card imgsrc={Imagem2}   />
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3} />
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-3">
                <Card imgsrc={Imagem3}/>
              </div>
          </div>
        </div>
        </React.Fragment>
      )
    }
  }

