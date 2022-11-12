import React from 'react'
import styles from '../styles/Nav.module.scss'
import Link  from 'next/link';

function Nav() {
  return (
    <div className={styles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>        
                <Link href='/about'>about</Link>
            </li>
        </ul>
        

    </div>
  )
}

export default Nav