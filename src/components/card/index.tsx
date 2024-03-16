
interface CardProps {
    id: string | null;
    title: string | null;
    image: string | null;
}

export const Card  = ({id, title, image}: CardProps) => {
    return (<div className={'flex flex-wrap items-end min-h-[5vh] min-w-[10vw] p-2 bg-lime-200 mr-2 hover:cursor-pointer rounded-s transition-all hover:bg-lime-600'}
                 key={id}>
            <div className={'p-3.5'}>
                { image && title && <img className={'rounded-full border-lime-100 border-8'} src={ image } alt={title}/> }
            </div>
            <h2 className={'text-center font-bold'}>{ title }</h2>
    </div>)
}
