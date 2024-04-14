import {JSX} from "react";

export function formatInstructions (instructions?: string): JSX.Element {
    if(instructions){
        const formattedInstructions = instructions.split('.');
        return (<ul>
                    { formattedInstructions.map((instruction, index) => {
                        if(instruction){
                            return <li className={'p-2'}> {createStep(index)} {instruction}</li>
                        }
                    })}
        </ul>)
    }
    return <></>
}

function createStep(index: number): JSX.Element {
    return <span className="font-bold">Step {index+1}.</span>
}
