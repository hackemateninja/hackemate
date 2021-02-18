import { getSortedPostsData } from '@/libs/blogReader';
import Hero from '@/components/Hero';
import META from '@/const/META';
import Seo from '@/components/Seo';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';


export default function Templates({allPostsData}) {
  return(
    <>
      <Seo meta={META.TEMPLATES}/>
      <Hero title={META.TEMPLATES.title} description={META.TEMPLATES.description} emoji={META.TEMPLATES.emoji}/>
      <article className="post-container-row">
        <Pagination allPostsData={allPostsData} Component={Card}/>
      </article>
    </>
  )
}


export async function getStaticProps() {
  const postsData = getSortedPostsData();
  const allPostsData = postsData.filter(x => x.type === 'template')
  return {
    props: {
      allPostsData
    }
  }
}
