import { useState } from 'react'
import './App.css'
import ImgMusic from './assets/images/icon-music.svg'
import ImgHero from './assets/images/illustration-hero.svg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className='card-container'>
        <div className='img-container'>
          <img className='img-hero' src={ImgHero} alt="" />
        </div>

        <div className='content-container'>
          <h2>order Sumarry</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like
          </p>

          <div className='anual-plan-container'>
            <div className='cost-anual-plan'>
              <img src={ImgMusic} alt="" />
              <div>
                <p className='annual-plan'>Annual Plan</p>
                <p className='cost'>59.99/year</p>
              </div>
            </div>

            <div className='anual-plan-link-container'>
              <a className='anual-plan-link' href="#">Change
              </a>
            </div>
          </div>

          <div className='btn-container'>
            <button className='btn-payment'>Proceed to Payment</button>
            <button className='btn-cancel-order'>Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
