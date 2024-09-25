// JavaScript
const donateButton = document.getElementById('donate-btn');
const notificationModal = document.getElementById("notification");
const closeBtn = document.querySelector(".close-btn");

let accountBalance = 10000; // Move account balance to a global scope for persistence

donateButton.addEventListener("click", function() {
  const income = parseFloat(document.getElementById("income").value);

  if (!isNaN(income) && income > 0) {
    // Calculate the new balance after donation
    accountBalance -= income;
    console.table({totalExpense: income, balance: accountBalance});

    // Update the balance on the frontend
    const balanceDisplay = document.querySelector("#balance span");
    balanceDisplay.textContent = `${accountBalance.toFixed(2)} Taka`;}

    // Show the notification modal
const notification = document.getElementById("my_modal_3");
notification.classList.remove("hidden");
  




















// Get the buttons by their IDs
const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.querySelector(".btn:not(#donationBtn)");

// Function to handle the active state
function toggleActive(button1, button2) {
  button1.classList.add("active");
  button1.style.backgroundColor = "#B4F461"; // Change to active color

  button2.classList.remove("active");
  button2.style.backgroundColor = ""; // Reset to default color
}

// Add click event listeners for each button
donationBtn.addEventListener("click", () => {
  toggleActive(donationBtn, historyBtn);
});

historyBtn.addEventListener("click", () => {
  toggleActive(historyBtn, donationBtn);
});



});
