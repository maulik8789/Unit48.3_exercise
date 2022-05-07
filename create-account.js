function createAccount(pin, amount = 0) {
    return {
        checkBalance(tryPin){
            if(tryPin == pin){
                return `$${amount}`;
            }
            else if(tryPin != pin){
                return "Invalid PIN."
            }
        },
        deposit(tryPin, cash){
            if(tryPin == pin){
                amount += cash;
                return `Succesfully deposited $${cash}. Current balance: $${amount}.`
            }
            else if(tryPin != pin){
                return "Invalid PIN."
            }
        },
        withdraw(tryPin, cash){
            if(tryPin == pin && cash <= amount){
                amount -= cash;
                return `Succesfully withdrew $${cash}. Current balance: $${amount}.`
            }
            else if(tryPin != pin){
                return "Invalid PIN."
            }
            else if(cash > amount){
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
        },
        changePin(oldPin, newPin){
            if(oldPin == pin){
                pin = newPin;
                return "PIN successfully changed!";
            }
            else if(oldPin != pin){
                return "Invalid PIN."
            }
        }
    };    
}

module.exports = { createAccount };
