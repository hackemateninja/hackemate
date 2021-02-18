import Link from 'next/link';
import Image from 'next/image';

export default function Card({id, title, access, type, image, date, description}){
  const accessEmoji = access === 'free' ? '🎁' : '🔥';
  return(
    <section className="h-84 bg-grey-800" >
      <div className="main-line-gradient"/>
      <Link href={`/${id}`}>
        <a>
          <header>
            <Image src={image} alt={title} height={160} width={435} layout="responsive" />
          </header>
          <article className="p-5 w-full">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-xs title">{title}</h3>
              <span className="text-2xl">{accessEmoji}</span>
            </div>
            <p className="description text-grey-400 mt-2">{description}</p>
          </article>
          <footer className="p-5 w-full flex items-center justify-between text-dark description">
            <span className="bg-secondary-400 px-1">{date}</span>
            <span className="bg-secondary-400 px-1">{type}</span>
          </footer>
        </a>
      </Link>
    </section>
  )
}
