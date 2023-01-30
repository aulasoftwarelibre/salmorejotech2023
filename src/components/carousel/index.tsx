/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import styles from './carousel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

/** img img img */


const Carousel = () => {
  const slideshow = useRef<HTMLDivElement>(null);

  const transition = () => {
    // Reiniciamos la posicion del Slideshow.
    if (slideshow.current && slideshow.current.children.length > 0) {
      const first = slideshow.current.children[0] as HTMLElement;
      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = `translateX(0)`;

      // Tomamos el primer elemento y lo mandamos al final.
      slideshow.current.appendChild(first);

      slideshow.current.removeEventListener('transitionend', transition);
    }
  }

  const nextSlide = () => {
    if (slideshow.current && slideshow.current.children.length > 0) {
      const first = slideshow.current.children[0] as HTMLElement;
      slideshow.current.style.transition = "0.5s ease-in-out all";

      // Movemos
      const slideSize = first.offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transition);
    }
  }
  
  const prev = () => {
    if (slideshow.current && slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
			const elements = slideshow.current.children.length - 1;
			const lastElement = slideshow.current.children[elements] as HTMLElement;
			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const slideSize = lastElement.offsetWidth;
			slideshow.current.style.transform = `translateX(-${slideSize}px)`;
		
			setTimeout(() => {
        if (slideshow.current && slideshow.current.children.length > 0) {
          const first = slideshow.current.children[0] as HTMLElement;
          slideshow.current.style.transition = `0.5s ease-out all`;
          slideshow.current.style.transform = `translateX(0)`;
        }
			}, 30);
		}
  }

  useEffect(() => {
    setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      document.removeEventListener("transitionend", transition)
    }
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
        <div className={styles.areaPrev}onClick={prev}>
          <GrPrevious className={styles.boton}/>
        </div>
        <div className={styles.areaNext}onClick={nextSlide}>
          <GrNext className={styles.boton}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel;