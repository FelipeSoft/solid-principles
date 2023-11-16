/* 

-- Open Closed Principle (L);
"Se X é subclasse de Y, X pode substituir Y sem QUEBRAR o programa."

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
        return 0.25;
    }
}