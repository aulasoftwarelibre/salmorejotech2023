/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import styles from './carousel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: {src: string, alt: string}[];
}

const Carousel = ({images, className, ...rest} : CarouselProps) => {
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
      const isHover = slideshow.current?.parentElement?.querySelector(':hover') === slideshow.current;
      if (!isHover) {
        nextSlide();
      }
    }, 5000);
    return () => {
      document.removeEventListener("transitionend", transition)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div id='carousel-container' className={`${styles.main} ${className}`} {...rest}>
      <div className={styles.slideshow} ref={slideshow}>
        {images.map(image => (
          <div key={`image-${image.alt}`} className={styles.slide}>
            <img src={image.src} alt={image.alt}/>
          </div>
        ))}
      </div>
      <div className={styles.controllers}>
        <div className={styles.area}onClick={prev}>
          <GrPrevious className={styles.boton}/>
        </div>
        <div className={styles.area}onClick={nextSlide}>
          <GrNext className={styles.boton}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel;