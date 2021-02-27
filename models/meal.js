class Meal {
  constructor(id, categoryIds, title, affordability, complexity, imageurl, duration, ingradiants, steps, isGlutenFree, isVegan, isVegetarial) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageurl = imageurl;
    this.duration = duration;
    this.ingradiants = ingradiants;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarial = isVegetarial;

  }
}

export default Meal;