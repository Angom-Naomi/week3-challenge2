class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
        this.open = false;
    }
    getBalance() {
        return this.balance;
    }
    open(name) {
        this.name = name;
        this.open = true;
        return ("Welcome to our bank",name)
    }
    deposit(amount) {
        this.balance +=amount;
        return ("Amount deposited is: ", amount);
    }
    withdraw(amount) {
        if (this.balance >= amount){
            this.balance -= amount;
            return ("Amount withdrawn is: ", amount);
        }
        else{
            return ("Sorry, you have insufficient funds to withdraw.");
        }
    }
    close(){
        this.open = false;
        return ("Error! Account is closed and inactive.")
    }
}













