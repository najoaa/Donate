let accountBalance = 10000;

// Select all the donation buttons
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

    accountBalance -= donationAmount;
    document.querySelector("#balance-display").textContent = `${accountBalance.toFixed(2)} Taka`;

    // Update the current donation amount
    const currentDonation = parseFloat(donationAmountSpan.textContent) || 0;
    donationAmountSpan.textContent = `${currentDonation + donationAmount} BDT`;

    //  modal 
    const modal = document.getElementById('my_modal_3');
    modal.classList.remove('hidden');

  });
});

// Function to add donation history
function addToHistory(donationAmount, causeTitle) {
  const historySection = document.getElementById('history-section');
  const currentDateTime = new Date().toLocaleString();

  // Create a new history entry
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
    document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
  });
});

// Toggle between donation and history sections
document.addEventListener("DOMContentLoaded", function() {
  const donationBtn = document.getElementById("donationBtn");
  const historyBtn = document.querySelector(".btn-md:nth-child(2)"); // History button
  const historySection = document.getElementById("history-section");
  const cardSection = document.querySelector("section");

  // Initial visibility setup
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
    
    // Example History Data (this part will be replaced with actual history in your app)
    if (historySection.innerHTML.trim() === '') {
      historySection.innerHTML = '<p>No donations made yet!</p>';
    }
  });
  historyBtn.addEventListener("click", () => {
    historySection.classList.remove("hidden");
    cardSection.classList.add("hidden");
    historyBtn.classList.add("bg-[#B4F461]");
    donationBtn.classList.remove("bg-[#B4F461]");
  
    // Check if history exists
    if (historySection.innerHTML.trim() === '') {
      historySection.innerHTML = '<p>No donations made yet!</p>';
    }
  });
  
});
