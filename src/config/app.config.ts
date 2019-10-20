import recipes from './recipe-names.json';

export class AppConfig {
    recipes: Recipe[] = [];
    constructor() {
        for (const name of recipes) {
            this.addRecipe(name);
        }
    }

    addRecipe(name: string) {
        this.recipes.push(new Recipe(name));
    }
}

class Recipe implements RecipeMapping {
    name: string;
    location: string;
    tags: string[];
    constructor(name: string) {
        this.name = name;
        const lowerName = name.toLocaleLowerCase();
        this.location = lowerName.substring(0, name.search(/\s-\s/)).replace(/\s/g, '-') + '.png';
        this.tags = lowerName.substring(name.search(/\s-\s/) + ' - '.length).split(', ');
    }
}

interface RecipeMapping {
    name: string;
    location: string;
}
