import {txt1, txt2} from "./articles-db.ts";

export type Article = {
    portrait: string,
    recipeName: string,
    img: string,
    recipe: string,
}

export const articles = [
    txt1, txt2
]
