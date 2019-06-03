import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Banner.css'

export default class Banner extends Component {
  constructor(){
    super()
    this.state = {
      skills:'PhP',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({skills: 'MongoDB'})        
    },3000)
  } 
  
    render() {          
      return (
        <div className="banner">       
          <div className="container content">        
              <h1 className="name">Pedro Henrique</h1>
               <h6>{this.state.skills}</h6>
                 <AnchorLink href="#hello"><span><i class="fa fa-5x  fa-angle-down"></i></span></AnchorLink>       
          </div>
        </div>
      )
    }
  }

