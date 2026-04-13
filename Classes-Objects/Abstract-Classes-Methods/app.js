"use strict";
// Abstract Classes and Methods
class Payment {
    amount;
    account;
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class Paytm extends Payment {
}
