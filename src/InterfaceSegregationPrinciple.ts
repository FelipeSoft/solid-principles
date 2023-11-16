/* 

-- Interface Segregation Principle (I);
"Não declare métodos inutéis, ou que não serão utilizados pelas subclasses."

*/

// Classes "Normais"
// Classes Abstratas
// Interfaces

// Errado
// class Ave {
//     public voar() {}
//     public eat() {}
//     public reproduce() {}
// }

// class Pardal extends Ave {
//     public eat() {
        
//     }
    
//     public reproduce() {
        
//     }

//     public voar() {

//     }
// }

// class Pinguim extends Ave {
//     public eat() {
        
//     }
    
//     public reproduce() {
        
//     }

//     // Pinguim voa????
//     public voar() {
        
//     }
// }

// Certo
interface CanFly {
    voar(): void;
}

interface Aves {
    eat(): void;
    reproduce(): void;
}

class Pardal implements CanFly, Aves {
    public eat(): void {

    }

    public reproduce(): void {

    }

    public voar(): void {
        
    }
}

class Pinguim implements Aves{
    public eat(): void {
        
    }

    public reproduce(): void {
        
    }
}

