// Instructions in the CSS

function checkAge() {
  let age = document.getElementById("ageBox").value;
  let message = "";
  if (age >= 100){
    message = "You’re a legend!";
  } else if(age >= 18){
    message = "You can vote!";
  }else if(age >= 16){
    message = "You can pre-enrol.";
  }else if(age <= 0){
    message = "Time traveller?";
  }else {
    mesage = "Sorry, you can't register yet.";
  }

  document.getElementById("results").innerText = message;
}
document.getElementById("submit").onclick = checkAge
