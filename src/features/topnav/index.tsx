const navOptions = [
    <Trans i18nKey={'topnav.favourites'}></Trans>,
    <Trans i18nKey={'topnav.lookByFirstLetter'}></Trans>
]
import {Trans} from "react-i18next";

export const Topnav = () => {
    return ( <nav className={'relative flex bg-emerald-950 text-white'}>
        <ul className={'flex gap-x-3.5'}>
            { navOptions.map( (option, idx) => <li key={`idx-${idx}`} className={'p-3.5 hover:bg-emerald-600 cursor-pointer'}>{ option }</li>)}
        </ul>
    </nav>)
}



