import { AiOutlineSearch } from "react-icons/ai";
import styles from './styles.module.css';
import {useRef} from "react";
export const SearchByRecipe = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnClick = async () => {
        const recipeName = inputRef.current?.value;

        if (recipeName) {
            const data = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
            console.log(await data.json());
        }
    }

    const handleKeyPressed = (event: KeyboardEvent) => {
        if(event){
            const key = event.key
            if (key === 'Enter') {
                handleOnClick();
            }
        }
    }

    return(  <div className={'grid grid-cols-12'}>
        <div className={'relative col-span-8'}>
            <input type={'search'} ref={inputRef} className={'w-[98%] p-3.5 border-b-2'} onKeyDown={(event) => handleKeyPressed(event)}/>
            <AiOutlineSearch className={`${styles.svg} absolute bottom-5 right-0`}/>
        </div>
        <button
            onClick={handleOnClick}
            className={'col-span-4 flex items-center ml-2 bg-emerald-600 rounded-sm transition-all duration-300 hover:bg-emerald-900 '}>
            <p className={'pl-3.5 text-white '}>
                Buscar
            </p>

        </button>
    </div>)
}
