/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import styles from './carousel.module.css';
import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';




const Carousel = () => {
  const slideshow = useRef(null);

  const next = () => {
      const first = slideshow.current.children[0];
      slideshow.current.style.transition= '0.5s ease-in-out all';
      
			// Movemos
      const slideSize = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(first);

				slideshow.current.removeEventListener('transitionend', transition);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transition);
  }
  
  const prev = () => {
			// Obtenemos el ultimo elemento del slideshow.
			const elements = slideshow.current.children.length - 1;
			const lastElement = slideshow.current.children[elements];
			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const slideSize = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${slideSize}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `0.5s ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
  }

  useEffect(() => {
    setInterval(() => {
      next();
    }, 10000);
  }, []);

  

  return (
    <div className={styles.main}>
      <div className={styles.slideshow} ref={slideshow}>
        <div className={styles.slide}>
          <a><img src='images/s1.jpg' alt='salon'/></a>
        </div>
        <div className={styles.slide}>
          <a><img src='images/s2.jpg' alt='salon'/></a>
        </div>
        <div className={styles.slide}>
          <a><img src='images/s3.jpg' alt='salon'/></a>
        </div>
      </div>
      <div className={styles.controllers}>
        <div className={styles.area}onClick={prev}>
          <GrPrevious className={styles.boton}/>
        </div>
        <div className={styles.area}onClick={next}>
          <GrNext className={styles.boton}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel;