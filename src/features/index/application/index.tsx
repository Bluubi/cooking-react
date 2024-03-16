import {useEffect, useState} from "react";
import {Meals} from "../../meals/domain/Meals.ts";
import {Trans} from "react-i18next";

const weekDays =  ['m','t','w','t','f','s','s']
export function Index(){

    const [data, setData] = useState<Meals | undefined >(undefined);
    const [ day, setDay ] = useState<string>()
    const getRecipesByFirstLetter = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getFirstDayWeekLetter()}`);
        const json = await response.json();

        setDay(day);
        setData(json);
    }

    const getFirstDayWeekLetter = (): string => {
        return weekDays[Number(new Date().getDay().toString()[0])];

    }

    useEffect(() => {
        getRecipesByFirstLetter()
    }, []);



    return (<section>
        <h1 className={'text-3xl p-2'}> <Trans i18nKey={'index.discoverRecipes'}>
            {{ letter: getFirstDayWeekLetter() }}
        </Trans> </h1>
        <div className={'flex overflow-x-auto'}> {
            data?.meals.map( recipe => {
                return (
                    <div className={'flex flex-wrap items-end min-h-[5vh] min-w-[10vw] p-2 bg-lime-200 mr-2'} key={recipe.idMeal}>
                        <h2 className={'text-center'}>{recipe.strMeal}</h2>
                        <div className={'p-3.5'}>
                            <img className={'rounded-full'} src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                    </div>);
            })
        } </div>

    </section>)
}
