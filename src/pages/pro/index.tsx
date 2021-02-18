import { getSortedPostsData } from '@/libs/blogReader';
import Hero from '@/components/Hero';
import Link from "next/link";
import Pagination from '@/components/Pagination';
import Post from '@/components/post';
import META from '@/const/META';
import Seo from '@/components/Seo';


export default function Pro({allPostsData}) {
  return(
    <>
      <Seo meta={META.PRO}/>
      <Hero title={META.PRO.title} description={META.PRO.description} emoji={META.PRO.emoji}/>
      <article className="post-container">
        <Pagination allPostsData={allPostsData} Component={Post}/>
      </article>
    </>
  )
}


export async function getStaticProps() {
  const postsData = getSortedPostsData()
  const allPostsData = postsData.filter(x => x.access === 'pro')
  return {
    props: {
      allPostsData
    }
  }
}
