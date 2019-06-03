import React from 'react'
import './Portifolio.css'

const Card = props => {


    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagem1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark"> 
                <a href="/" className="btn btn-outline">Acessar</a>
            </div>
        </div>
    )
}

export default Card