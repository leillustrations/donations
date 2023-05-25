document.getElementById("calculator-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var annualIncome = parseFloat(document.getElementById("annual-income").value);
  var percentageDonation = parseFloat(document.getElementById("percentage-donation").value);
  var workingYears = parseFloat(document.getElementById("working-years").value);

  var totalDonation = (annualIncome * percentageDonation / 100) * workingYears;
  var livesSaved = Math.floor(totalDonation / 4000); // Assuming $4,000 saves one life

  document.getElementById("result").textContent = "Number of Lives Saved: " + livesSaved;
});
