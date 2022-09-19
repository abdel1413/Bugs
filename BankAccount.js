const accounts = {
  A: 100,
  B: 0,
  C: 500,
};

//access the account with the name associeted with it
function getAccount() {
  let accountName = prompt("What is you account name? ");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error("There's no account with name " + accountName);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

console.log(getAccount());
console.log(transfer("C", 200));
