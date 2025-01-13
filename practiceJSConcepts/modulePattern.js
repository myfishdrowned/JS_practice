const bankAccount = (function() {
    // Private variables and functions
    let balance = 0;
    
    function validateAmount(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    // Public API
    return {
        deposit: function(amount) {
            if (!validateAmount(amount)) {
                throw new Error('Invalid deposit amount');
            }
            balance += amount;
            return balance;
        },
        
        getBalance: function() {
            return balance;
        }
    };
})();

console.log(bankAccount.getBalance()); // 0
bankAccount.deposit(100); // 100
console.log(bankAccount.getBalance()); // 100

// These won't work:
console.log(bankAccount.balance); // undefined
console.log(bankAccount.validateAmount(100)); // TypeError