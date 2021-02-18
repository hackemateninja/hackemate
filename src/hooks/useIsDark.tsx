import {useEffect, useState} from 'react'

export default function useIsDark(): boolean {
	const [isDark, setIsDark] = useState(false)


	const checkDark = (dark) => {
		dark.matches ? setIsDark(true) : setIsDark(false);
	}

	useEffect(()=>{
		const dark = window.matchMedia('(prefers-color-scheme: dark)');

		checkDark(dark);

		dark.addEventListener('change', checkDark);
	},[])

	return isDark
}
