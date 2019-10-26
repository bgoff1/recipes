import veggieNames from '../../config/veggie-names.json';

export class Recipe implements RecipeMapping {
  name: string;
  private lowerName: string;
  location: string;
  tags: string[];
  constructor(name: string) {
    this.name = name;
    this.lowerName = name.toLocaleLowerCase();
    this.location = this.lowerName.includes(' - ')
      ? this.lowerName.substring(0, name.search(/\s-\s/)).replace(/\s/g, '-') +
        '.png'
      : this.lowerName.replace(/\s/g, '-') + '.png';
    this.tags = [];
    this.addTag('chicken');
    this.addTag('steak');
    this.addTag('dutch oven');
    this.addTag('low carb');
    this.addTag('casserole');
    this.addTag('skillet');
    this.addTag('crock pot');
    this.addTag('pasta');
    this.addVeggieTag();
  }

  addTag(potentialTag: string): void {
    if (this.lowerName.includes(potentialTag)) {
      this.tags.push(potentialTag);
    }
  }

  addVeggieTag() {
    if (this.lowerName.split(' ').some(word => veggieNames.includes(word))) {
      this.tags.push('veggie');
    }
  }
}

export interface RecipeMapping {
  name: string;
  location: string;
}
