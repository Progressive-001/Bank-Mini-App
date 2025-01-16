
class BankAccount{
  constructor(accountHolderName,initialBalance){
    this.accountHolderName = accountHolderName;
    this.balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount){
    if(amount > 0){
      this.balance += amount;
      console.log(`${amount} deposited successfully. Current balance: ${this.balance}`);
    }
    else{
      console.log("Deposit some funds into your account");
    }
  }
  
   // Method to withdraw money
   withdraw(amount) {

    if(amount > this.balance){
      console.log("Insufficient funds. Transaction declined");
    }

    else if(amount > 0){
      this.balance -= amount;
      console.log(`${amount} withdrawn successfully. Current balance: ${this.balance}`);
    }

    else{
      console.log("Withdrawal must be positive");
    }

  }

  // Method to display the current balance
  DisplayBalance(){
    console.log(`Account Holder: ${this.accountHolderName}, Current balance: ${this.balance}`)
  }

}

// Creating an instance of BankAccount

const myAccount = new BankAccount("Ayomide", 500);

// Simulating transaction
myAccount.deposit(500000);
myAccount.withdraw(200);
myAccount.DisplayBalance();