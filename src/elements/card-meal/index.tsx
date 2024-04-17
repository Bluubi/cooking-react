import {MealModel} from "../../features/meal/domain/Meal.ts";

export const CardMealElement = (meal: MealModel) => {
    return (
        <div className={'border-2 border-b-8 rounded-sm border-slate-200 m-2'}>
            <img className={'rounded-sm'} src={meal?.img} alt={`image of ${meal?.recipeName}`} />
            <div className={'p-2'}>
                <p className={'text-2xl font-bold p-3'}> {meal?.recipeName}</p>
                <p className={'pl-2'}> ¡Espero que disfrutes cada bocado de esta deliciosa receta de <span className={'font-bold'}>{meal.recipeName}</span>! </p>
            </div>

        </div>
    )
}
