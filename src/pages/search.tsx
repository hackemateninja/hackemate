import Head  from 'next/head';
import Seo from '@/components/Seo';

export default function Search(){
  return (
   <>
    <Seo meta={{ follow: false }} />
    <h1>Search</h1>
   </>
  )
}
