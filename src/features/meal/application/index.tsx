import {Meals} from "../../meals/domain/Meals.ts";
import {useEffect, useState} from "react";
import {setCookie} from "../../../utils/cookies/set.ts";
import {getCookie} from "../../../utils/cookies/get.ts";

interface MealProps {
    meals: Meals | undefined
}

export const Meal = ({ meals }: MealProps) => {

    const [ meal, setMeal ] = useState<any>(null)
    const setRecipeForDay = () => {
    const cookie = getCookie('recipeForDay');
    if(cookie !== null) {
        setMeal(JSON.parse(cookie));
        return null;
    }
        if(meals){
            const randomNumber = Math.floor(Math.random() * meals?.meals.length);
            const randomMeal = meals.meals[randomNumber];
            setMeal(meals.meals[randomNumber]);
            setCookie<any>('recipeForDay', 1, randomMeal);
        }
    }

    useEffect(() => {
        setRecipeForDay();
    }, []);

    return (<article>
        { JSON.stringify(meal) }
    </article>)
}
