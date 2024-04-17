import {Link} from "react-router-dom";

export const HomeNav = () => {

    const options = [
        { path: '/experiencias-culinarias', label: 'Experiencias culinarias'}
    ]

    return (<nav className={'col-span-full grid grid-cols-12 items-center bg-slate-800 text-slate-50'}>
        <p className={`col-start-1 col-span-3`}> <span className={'text-lg ml-2'}>Cooking React </span> </p>
        <ul className={'flex p-2 col-start-4 col-span-full'}>
            { options.map((option, index) => <li key={`key${index}`}><Link to={option.path} className={'hover:underline'}>{ option.label }</Link></li>)}
        </ul>
    </nav>)
}


