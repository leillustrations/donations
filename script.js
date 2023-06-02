const input = document.querySelector("input");
const log = document.getElementById("values");

function calculateLivesSaved() {
    // Retrieve user inputs
    var earnings = parseFloat(document.getElementById('earnings').value);
    var age = parseInt(document.getElementById('age').value);
    var workingAgeStart = parseInt(document.getElementById('working-age-start').value);
    var workingAgeEnd = parseInt(document.getElementById('working-age-end').value);
    var donationPercentage = parseFloat(document.getElementById('donation-percentage').value);
  
    // Calculate the number of working years
    var workingYears = workingAgeEnd - workingAgeStart;
  
    // Calculate the total donation amount
    var totalDonation = 0;
    for (var year = workingAgeStart; year < workingAgeEnd; year++) {
      // Adjust the donation amount based on inflation (assumed 3% per year)
      var adjustedDonation = earnings * donationPercentage / 100 * Math.pow(1.03, year - workingAgeStart);
  
      totalDonation += adjustedDonation;
    }
  
    // Calculate the number of lives saved based on donation amount
    var livesSaved = Math.floor(totalDonation / 2000); // Assuming $2,000 can save one life
  
    // Display the result
    document.getElementById('working-years').textContent = 'Working Years: ' + workingYears;
    document.getElementById('lifetime-earnings').textContent = 'You are likely to earn $' + lifetimeEarnings + 'over the course of your lifetime';
    document.getElementById('result').textContent = 'Number of Lives Saved: ' + livesSaved;
  }
  
  document.getElementById('calculator-form').addEventListener('input', calculateLivesSaved);
  