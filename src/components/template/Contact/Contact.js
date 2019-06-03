import React, { Component } from 'react'
import Axios from 'axios'
import './Contact.css'

const API_PATH = 'http://portifolio.crddeveloper.com/formularioEnvio.php'
export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            erro: null
        }
    }
    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }))
      }
    render() {
      return (
        <div className="contact container" id="contact">
        <h3>VAMOS ENTRAR EM CONTATO ?</h3>
        <div className="box">
    <form method="post">
             <div className="form-group">
                 <label>Nome:</label>
                 <input type="text" name="name" id="name"  className="form-control"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                 />
             </div>
             <div className="form-group">
                 <label>E-mail:</label>
                 <input type="email" name="email" id="email"   className="form-control" 
                     value={this.state.email}
                     onChange={e => this.setState({email: e.target.value})}
                 />
             </div>
             <div className="form-group">
                 <label>Mensagem:</label>
                 <textarea  className="form-control" id="massage" name="message"  
                     onChange={e => this.setState({ message: e.target.value })}
                     value={this.state.message}
                 ></textarea>
             </div>
             <button className="btn btn-outline btn-lg btn-block"
             onClick={e => this.handleFormSubmit(e)}
             >Enviar</button>
        </form> 
        <div>
            {this.state.mailSent &&
                <div>Enviado.</div>
            }
        </div>      
        </div>
        <div className="row contact-phone d-flex justify-content-center">
             <div className="col-sm">
                 <div className="box-phone">
                 <div><i class="fa fa-3x fa-whatsapp"></i></div>
                     <div className="esp">Telefone</div>
                     <span>+55 61 98199-1223</span>
                 </div>
             </div>
             <div className="col-sm">
                 <div><i class="fa fa-3x fa-envelope"></i></div>
                 <div className="esp">E-mail</div>
                 <span>contato@crddeveloper.com</span>
             </div>
             <div className="col-sm">
                 <div><i class="fa fa-3x fa-street-view"></i></div>
                 <div className="esp">Localização</div>
                 <span>Brasília-DF, Brazil</span>
             </div> 
        </div>
     </div>  
      )
    }
  }

    
    