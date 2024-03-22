import {CardProps} from "../index.ts";
import {ComponentProps} from "react";


export const BaseCard = ({id, shadow, position, ...props}: CardProps & ComponentProps<'div'>) => {
    return (
        <div key={id} className={`${position} w-60 ${shadow}`}>
            { props.children }
        </div>)
}
