let accountBalance = 10000; 

// Select the donation buttons
const donateButtons = document.querySelectorAll('.donate-btn');
donateButtons.forEach(button => {
  button.addEventListener('click', function () {
    const card = button.closest('.card');

    const donationInput = card.querySelector('input[type="number"]');
    const donationAmountSpan = card.querySelector('.donation-amount');

    const donationAmount = parseFloat(donationInput.value);

    // Validate the donation amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("⚠️ Please enter a valid donation amount.");
      return;
    }

    if (donationAmount > accountBalance) {
      alert("⚠️ Donation amount exceeds available balance!");
      return;
    }

    // Deduct the donation amount from the account balance
    accountBalance -= donationAmount;
    document.querySelector("#balance-display").textContent = `${accountBalance.toFixed(2)} Taka`;

    // Update the current donation amount
    const currentDonation = parseFloat(donationAmountSpan.textContent) || 0;
    donationAmountSpan.textContent = `${(currentDonation + donationAmount).toFixed(2)} `;

    // Show the modal
    const modal = document.getElementById('my_modal_3');
    modal.classList.remove('hidden');

    // Add to history
    const causeTitle = card.querySelector('.card-title').textContent;
    addToHistory(donationAmount, causeTitle);
  });
});
function addToHistory(donationAmount, causeTitle) {
  const historySection = document.getElementById('history-section');
  const currentDateTime = new Date().toLocaleString();
  const historyEntry = document.createElement('p');
  historyEntry.textContent = `${currentDateTime} - Donated ${donationAmount} BDT to "${causeTitle}"`;

  // Show the history section if it was hidden
  if (historySection.classList.contains('hidden')) {
    historySection.classList.remove('hidden');
  }

  // Append the history entry to the history section
  historySection.appendChild(historyEntry);
}

// Function to close the modal
document.querySelectorAll('.modal button').forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const modal = document.getElementById('my_modal_3');
    modal.classList.add('hidden');
  });
});

// Toggle between donation and history 
document.addEventListener("DOMContentLoaded", function() {
  const donationBtn = document.getElementById("donationBtn");
  const historyBtn = document.querySelector(".btn-md:nth-child(2)"); 
  const historySection = document.getElementById("history-section");
  const cardSection = document.querySelector("section");
  historySection.classList.add("hidden");

  // Toggle to show donation section and hide history
  donationBtn.addEventListener("click", () => {
    cardSection.classList.remove("hidden");
    historySection.classList.add("hidden");
    donationBtn.classList.add("bg-[#B4F461]");
    historyBtn.classList.remove("bg-[#B4F461]");
  });

  // Toggle to show history section and hide donation
  historyBtn.addEventListener("click", () => {
    historySection.classList.remove("hidden");
    cardSection.classList.add("hidden");
    historyBtn.classList.add("bg-[#B4F461]");
    donationBtn.classList.remove("bg-[#B4F461]");

  });
});
