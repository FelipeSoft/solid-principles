/* 

-- Single Reponsability Principle (S);
"Uma classe só tem um motivo para existir e uma única responsabilidade."

*/ 
// Errado
class PaymentProcessor {
    constructor(
        public currentClientBalance: number,
        public readonly amount: number
    ) {}

    public processPayment() {
        if (this.amount > this.currentClientBalance) {
            throw new Error("Transaction Failed [403]: Payment denied.");
        }

        this.currentClientBalance -= this.amount;
    }
    
    public generateReceipt() {
        const processedTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        return `Total of $${this.amount} processed at ${processedTime}`;
    }
}

// Certo
// class PaymentProcessor {
//     constructor(
//         public currentClientBalance: number,
//         public readonly amount: number
//     ) {}

//     public processPayment() {
//         if (this.amount > this.currentClientBalance) {
//             throw new Error("Transaction Failed [403]: Payment denied.");
//         }

//         this.currentClientBalance -= this.amount;
//     }
// }

// class ReceiptManager {
//     constructor(
//         public currentClientBalance: number,
//         public readonly amount: number
//     ) {}
    
//     public generateReceipt() {
//         const processedTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
//         return `Total of $${this.amount} processed at ${processedTime}`;
//     }
// }