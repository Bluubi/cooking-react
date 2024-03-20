import {Link} from "react-router-dom";

interface CardProps {
    id: string | null;
    title: string | null;
    image: string | null;
    cardType?: 'UNIQUE' | 'DEFAULT'
}

export const Card  = ({id, title, image, cardType = 'DEFAULT'}: CardProps) => {

    return ( cardType === 'DEFAULT' ?
        <div
            className={'flex flex-wrap max-w-[20vw]'}
            key={id}>
            <div className={'p-3.5 relative flex flex-col items-center'}>
                {image && title && <img src={image} alt={title} className={'transform transition-all duration-500 hover:scale-110 hover:cursor-pointer'}/>}
                <Link className={'text-center font-bold absolute top-2/3 bg-emerald-50 p-1'} to={''}>{title}</Link>
            </div>

        </div> :

        <div className={'flex flex-wrap'}
             key={id}>
            <div className={'w-svw h-72 flex items-end'}>
                <h2 className={'font-bold text-3xl p-3.5 absolute z-10'}>{title}</h2>
                {image && title && <img className={'w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:cursor-pointer'} src={image}
                         alt={title}/>}
            </div>
        </div>);
}
