const button = document.getElementById("createButton");

function clickHandler(event) {
    console.log('Button Clicked');
    var nametxt = document.getElementById("name").value;
    var deposittxt = document.getElementById("deposit").value;
    var textArea = document.getElementById("showarea");

    var account;
    account = new BankAccount();
    // account.createAccount(nametxt, deposittxt);
    BankAccount.accountInfoList.push(account.createAccount(nametxt, deposittxt));

    textArea.value += account.getTextArea;

}

class BankAccount {
    static accountInfoList = [];
    #name;
    #balance;
    createAccount(name, deposit) {
        this.#name = name;
        this.#balance = parseFloat(deposit);    
    }

    get getTextArea(){
        return "Account Name : " + this.#name + "  Balance : " + this.#balance + "\n ";
    }
}

button.addEventListener("click", clickHandler);




