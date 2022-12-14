import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Next Tutorial</title>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/articles')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}