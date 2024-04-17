import {useParams} from "react-router-dom";
import {articles} from "../../../public/articles/Articles.ts";

export const RecipePage = () => {

    const { name } = useParams()
    const article = articles.find(article => article.recipeName === name);

    return <section className={'p-3'}>
        <h2 className="text-4xl font-extrabold dark:text-white">{ article?.recipeName }</h2>
        <p>{ article?.recipe }</p>

    </section>
}
