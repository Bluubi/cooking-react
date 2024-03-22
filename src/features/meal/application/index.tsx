import {Meals} from "../../meals/domain/Meals.ts";
import {useEffect, useState} from "react";
import {setCookie} from "../../../utils/cookies/set.ts";
import {getCookie} from "../../../utils/cookies/get.ts";
import {MealRecipe} from "../domain/Meal.ts";
import {SpecialCard} from "../../../components/card/special";

interface MealProps {
    meals: Meals | undefined
}

export const Meal = ({ meals }: MealProps) => {

    const [ meal, setMeal ] = useState<MealRecipe>()
    const setRecipeForDay = () => {
    const cookie = getCookie('recipeForDay');
    if(cookie !== null) {
        // setMeal(JSON.parse(cookie));
        return null;
    }
        if(meals){
            const randomNumber = Math.floor(Math.random() * meals?.meals.length);
            const randomMeal = meals.meals[randomNumber];
            setMeal({
                idMeal: meals.meals[randomNumber].idMeal!,
                strMealThumb: meals.meals[randomNumber].strMealThumb!,
                strMeal: meals.meals[randomNumber].strMeal!
            });
            setCookie<any>('recipeForDay', 1, randomMeal);
        }
    }

    useEffect(() => {
        setRecipeForDay();
    }, []);

    return (<article >
        <SpecialCard id={meal?.idMeal} title={meal?.strMeal} image={meal?.strMealThumb}/>
    </article>)
}
