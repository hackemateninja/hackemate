import META from '@/const/META';
import Hero from '@/components/Hero';
import Post from '@/components/Post';
import Pagination from '@/components/Pagination';
import Seo from '@/components/Seo';
import query from '@/libs/cms';



export default function Home({posts}) {
  return(
    <>
      <Seo meta={META.HOME}/>
      <Hero title={META.HOME.title} description={META.HOME.description}/>
      <article className="post-container">
        <Pagination allPostsData={posts} Component={Post}/>
      </article>
    </>
  )
}


export async function getStaticProps() {


	const { posts } = await query({
		query: `
		{
			posts {
				title
				date
				access
				slug
			}
		}`,
});

  return {
    props: {
      posts
    }
  }
}
