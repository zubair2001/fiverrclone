import React from 'react'
import { Link } from 'react-router-dom'
import './catCard.scss'

const CatCard = ({item}) => {
    return (
        <Link to="/gig?cat=design">
            <div className='catCard'>
                <div className='container'>
                    <img src={item.img} alt="" />
                    <span className='desc'>{item.desc}</span>
                    <span className='title'>{item.title}</span>
                </div>
            </div>
        </Link>
    )
}

export default CatCard