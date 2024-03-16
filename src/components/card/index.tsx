interface CardProps {
    id: string | null;
    title: string | null;
    image: string | null;
}

export const Card  = ({id, title, image}: CardProps) => {
    return (<div className={'flex flex-wrap items-end min-h-[5vh] min-w-[10vw] p-2 bg-lime-200 mr-2'}
                 key={id}>
            <h2 className={'text-center'}>{ title }</h2>
            <div className={'p-3.5'}>
                { image && title && <img className={'rounded-full'} src={ image } alt={title}/> }
            </div>
    </div>)
}
