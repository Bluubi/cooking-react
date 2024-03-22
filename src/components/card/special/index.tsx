import {SpecialCardProps} from "../index.ts";

export const SpecialCard = ({id, title, image }: SpecialCardProps) => {
    return (<div className={'flex flex-wrap'}
                 key={id}>
        <div className={'w-svw h-72 flex items-end'}>
            <h2 className={'font-bold text-3xl p-3.5 absolute z-30'}>{title}</h2>
            {image && title && <img
                className={'w-full h-full object-cover transform transition-all duration-500 hover:scale-110 hover:cursor-pointer'}
                src={image}
                alt={title}/>}
        </div>
    </div>)
}
