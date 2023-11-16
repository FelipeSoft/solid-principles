/* 

-- Dependency Inversion Principle (D);
"Dependa de abstrações, não de implementações concretas."

*/

// Errado

// class DrawingService {
//     public drawCircle(): string{
//         return "Desenhando um círculo...";
//     }

//     public drawSquare(): string{
//         return "Desenhando um quadrado...";
//     }
// }

// class Client {
//     public constructor(
//         private readonly drawingService: DrawingService
//     ) {}

//     drawShapes(): string[] {
//         return [this.drawingService.drawCircle(), this.drawingService.drawSquare()];
//     }
// }

abstract class Shape {
    abstract draw(): string;
}

class Circle extends Shape {
    public draw(): string {
        return "Desenhando um círculo bacana..."
    }    
}

class Square extends Shape {
    public draw(): string {
        return "Desenhando um quadrado bacana..."
    }    
}

// Botão de desenhar forma (círculo e quadrado);

class DrawingService {
    constructor(
        private readonly shape: Shape
    ) {}

    public drawShape() {
        this.shape.draw();
    }
}

// Injeção de Dependência (Square)
const square = new Square();
const service1 = new DrawingService(square);

// Injeção de Dependência (Circle)
const circle = new Circle();
const service2 = new DrawingService(circle);
