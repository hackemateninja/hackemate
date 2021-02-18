import Link from 'next/link';

export default function Post({id, date, title, access, type}){
  const accessEmoji = access === 'free' ? '🎁' : '🔥';
  return(
    <section className="my-3 py-3 w-full md:w-3/4 lg:w-2/5 h-50 border-b border-primary-200 border-dashed">
      <Link href={`/${id}`} prefetch={access === 'free'}>
        <a className="w-full flex flex items-center">
          <time className="text-primary-400 font-bold text-xs uppercase w-1/6">{date}</time>
          <h2 className="text-grey-400 font-bold text-xs md:text-sm w-2/3 mx-2 md:mx-1">
            {title}
            <span className="bg-secondary-400 text-dark px-1 ml-1 text-xs">{type}</span>
          </h2>
          <span className="text-grey-500 font-bold text-xs w-1/6 text-right hover:text-primary-400">{`${accessEmoji} Read`}</span>
        </a>
      </Link>
    </section>
  )
}
