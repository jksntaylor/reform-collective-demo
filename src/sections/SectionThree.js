import React, { useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

import Porsche from '../assets/images/porsche.png'
import Delivery from '../assets/images/delivery-screenshot.png'
import Map from '../assets/images/map.png'

const SectionThree = props => {

  const [animationRan, setAnimationRan] = useState(false)
  const [sectionRef, inView] = useInView({threshold: 0.6})
  // animation references
  const mapRef = useRef()
  const deliveryRef = useRef()
  const carRef = useRef()
  const titleRef = useRef()
  const paragraphRef = useRef()

  useEffect(() => {
    if (!props.isMobile && inView && !animationRan) {
      // animations
      gsap.to([mapRef.current], {x: 0, duration: 0.5})
      gsap.to([titleRef.current], {y: 0, opacity: 1, delay: 0.1, duration: 0.5})
      gsap.to([paragraphRef.current], {y: 0, opacity: 1, delay: 0.4, duration: 0.5})
      gsap.to([carRef.current], {left: '-15%', opacity: 1, delay: 0.4, duration: 0.5})
      gsap.to([deliveryRef.current], {top: 0, opacity: 1, delay: 0.5})
      setAnimationRan(true)
    }
  })

  return (
    <section id="section-three" ref={sectionRef}>
      <div className="text">
        <h2 ref={titleRef}>DELIVERED TO YOUR DOOR.</h2>
        <p ref={paragraphRef}>Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.</p>
      </div>
      <div className="map-container">
        <img className="map" src={Map} alt="Map" ref={mapRef}/>
        <img className="delivery" src={Delivery} alt="Mobile Screenshot" ref={deliveryRef}/>
        <img className="porsche" src={Porsche} alt="Porsche" ref={carRef}/>
      </div>
    </section>
  )
}

export default SectionThree
