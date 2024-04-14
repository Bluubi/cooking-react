import {HomeNav} from "../../elements/wrappers/home-nav";
import {useEffect, useState} from "react";
import {MealDTOToModel, MealModel} from "../../features/meal/domain/Meal.ts";
import {CardMealElement} from "../../elements/card-meal";

export const HomePage = () => {

    const [ meal, setMeal ] = useState<MealModel>()

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php\n')
            const recipe = await response.json();
            const meals = recipe.meals;
            const mealModel = MealDTOToModel(meals[0]);
            setMeal(mealModel);
        }

        fetchRecipe();
    }, []);

    return (
        <section>
            <HomeNav />
            <CardMealElement {...meal} />
        </section>

    )
}
