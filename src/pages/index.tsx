import META from '@/const/META';
import Hero from '@/components/Hero';
import Post from '@/components/post';
import Pagination from '@/components/Pagination';
import Seo from '@/components/Seo';
import { getSortedPostsData } from '@/libs/blogReader';



export default function Home({allPostsData}) {
  return(
    <>
      <Seo meta={META.HOME}/>
      <Hero title={META.HOME.title} description={META.HOME.description}/>
      <article className="post-container">
        <Pagination allPostsData={allPostsData} Component={Post}/>
      </article>
    </>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
