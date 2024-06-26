import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

const fadeImages = [

  {
    url: 'https://www.skygodz.com/wp-content/uploads/2024/06/skygodz_slide11.jpg',
    caption: ''
  },

  {
    url: 'https://www.skygodz.com/wp-content/uploads/2024/02/skygodz_slide07.jpg',
    caption: ''
  },

  {
    url: 'https://www.skygodz.com/wp-content/uploads/2024/02/skygodz_slide06.jpg',
    caption: ''
  },

  {
    url: 'https://www.skygodz.com/wp-content/uploads/2023/01/app_slide_logo.jpg',
    caption: ''
  },
];

const FrontSlider = () => {
  return (
    <div className="slide-container ">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
           <img style={{ width: '100%' }} src={fadeImage.url} alt="Slider"/>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default FrontSlider