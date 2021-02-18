import { getSortedPostsData } from '@/libs/blogReader';
import Hero from '@/components/Hero';
import META from '@/const/META';
import Seo from '@/components/Seo';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';


export default function Katas({allPostsData}) {
  return(
    <>
      <Seo meta={META.KATAS}/>
      <Hero
        title={META.KATAS.title}
        description={META.KATAS.description}
        emoji={META.KATAS.emoji}
      />
      <article className="post-container-row">
        <Pagination allPostsData={allPostsData} Component={Card}/>
      </article>
    </>
  )
}


export async function getStaticProps() {
  const postsData = getSortedPostsData()
  const allPostsData = postsData.filter(x => x.type === 'guide')
  return {
    props: {
      allPostsData
    }
  }
}
