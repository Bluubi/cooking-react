import {Meals} from "../../meals/domain/Meals.ts";

export interface MealRecipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export interface MealProps {
    meals: Meals | undefined
}


export function getRandomMeal (meals: Meals | undefined): MealRecipe | undefined {
    if(meals){
        const randomNumber = Math.floor(Math.random() * meals?.meals.length);
        return {
            idMeal: meals.meals[randomNumber].idMeal!,
            strMealThumb: meals.meals[randomNumber].strMealThumb!,
            strMeal: meals.meals[randomNumber].strMeal!
        };
    }
    return undefined;
}
