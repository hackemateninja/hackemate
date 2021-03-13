import Head from 'next/head';
import { useRouter } from 'next/router';
import SITE from '@/const/SITE';


// @ts-ignore
export default function Seo({ meta: pageMeta }) {
  const router = useRouter();

  const meta = {
    title: SITE.title,
    description: SITE.description,
    og: SITE.og,
    follow: true,
    ...pageMeta
  };


  return (
    <Head>
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="robots" content={`${meta.follow ? "follow, index" : "noindex"}`} />
      <link rel="shortcut icon" href={SITE.icon}/>
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`${SITE.url}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.og} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.og} />
    </Head>
  );
}
