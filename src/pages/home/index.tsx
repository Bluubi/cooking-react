import {HomeNav} from "../../elements/wrappers/home-nav";
import {useEffect, useState} from "react";
import {MealDTOToModel, MealModel} from "../../features/meal/domain/Meal.ts";
import {CardMealElement} from "../../elements/card-meal";
import {articles} from "../../../public/articles/Articles.ts";
import {CardElement} from "../../elements/card";
import {CardUser} from "../../elements/card-user";

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
        <section className={'grid grid-cols-12'}>
            <HomeNav />
            <section className={'col-start-1 col-span-8'}>
                <h1 className={'p-6 text-2xl flex-1'}> ¡Las deliciosas recetas de quienes ya cocinan con CookingReact!
                </h1>
                <div className={"flex gap-x-10"}>
                    { articles.map( (article, index) => {
                        return (
                                <CardElement key={`card${index}`} user={<CardUser />} text={article}/>)

                    }) }
                </div>


            </section>
            <section className={'col-start-10 col-span-full'}>
                <CardMealElement {...meal} />
            </section>
        </section>

    )
}
