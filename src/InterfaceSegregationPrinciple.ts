/* 

-- Interface Segregation Principle (I);
"Não declare métodos inutéis, ou que não serão utilizados pelas subclasses."

*/

class Ave {
    public voar() {}
    public eat() {}
    public reproduce() {}
}

class Pardal extends Ave {
    public eat() {
        
    }
    
    public reproduce() {
        
    }

    public voar() {

    }
}

class Pinguim extends Ave {
    public eat() {
        
    }
    
    public reproduce() {
        
    }

    // Pinguim voa????
    public voar() {

    }
}