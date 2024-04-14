export interface MealDTO {
    idMeal?: string;
    strMeal?: string;
    strDrinkAlternate?: string | null,
    strCategory?: string,
    strArea?: string,
    strInstructions?: string;
    strMealThumb?: string;
    strTags?: string;
    strYoutube?: string,
}

export interface MealModel {
    idMeal?: string;
    recipeName?: string;
    img?: string;
    drink?: string | null;
    category?: string;
    area?: string;
    instructions?: string;
    tags?: string;
    youtube?: string;

}

export const MealDTOToModel = (meal: MealDTO): MealModel => {
    return {
        idMeal: meal.idMeal,
        recipeName: meal.strMeal,
        tags: meal?.strTags,
        area: meal.strArea,
        category: meal.strCategory,
        img: meal.strMealThumb,
        instructions: meal.strInstructions,
        youtube: meal.strYoutube,
        drink: meal.strDrinkAlternate

    }
}
