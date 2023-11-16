/* 

-- Open Closed Principle (O);
"Uma classe deve estar aberta para extensões, e fechada para modificações."

*/ 

// Errado
class PaymentMethod {
    private tax: number = 0;

    public payWithCash() {
        this.tax = 0;
    }

    public payWithCreditCard() {
        this.tax = 0.1;
    }
}

// Certo
// abstract class PaymentMethod {
//     public tax: number = 0;
//     abstract pay(): void ;
// }

// class CreditCard extends PaymentMethod {
//     public pay(): void {
//         this.tax = 0.2;
//     }
// }

// class Cash extends PaymentMethod {
//     public pay(): void {
//         this.tax = 0;
//     }
// }
