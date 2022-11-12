import React from 'react'
import styles from '../styles/Article.module.scss';
import Article from './Article.jsx';

function ArticleList({articles}) {
  return (
    <div className={styles.grid}>
        {articles.map((article, index) => {
            return <Article key={index} article={article}/>
        })}
    </div>
  )
}

export default ArticleList
