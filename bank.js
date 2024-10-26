class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.balance = 0;
    }
    deposit(amt) {
        if (amt <= 0) {
            console.log("Deposit can't be negative or zero!");
            return;
        }
        this.balance += amt;
        console.log("Deposited successfully!");
    }
    withdraw(amt){
        if(amt<=0){
            console.log("Withdraw can't be negative or zero!");
            return;
        }
        if(amt<this.balance){
            this.balance -=amt;
            console.log("Withdrawn successfully!");
        }
        else{
            console.log("Not sufficient balance!");
        }
    }
    checkBalance() {
        console.log(`Balance : ${this.balance}`);
    }
}
class Bank {
    constructor() {
        this.accounts = {};
    }
    register(username, password) {
        if (this.accounts[username]) {
            console.log("Username already exists.");
            return;
        }
        this.accounts[username] = new User(username, password);
        console.log("Added Successfully!");
    }
    login(username, password) {
        const account = this.accounts[username];
        if (account && account.password === password) {
            console.log(`Welcome, ${username}`);
            return account;
        }
        else {
            console.log("invalid username or password");
        }
    }
}

let loggedInUser = null;
const user1 = new Bank();
const b = document.getElementById("b");
b.addEventListener("click", () => {
    console.log("Hello!");

    
    let c = 0;
    while (c != 6) {
        c = parseInt(prompt("1. Add new user\n2. Add money\n3. Withdraw money\n4. Check balance\n5. Login\n6. Exit", 6));
        switch (c) {
            case 1:
                const username = prompt("Enter your username : ");
                const password = prompt("Enter your password : ");
                user1.register(username, password);
                loggedInUser = null;
                break;
            case 2:
                if (!loggedInUser) {
                    console.log("You need to log in first.");
                    break;
                }
                const depositamt = parseFloat(prompt("Enter the amount to deposit: ", 0));
                if (!isNaN(depositamt)) {
                    loggedInUser.deposit(depositamt);
                } else {
                    console.log("Please enter a valid amount.");
                }
                break;
            case 3:
                if (!loggedInUser) {
                    console.log("You need to log in first.");
                    break;
                }
                const withdrawAmt = parseFloat(prompt("Enter the amount to withdraw : ", 0));
                if (!isNaN(withdrawAmt)) {
                    loggedInUser.withdraw(withdrawAmt);
                } else {
                    console.log("Please enter a valid amount.");
                }
                break;
                
            case 4:
                if (!loggedInUser) {
                    console.log("You need to log in first.");
                    break;
                }
                loggedInUser.checkBalance();
                break;
            case 5:
                const loged = prompt("Enter your username : ");
                const logedp = prompt("Enter your password : ");
                loggedInUser = user1.login(loged, logedp);
                break;
            case 6:
                console.log("Exited successfully!");
                break;
            default:
                console.log("Invalid option. Please try again.");
                break;
        }


    }
});