import { MEALS } from "../../data/dummy-data";

const initialState = {
  melas: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
  return state;
}

export default mealReducer;