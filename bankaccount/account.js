class BankAccount {
    constructor(name,balance) {
        this.name=name;
        this.balance=balance;
        this.deposit=deposit;
        this.withdraw=withdraw;
        this.open=open;
        this.close=close;
        this.getBalance=getBalance;
    }
    getBalance() {
        
    }
    open(name,balance) {
        console.log("Enter customer name: ");
        console.log("Enter your opening balance: ");
        console.log("New account has been opened!");
    }
    deposit(amount) {
        let amount=parseInt(console.log("Enter your deposit amount: "));
        this.balance = balance + amount;
        console.log("Amount deposited is: ", amount);
    }
    withdraw(amount) {
        let amount=parseInt(console.log("How much do you want to withdraw? "));
        if (this.balance>=amount){
            this.balance = balance - amount;
            console.log("Amount withdrawn is: ", amount);
        }
        else{
            console.log("Sorry, you have insufficient funds to withdraw.");
        }
    }
    close(){

    }
}













