import style from './index.module.css';
import {Article} from "../../../public/articles/Articles.ts";
import {Link} from "react-router-dom";
import {FaLink} from "react-icons/fa";
export const CardElement = ({ article, user }: { article: Article, user: JSX.Element }) => {
    return (<div className={`p-6 relative w-1/3 shadow-md ${style.animationElevate} cursor-default`}>
                <p className={'p-2'}>{ article.portrait } </p>
                { user }
        <Link to={'/'+article.recipeName} className={`absolute left-0 bottom-0 ml-5 p-3 text-sky-800 flex items-center`}>Leer la receta <FaLink className={'ml-5'}/></Link>
            </div>)
}
