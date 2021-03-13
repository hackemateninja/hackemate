import { useState } from 'react';
import Post from '@/components/Post';

export default function Pagination({allPostsData, Component}){
  const lenPosts = allPostsData.length;
  const [numberPosts, setNumberPost] = useState(3);
  const posts = allPostsData.slice(0, numberPosts);
  const handleLoadMore = () =>{
    setNumberPost(prevState => prevState + 9)
  }
  return(
    <>
      {posts.map(({id, date, title, access, type, description, image}) => (
        <Component
          key={id}
          id={id}
          date={date}
          title={title}
          access={access}
          type={type}
          description={description}
          image={image}
        />
      ))}
      {posts.length === lenPosts ? null :
        <button
          className="button-border mt-5 text-primary-400 animate-bounce"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      }
    </>
  )
}
