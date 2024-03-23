import {useEffect, useState} from "react";
import {Meals} from "../../meals/domain/Meals.ts";
import {Trans} from "react-i18next";
import {Meal} from "../../meal/application";
import {Topnav} from "../../topnav";
import {BaseCard} from "../../../components/card/base";
import {Link, useLoaderData} from "react-router-dom";

const weekDays =  ['m','t','w','t','f','s','s']
export function Index(){

    const { isLogged } = useLoaderData();

    const [ data, setData] = useState<Meals | undefined >(undefined);
    const [ day, setDay ] = useState<string>()
    const getRecipesByFirstLetter = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getFirstDayWeekLetter()}`);
        const json = await response.json() as Meals;

        setDay(day);
        setData(json);

    }

    const getFirstDayWeekLetter = (): string => {
        return weekDays[Number(new Date().getDay().toString()[0])];

    }

    useEffect(() => {
        getRecipesByFirstLetter();

    }, []);



    return (
        <section>
            <Topnav isLogged={isLogged}/>
            <Meal meals={data}></Meal>
            <article>
                <h1 className={'text-3xl p-10'}><Trans i18nKey={'index.discoverRecipes'}>
                    {{letter: getFirstDayWeekLetter()}}
                </Trans></h1>
                <div className={'flex flex-wrap gap-10 justify-center'}> {
                    data?.meals.map(recipe => {
                        return (
                            <BaseCard key={`card-${recipe.idMeal}`} id={recipe.idMeal ?? ''} shadow={'shadow-md'} position={'relative'}>
                                {recipe.strMealThumb && recipe?.strMeal && <img src={recipe.strMealThumb} alt={recipe?.strMeal}
                                                        className={'transform transition-all duration-500 hover:scale-110 hover:cursor-pointer rounded-md'}/>}
                                <Link className={'text-center font-bold absolute bottom-0 w-full bg-white p-1'} to={''}>{recipe?.strMeal}</Link>

                            </BaseCard>)
                    })
                }
                </div>
            </article>

        </section>)
}

