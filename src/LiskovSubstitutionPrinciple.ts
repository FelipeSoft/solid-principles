/* 

-- Liskov Substitution Principle (L);
"Se Beer/Water/Chocolate é subclasse de Item, Beer/Water/Chocolate pode substituir Item sem QUEBRAR o programa."

*/

class Item {
    constructor(
        public readonly category: string,
        public readonly description: string,
        public readonly price: number
    ) {}

    public calculateTaxes(): number {
        return this.price * this.getTax();
    }
    
    public getTax(): number {
        return 0;
    }
}

const item = new Item("Water", "Descrição 1", 8);

class Water extends Item {
    public getTax(): number {
        return 0.05;
    }
}

class Beer extends Item {
    public getTax(): number {
        return 0.2;
    }
}

class Chocolate extends Item {
    public getTax(): number {
        return 0.1;
    } 
}

const chocolate = new Chocolate("Chocolate", "Descrição 1", 4);
const beer = new Beer("Beer", "Descrição 1", 4);
const water = new Water("Water", "Descrição 1", 4);
