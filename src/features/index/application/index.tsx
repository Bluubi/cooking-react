import {useEffect, useState} from "react";
import {Meals} from "../../meals/domain/Meals.ts";
import {Trans} from "react-i18next";
import {Card} from "../../../components/card";
import {Meal} from "../../meal/application";
import {Topnav} from "../../topnav";

const weekDays =  ['m','t','w','t','f','s','s']
export function Index(){

    const [ data, setData] = useState<Meals | undefined >(undefined);
    const [ day, setDay ] = useState<string>()
    const getRecipesByFirstLetter = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getFirstDayWeekLetter()}`);
        const json = await response.json() as Meals;

        // document.cookie = 'RecipePerDay'+'='+()
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
            <Topnav />
            <Meal meals={data}></Meal>
            <article>
                <h1 className={'text-3xl p-10'}><Trans i18nKey={'index.discoverRecipes'}>
                    {{letter: getFirstDayWeekLetter()}}
                </Trans></h1>
                <div className={'flex overflow-x-auto'}> {
                    data?.meals.map(recipe => {
                        return (
                            <Card id={recipe.idMeal} title={recipe?.strMeal} image={recipe && recipe.strMealThumb}/>)
                    })
                }
                </div>
            </article>

        </section>)
}

