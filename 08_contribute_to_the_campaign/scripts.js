let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;
  

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("thankYouMessage").innerText = message;
}
document.getElementById("giveButton").onclick = giveTenDollars

function Refunddollars() {
  totalDonations = totalDonations - 10;
  
  
  document.getElementById("totalDisplay").innerText = "Total refuse: $" - totalDonations;


  let message = "Ok... here you go. It's your money";

  if (totalDonations <= 0) {
    message = "You don't donate us????";
  } else if (totalDonations < -10) {
    message = "Why you take money from us!!??";
  }

  document.getElementById("T^T").innerText = message;
}
document.getElementById2("RefundButton").onclick = giveTenDollars

