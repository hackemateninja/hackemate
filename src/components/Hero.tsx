import Image from 'next/image'

interface Hero {
	title: string
	description: string
	emoji?: string
}

export default function Hero({title, description, emoji}: Hero) {

	return (
		<header className="Hero">
			<div className="p-2 bg-grey-900 border-primary-400 border-2 rounded-full h-32 w-32 flex items-center justify-center">
				{
					!emoji ?
						<Image src="/goreact.png" alt={title} layout="intrinsic" width={80} height={63} /> :
						<span className="text-6xl">{emoji}</span>
				}
			</div>
			<h1 className="text-2xl title my-4 text-center">{title}</h1>
			<h2 className="description text-secondary-400 text-center">{description}</h2>
			<div className="flex mt-5">
				<button className="button-border text-primary-400 mr-2">Subscribe</button>
				<button className="button-border text-grey-400">Login</button>
			</div>
		</header>
	)
}
