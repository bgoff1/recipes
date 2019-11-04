import veggieNames from '../../config/veggie-names.json';
import tags from '../../config/tags.json';

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
    for (const tag of tags) {
      this.addTag(tag);
    }
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
