import React, {useContext} from 'react'
import ThemeContext from '../../context/themeContext'
import "./Hero.css"
import heroImage from "../../assets/phone.svg"

const Hero = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className='hero' data-theme={theme}>
      <div className='container --grid-15'>
        <div className='hero-text'>
          <h1>Visit Vila Shop Landing page</h1>
          <p>Hello there!! Welcome to VillaShop. This is a landing page please do feel free to take a tour on our site and if you have any questions please feel free to contact us. Cheers!!!!!!!!!!!!!!!
          </p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>Learn More</button>
            <button className='--btn --btn-danger'>Sign Up</button>
          </div>

        </div>

        <div className='--text-center'>
          <img src={heroImage} alt="Phone Image" width={200} />
        </div>
      </div>
    </section>
  )
}

export default Hero