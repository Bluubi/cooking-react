import {SpecialCardProps} from "../index.ts";

export const SpecialCard = ({id, title, image }: SpecialCardProps) => {

    return (
        <div key={id} className={'w-svw h-72 flex shadow-md'}>
            <div className={'h-full w-full flex flex-wrap'}>
                <p className={'text-2xl self-end p-3.5'}> Hoy te recomendamos... </p>
                <p className={'inline-block font-bold text-xl p-3.5 transition duration-100 border-b-4 border-b-emerald-600'}>{title}</p>
            </div>
            {image && title && <img
                className={'w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:cursor-pointer'}
                src={image}
                alt={title}/>}
        </div>)
}
