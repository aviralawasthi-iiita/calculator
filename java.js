
function appendValue(value) {
  document.getElementById("display").value += value;
}


function clearDisplay() {
  document.getElementById("display").value = '';
}


function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}


function calculateResult() {
  try {
    const display = document.getElementById("display");
    const expression = display.value;
    const result = eval(expression);

    const historyList = document.getElementById("history-list");
    const historyItem = document.createElement("li");
    historyItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(historyItem);

    display.value = result;
  } catch (error) {
    alert('Invalid Expression');
    clearDisplay();
  }
}

function clearHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = '';
}
