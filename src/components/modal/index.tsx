import {ComponentProps, Dispatch, SetStateAction} from "react";
import { AiOutlineClose } from "react-icons/ai";


export const ModalComponent = ({ isOpen, setOpen, children }: ComponentProps<'div'> & { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {

    return <div className={`${ isOpen ? 'transition-opacity duration-200 ease-in opacity-100 visible' : 'opacity-0 invisible'}  absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
                data-testid={'modal'}>
        <AiOutlineClose fill={'white'} className={'absolute top-0 right-0 cursor-pointer'} onClick={() => setOpen(!isOpen)} />
        { children }
    </div>
}
