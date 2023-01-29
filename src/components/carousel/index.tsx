/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import styles from './carousel.module.css';
import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';




const Carousel = () => {
  const slideshow = useRef(null);

  const next = () => {
    if(slideshow.current.children.length > 0){
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
  }
  
  const prev = () => {
    if(slideshow.current.children.length > 0){
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
  }

  useEffect(() => {
    setInterval(() => {
      next();
    }, 8000);
  }, []);

  

  return (
    <Main>
      <Slideshow ref={slideshow}>
        <Slide>
          <a><img src='images/s1.jpg' alt='salon'/></a>
        </Slide>
        <Slide>
          <a><img src='images/s2.jpg' alt='salon'/></a>
        </Slide>
        <Slide>
          <a><img src='images/s3.jpg' alt='salon'/></a>
        </Slide>
      </Slideshow>
      <Controllers>
        <Boton onClick={prev}><GrPrevious size={40} className={styles.boton}/></Boton>
        <Boton onClick={next}><GrNext size={40}/></Boton>
      </Controllers>
    </Main>
  )
}

export default Carousel;

const Main = styled.div`
  padding: 0;
  margin: 1rem auto;
  box-sizing: border-box;
  max-width: 1000px;
  overflow: hidden;
  position: relative;
`;

const Slideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  max-height: 500px;
  psition: relative;
  height: 100%;
  
  img{
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

const Controllers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  `;
  
const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 100%;
  text-align: center;
  transition: 0.3s ease all;
  filter: drop-shadow(0px 0px 10px #ffffff);
  &:hover{
    background: rgba(255,255,255,0.3);
  }
`;
