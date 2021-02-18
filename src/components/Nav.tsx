import Link from "next/link";
import MENU from "@/const/MENU";
import SITE from '@/const/SITE';
import Menu from '@/components/Menu';
import { Search } from '@/components/Icons';


export default function Nav(){


	return(
		<>
			<div className="main-line-gradient "/>
			<nav className="flex w-full h-20 items-center justify-between px-5 md:px-20">
				<div className="w-1/3">
					<Link href="/">
						<a className="md:text-2xl title pointer-scale">{SITE.title}</a>
					</Link>
				</div>
				<ul className="flex w-1/3 justify-evenly items-center hidden lg:flex">
					{
						MENU.TOP.map(route => (
							<Menu route={route} key={route.path} />
						))
					}
					<Search className="icon-svg"/>
				</ul>
				<div className="flex w-1/3  justify-end">
					<button className="text-grey-400 mr-1 md:mr-5 text-xs md:text-sm font-black">
						Subscribe
					</button>
					<button className="text-primary-400 text-xs md:text-sm font-black">
						Login
					</button>
				</div>
			</nav>
		</>
	)
}
