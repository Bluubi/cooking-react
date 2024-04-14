import {MealModel} from "../../features/meal/domain/Meal.ts";

export const CardMealElement = (meal: MealModel) => {
    return (
        <article className={'flex mt-10 ml-10 border-2 border-r-8 rounded-sm border-slate-200 w-2/6'}>
            <img className={'rounded-sm'} src={meal?.img} alt={`image of ${meal?.recipeName}`} width={300}
                 height={300}/>
            <div className={'p-2'}>
                <p className={'text-2xl font-bold p-3'}> {meal?.recipeName}</p>
                <p className={'pl-2'}> ¡Espero que disfrutes cada bocado de esta deliciosa receta de <span className={'font-bold'}>{meal.recipeName}</span>! </p>
            </div>

        </article>
    )
}
