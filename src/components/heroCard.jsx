import React from 'react';
import './herocard.css'
const HeroCard = () => {
  return (
    <div className="mainBox ">
      
        <div className='logoBox'>
            <div className='imageBox'>
                <h1>GOOGL</h1>
                <img src="https://res.cloudinary.com/daari0y7l/image/upload/v1659462446/GOOGL_c4tbot.png" alt='imag'/>

            </div>
                <h2>1515 USD</h2>
        </div>
        <div className='logoBox'>
            <div className='imageBox'>
                <h1>FB</h1>
                <img src="https://res.cloudinary.com/daari0y7l/image/upload/v1659462445/FB_bfuuty.png" alt='imag'/>

            </div>
                <h2>266 USD</h2>
        </div>
        <div className='logoBox'>
            <div className='imageBox'>
                <h1>AMZN</h1>
                <img src="https://res.cloudinary.com/daari0y7l/image/upload/v1659462445/AMZN_hxovza.svg" alt='imag'/>

            </div>
                <h2>3116 USD</h2>
        </div>
    </div>
  )
}

export default HeroCard



 