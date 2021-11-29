document.getElementById("deposit-btn").addEventListener("click", function () {
  //get deposited amount
  const depositInput = document.getElementById("deposit-input");
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);

  const previousDeposit = document.getElementById("deposit-previous");
  const previousDepositText = previousDeposit.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const totalDeposited = newDepositAmount + previousDepositAmount;
  previousDeposit.innerText = totalDeposited;
  //   console.log(depositMoney);

  const balancePrevious = document.getElementById("balance-previous");
  const balancePreviousText = balancePrevious.innerText;
  const balancePreviousAmount = parseFloat(balancePreviousText);
  const balanceUpdated = balancePreviousAmount + newDepositAmount;
  balancePrevious.innerText = balanceUpdated;
  //clear
  depositInput.value = "";
});

//withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get deposited amount
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText);

  const previousWithdraw = document.getElementById("previous-withdraw");
  const previousWithdrawText = previousWithdraw.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
  previousWithdraw.innerText = totalWithdraw;
  //   console.log(depositMoney);

  const balancePrevious = document.getElementById("balance-previous");
  const balancePreviousText = balancePrevious.innerText;
  const balancePreviousAmount = parseFloat(balancePreviousText);
  const balanceUpdated = balancePreviousAmount - newWithdrawAmount;
  balancePrevious.innerText = balanceUpdated;
  //clear
  withdrawInput.value = "";
});
