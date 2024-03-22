import {useEffect, useState} from "react";
import {setCookie} from "../../../utils/cookies/set.ts";
import {getCookie} from "../../../utils/cookies/get.ts";
import {getRandomMeal, MealProps, MealRecipe} from "../domain/Meal.ts";
import {SpecialCard} from "../../../components/card/special";
import {Meals} from "../../meals/domain/Meals.ts";

export const Meal = ({ meals }: MealProps) => {

    const [ meal, setMeal ] = useState<MealRecipe>()
    const setRecipeForDay = () => {
    const cookie = getCookie('recipeForDay');
    if(cookie !== null) {
        try {
            setMeal(JSON.parse(cookie));
        }catch (error){
            setAndGetRandomMeal(meals);
            console.error('Something wrong happened')
        }
        return null;
    }

    }

    function setAndGetRandomMeal(meals: Meals | undefined): MealRecipe | undefined {
        const randomMeal = getRandomMeal(meals);
        setMeal(randomMeal);
        if(meals){
            if(randomMeal){
                setCookie<MealRecipe>('recipeForDay', 1, randomMeal);
            }
        }
        return randomMeal;
    }

    useEffect(() => {
        setRecipeForDay();
    }, [])

    return (<article >
        <SpecialCard id={meal?.idMeal} title={meal?.strMeal} image={meal?.strMealThumb}/>
    </article>)
}
