export class AppConfig {
    static getRecipeMappings(): RecipeMapping[] {
        return [
            {
                name: 'item1',
                location: 'item1.png'
            },
            {
                name: 'really really really really really really really really really really really really really really really long name',
                location: 'item1.png'
            },
            {
                name: 'item1',
                location: 'item1.png'
            },
            {
                name: 'item1',
                location: 'item1.png'
            },
            {
                name: 'item1',
                location: 'item1.png'
            }
        ];
    }
}

interface RecipeMapping {
    name: string;
    location: string;
}
