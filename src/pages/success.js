import React from 'react'
import { navigate } from 'gatsby'
import { SuccessData } from '../data/aboutData'
import '../components/About.css'

const Success = () => {
    let { title, description, buttonTitle } = SuccessData

    const handlePage = () => {
        navigate('/')
    }

    return (
        <React.Fragment>
            <div className="about__background">
                <h1>{title}</h1>
                <p>{description}</p>
                <button 
                    onClick={handlePage} 
                    className="success-btn"
                >
                    {buttonTitle}
                </button>
            </div>
        </React.Fragment>
    )
};

export default Success;