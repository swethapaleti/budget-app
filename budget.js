let budamout = document.getElementById("budgetAmount");
let expamout = document.getElementById("totalExpensesAmount");
let balance = document.getElementById("balanceAmount");
let buderrmsg = document.getElementById("budgetInputErrMsg");
let expenseerrmsg = document.getElementById("expenseTitleInputErrMsg");
let expenseamounerrmsg = document.getElementById("expenseAmountInputErrMsg");
let budinput = document.getElementById("budgetInput");
let expensetitleinput = document.getElementById("expenseTitleInput");
let expenseamountinput = document.getElementById("expenseAmountInput");
let setbudbtn = document.getElementById("setBudgetBtn");
let expensebtn = document.getElementById("addExpenseBtn");
let expensehistory = document.getElementById("expensesHistory");
let counter = 1;
setBudgetBtn.addEventListener("click", function() {
    let moneyUpdate = budinput.value;
    if (moneyUpdate === "") {
        buderrmsg.textContent = "Required";
    } else {
        budamout.textContent = moneyUpdate;
        balance.textContent = parseInt(budamout.textContent) - parseInt(expamout.textContent);
        budinput.value = "";
        buderrmsg.textContent = "";
    }
});

function createExpense() {
    let li = document.createElement("li");
    li.id = "expense" + counter;
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("d-flex", "flex-row", "justify-content-between");
    let title = document.createElement("p");
    title.textContent = expensetitleinput.value;
    divcontainer.appendChild(title);
    let spent = document.createElement("p");
    spent.textContent = expenseamountinput.value;
    divcontainer.appendChild(spent);
    let deleteicon = document.createElement("div");

    divcontainer.appendChild(deleteicon);
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.addEventListener("click", function() {
        let s = parseInt(spent.textContent);
        expensehistory.removeChild(li);
        expamout.textContent = parseInt(expamout.textContent) - s;
        balance.textContent = parseInt(budamout.textContent) - parseInt(expamout.textContent);
    });
    deleteicon.appendChild(deleteIcon);
    li.appendChild(divcontainer);
    expensehistory.appendChild(li);
    counter += 1;
}
expensetitleinput.addEventListener("change", function() {
    if (expensetitleinput.value === "") {
        expenseerrmsg.textContent = "Required";
    } else {
        expenseerrmsg.textContent = "";

    }
});
expensebtn.addEventListener("click", function() {
    let money = expensetitleinput.value;
    if (expensetitleinput.value === "") {
        expenseerrmsg.textContent = "Required";
    }
    if (expenseamountinput.value === "") {
        expenseamounerrmsg.textContent = "Required";

    }
    if (expensetitleinput.value !== "" && expenseamountinput.value !== "") {
        createExpense();
        expamout.textContent = parseInt(expamout.textContent) + parseInt(expenseamountinput.value);
        balance.textContent = parseInt(budamout.textContent) - parseInt(expamout.textContent);
        expensetitleinput.value = "";
        expenseamountinput.value = "";
        expenseerrmsg.textContent = "";
    }
});