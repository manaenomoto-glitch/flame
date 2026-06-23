function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
let message 
if (name == ''){
message  = "Please enter both"
} else if (region == ''){
  message = 'srly both'
} else {
  message == `${name}! Welcome for joining the party!! You from ${region} \nThanks so much!! `
}


  document.getElementById("output").innerText = message;
  
}

document.getElementById("signupButton").onclick = showSignupMessage
