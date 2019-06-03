import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Footer.css'


export default class Banner extends Component {
    render() {
      return (
        <React.Fragment> 
        <div className="footer">
            <div className="footer1 container">
                <AnchorLink href="#top" className="nameFooter" ><h2>Pedro Henrique</h2></AnchorLink>
                <div className="social">               
                    <a href="https://github.com/pedrook16" target="blank"><i class="fa fa-2x fa-github"></i></a>
                    <a href="https://twitter.com/pedrook2021" target="blank"><i class="fa fa-2x fa-twitter"></i></a>
                    <a href="https://www.facebook.com/pedroook16" target="blank"><i class="fa fa-2x fa-facebook"></i></a>
                    <a href="https://www.instagram.com/pedrook16/" target="blank"><i class="fa fa-2x fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/pedro-henrique-08a366113/" target="blank"><i class="fa fa-2x fa-linkedin" target="blank"></i></a>
                </div>           
            </div>
        </div>
        <div className="copy">
            <span><i class="fa fa-copyright"></i> 2019 - Todos os direitos reservados - Pedro Henrique</span>
        </div>
        </React.Fragment>
      )
    }
  }



