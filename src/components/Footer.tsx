import Link from 'next/link'
import Image from 'next/image'
import Menu from '@/components/Menu';
import  MENU  from '@/const/MENU'
import SITE from '@/const/SITE';
import { GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@/components/Icons'

export default function Footer() {


	return (
		<footer className="text-sm w-full bottom-0">
			<div className="main-line-gradient" />
			<div className="flex flex-col items-center justify-around w-full md:px-20 px-5 pt-8">
				<Link href="/">
					<a className="flex flex-col items-center pointer-scale">
						<Image
							src={SITE.logo}
							alt={SITE.description}
							height={70}
							width={70}
						/>
						<h4 className="title text-xl mt-2">{SITE.title}</h4>
					</a>
				</Link>
				<ul className="flex flex-col md:flex-row items-center md:w-3/5 lg:w-3/6 justify-evenly py-5">
					{MENU.BOTTOM.map((route) => (
						<Menu route={route} key={route.path} />
					))}
				</ul>
				<div className="flex flex-row items-center w-full md:w-3/12 justify-evenly py-3">
					<a href={`https://instagram.com/${SITE.instagram}`} target="_blank">
						<Instagram className="icon-svg" />
					</a>
					<a href={`https://github.com/${SITE.github}`} target="_blank">
						<GitHub className="icon-svg" />
					</a>
					<a href={`https://linkedin.com/${SITE.linkedIn}`} target="_blank">
						<LinkedIn className="icon-svg" />
					</a>
					<a href={`https://twitter.com/${SITE.twitter}`} target="_blank">
						<Twitter className="icon-svg" />
					</a>
					<a href={`https://youtube.com/${SITE.youtube}`} target="_blank">
						<YouTube className="icon-svg" />
					</a>
				</div>
				<a href="https://bushidolabs.io" target="_blank" className="mt-2">
					<Image
						src="/white_bushido.png"
						alt="Bushido Labs"
						height={50}
						width={100}
						className="pointer-scale"
					/>
				</a>
			</div>
		</footer>
	)
}
