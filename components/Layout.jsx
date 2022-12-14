import React from 'react'
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Nav from './Nav';

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
          <div className={styles.main}>
            <Header />
            {children}
          </div>
      </div>
    </>
    
  )
}
