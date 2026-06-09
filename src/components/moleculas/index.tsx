/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { Fragment } from "react";
import styles from './moleculas.module.css';
import { withBasePath } from '../../lib/withBasePath';

const bg = (file: string) => ({ backgroundImage: `url(${withBasePath(`/moleculas/${file}`)})` });

export const Moleculas = () => {
  return (
  <Fragment>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg1}`} style={bg('fondo-salmorejotech-svg.svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg2}`} style={bg('fondo-salmorejotech-svg(1).svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg3}`} style={bg('fondo-salmorejotech-svg(2).svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg4}`} style={bg('fondo-salmorejotech-svg(3).svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg5}`} style={bg('fondo-salmorejotech-svg(4).svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg6}`} style={bg('fondo-salmorejotech-svg(5).svg')}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg7}`} style={bg('fondo-salmorejotech-svg(6).svg')}></div>
    {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg01}`} style={bg('fondo-salmorejotech-svg.svg')}></div> */}
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg02}`} style={bg('fondo-salmorejotech-svg(1).svg')}></div>
    {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg03}`} style={bg('fondo-salmorejotech-svg(2).svg')}></div> */}
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg04}`} style={bg('fondo-salmorejotech-svg(3).svg')}></div>
    {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg05}`} style={bg('fondo-salmorejotech-svg(4).svg')}></div> */}
    {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg06}`} style={bg('fondo-salmorejotech-svg(5).svg')}></div> */}
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg07}`} style={bg('fondo-salmorejotech-svg(6).svg')}></div>
  </Fragment>
  )
}
