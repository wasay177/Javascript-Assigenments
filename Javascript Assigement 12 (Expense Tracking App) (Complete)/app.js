var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "always",
});

var list = document.getElementById("transactionList");
var form = document.getElementById("transactionForm");
var status = document .getElementById("status");
var balance = document.getElementById("balance");
var income = document.getElementById("income");
var expense = document.getElementById("expense");

form.addEventListener("submit", addTransaction);

function updateTotal() {
    var incomeTotal = transactions.filter((trx) => trx.type === "income").reduce((total, trx) => total + trx.amount, 0);

    var expenseTotal = transactions.filter((trx) => trx.type === "expense").reduce((total, trx) => total + trx.amount, 0); 

    var balanceTotal = incomeTotal - expenseTotal;

    balance.textContent = formatter.format(balanceTotal).substring(1);
    income.textContent = formatter.format(incomeTotal);
    expense.textContent = formatter.format(expenseTotal * -1);
}

function renderList() {
    list.innerHTML = "";

    status.textContent = "";
    if(transactions.length === 0) {
      status.textContent = "No transactions.";
      return;
    }

    transactions.forEach(({ id, name, amount, date, type }) => {
        var sign = "income" === type ? 1 : -1;

        var li = document.createElement("li");

        li.innerHTML = `
        <div class="name">
          <h4>${name}</h4>
          <p>${new Date(date).toLocaleDateString()}</p>
        </div>

        <div class="amount ${type}">
          <span>${formatter.format(amount * sign)}</span>
        </div>

        <div class="action">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onclick="deleteTransaction(${id})">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        `;

        list.appendChild(li);
    })
}

renderList();
updateTotal();

function deleteTransaction(id) {
    var index = transactions.findIndex((trx) => trx.id === id);
    transactions.splice(index, 1);

    updateTotal();
    saveTransactions()
    renderList();
}

function addTransaction(e) {
    e.preventDefault();

    var formData = new FormData(this);
    
    transactions.push({
        id: transactions.length + 1,
        name: formData.get("name"),
        amount: parseFloat(formData.get("amount")),
        date: new Date(formData.get("date")),
        type: "on" === formData.get("type") ? "income" : "expense",
    });

    this.reset();

    updateTotal();
    saveTransactions();
    renderList();
}

function saveTransactions() {

    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    localStorage.setItem("transactions", JSON.stringify(transactions));
}
