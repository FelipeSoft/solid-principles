/* 

-- Open Closed Principle (O);
"Uma classe deve estar aberta para extensões, e fechada para modificações."

*/ 
class PaymentMethod {
    private tax: number = 0;

    public payWithCash() {
        this.tax = 0;
    }

    public payWithCreditCard() {
        this.tax = 0.1;
    }
}