import '@/styles/globals.css';
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";
import {AppProps} from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo meta={''}/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
