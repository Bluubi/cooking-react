type NavOptionsProps = {
    isAvailable: boolean
    link: JSX.Element
}

import {Trans} from "react-i18next";

export const Topnav = ({isLogged}: {isLogged: boolean}) => {

    const navOptions: NavOptionsProps[] = [
        { isAvailable: isLogged, link: <Trans i18nKey={'topnav.favourites'}></Trans>},
        { isAvailable: true, link: <Trans i18nKey={'topnav.lookByFirstLetter'}></Trans>
}
    ]


    return ( <nav className={'relative flex bg-emerald-950 text-white'}>
        <ul className={'flex gap-x-3.5'}>
            { navOptions.map( (option, idx) =>  option.isAvailable && <li key={`idx-${idx}`} className={'p-3.5 hover:bg-emerald-600 cursor-pointer'}>{ option.link }</li>)}
        </ul>
    </nav>)
}



