import React from 'react'
import '../App.css'
import Imagen from '../imgs/img.png'
import Star from '../imgs/star.png'
import Face from '../imgs/face.png'
import Insta from '../imgs/instagram.png'
import Twitter from '../imgs/twitter.png'
import Link from '../imgs/Link.png'
import Star2 from '../imgs/estrella-hueca.png'


export const CardProduct = () => {
    return (
        <ul className="cards">
            <li>
                <div href="" className="card">
                    <img src={Imagen} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">ZAPATILLAS DEPORTIVAS HOMBRE</h3>
                            </div>
                            <div class="rate">
                                <img class="card__thumb" src={Star} alt="" />
                                <p className='title-product'> 8,6</p>
                            </div>
                        </div>
                        <div className='inline'>
                            <p className='card-description'> Puntúa este producto:</p>
                            <div>
                                <img class="image-icon" src={Star} alt="" />
                                <img class="image-icon" src={Star} alt="" />
                                <img class="image-icon" src={Star} alt="" />
                                <img class="image-icon" src={Star2} alt="" />
                                <img class="image-icon" src={Star2} alt="" />
                            </div>
                        </div>
                        <div className='inline'>
                            <p className='card-description2' > ¡Comparte y gana Decacoins!</p>                        
                            <div class="card-description">
                                <img className='image-icon' src={Face}></img>
                                <img className='image-icon' src={Insta}></img>
                                <img className='image-icon' src={Twitter}></img>
                                <img className='image-icon' src={Link}></img>

                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    )
}
