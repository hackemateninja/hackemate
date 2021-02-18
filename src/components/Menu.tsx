import Link from "next/link";
import { useRouter } from 'next/router'

export default function Menu({route}){
	const router = useRouter();
	const active = router.pathname === route.path
	return (
		<li key={route.path} className="py-2 md:py-0">
			<Link href={route.path}>
				<a className={`text-xs md:text-sm hover:text-primary-400 tracking-wider font-black ${active ? 'text-primary-400' : 'text-grey-400'}`}>
					{route.name}
				</a>
			</Link>
		</li>
	)
}
