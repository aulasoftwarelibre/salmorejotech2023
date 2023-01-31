/* eslint-disable @next/next/no-img-element */
import styles from './location.module.css';
import React from 'react';
import Link from 'next/link';

export const Location = () => {
  return (
      <div className={styles.location}>
          <div className={styles.responsiveMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.4784613139254!2d-4.789346679821876!3d37.88469009468491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf60e271dc79%3A0xde994cae3981bc29!2sUniversity%20of%20Cordoba!5e0!3m2!1sen!2ses!4v1675175766697!5m2!1sen!2ses" width="600" height="450" ></iframe>
          </div>
          <Link className={styles.link} target="_blank" href="https://goo.gl/maps/VkTodGo5duk9HYFw5">Avenida de Medina Azahara, 5 Cordoba 14005, España</Link>
      </div>
  )
}