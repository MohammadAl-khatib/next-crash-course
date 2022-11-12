import React from 'react'
import Link from 'next/link';
import Styles from '../styles/Article.module.scss';

function Article({article}) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
        <a className={Styles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default Article