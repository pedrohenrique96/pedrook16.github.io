import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Nav.css'
import Logo from '../../../assets/images/logo.png'

export default class Nav extends Component {

  constructor(){
    super()
    this.state = {
      scrolled:false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100      
      if (isTop !== true){
        this.setState({scrolled: true})
      } else {
        this.setState({scrolled: false})
      }
    })
   }
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }
    render() {
      return (
        <nav className={this.state.scrolled ? 'navbar navbar-expand-lg fixed-top scrolled' : 'navbar navbar-expand-lg fixed-top'}>
          <div className="container-fluid">          
               <AnchorLink className="navbar-brand" href="#top"><img src={Logo} alt="logo"/></AnchorLink> 
           
            <button className="menu-toggle navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" >
                <i className="fa fa-sm fa-bars"></i>
            </button>
            
            <div className="menu navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><AnchorLink href="#top" >Home</AnchorLink></li>
                    <li className="nav-item "><AnchorLink href="#skills"  offset='200'>Serviços</AnchorLink></li>
                    <li className="nav-item "><AnchorLink href="#about"  offset='200'>Sobre</AnchorLink></li>
                    <li className="nav-item "><AnchorLink href="#portifolio" offset='100' >Portifolio</AnchorLink></li>
                    <li className="nav-item "><AnchorLink href="#contact" offset='100' >Contato</AnchorLink></li>
                </ul>
            </div>
            </div>   
        </nav>
      )
    }
  }   