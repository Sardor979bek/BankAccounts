const button = document.getElementById("createButton");

function clickHandler(event) {
    console.log('Button Clicked');
    var nametxt = document.getElementById("name").value;
    var deposittxt = document.getElementById("deposit").value;
    var textArea = document.getElementById("showarea");

    var account;
    account = new BankAccount();
    BankAccount.accountInfoList.push(account.createAccount(nametxt, deposittxt));
    var lenghtOfList = BankAccount.accountInfoList.length;

    textArea.value += "Account Name : " + BankAccount.accountInfoList[lenghtOfList - 1].name + "  Balance : " + BankAccount.accountInfoList[lenghtOfList - 1].deposit + "\n ";
}

class BankAccount {
    static accountInfoList = [];
    constructor(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    }   
    createAccount(name, deposit) {
        return new BankAccount(name, deposit);
    }
}

button.addEventListener("click", clickHandler);




