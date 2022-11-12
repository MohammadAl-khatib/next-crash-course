import React from 'react'
import styles from '../styles/Header.module.scss'
function Header() {
  return (
    <div>
        <h1 className={styles.title}>
            <span>WebDev </span>News
        </h1>
        <p>Keep up to date with the latest web dev news</p>
    </div>
  )
}

export default Header