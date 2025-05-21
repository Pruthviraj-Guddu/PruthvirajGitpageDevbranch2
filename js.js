let noButtonClickCount = 0; // Counter for the "No" button
let noButtonState = 0; // Current state of the "No" button

// Show the initial gif
document.getElementById("gifContainer1").style.display = "block";
document.getElementById("gifContainer2").style.display = "none";
document.getElementById("gifContainer3").style.display = "none";
document.getElementById("gifContainer4").style.display = "none";
document.getElementById("gifContainer5").style.display = "none";
document.getElementById("gifContainer6").style.display = "none";
document.getElementById("gifContainer7").style.display = "none"; //accept
document.getElementById("gifContainer8").style.display = "none";

function restartGif(gifContainerId) {
    const gifContainer = document.getElementById(gifContainerId);
    if (gifContainer) {
      const img = gifContainer.querySelector("img");
      if (img) {
        const src = img.src; // Save the current src
        img.src = ""; // Clear the src to stop the GIF
        img.src = src; // Reset the src to restart the GIF
      }
    }
  }
  
  // Function to restart all GIFs every 10 seconds
  function restartAllGifs() {
    const gifContainers = [
      "gifContainer1",
      "gifContainer2",
      "gifContainer3",
      "gifContainer4",
      "gifContainer5",
      "gifContainer6",
      "gifContainer7",
      "gifContainer8",
    ];
  
    gifContainers.forEach((containerId) => {
      restartGif(containerId);
    });
  }
  
  // Set an interval to restart all GIFs every 10 seconds
  setInterval(restartAllGifs, 2000); // 10000 milliseconds = 10 seconds



document.getElementById("yesBtn").addEventListener("click", function () {
  document.getElementById("gifContainer1").style.display = "none";
  document.getElementById("gifContainer2").style.display = "none";
  document.getElementById("gifContainer3").style.display = "none";
  document.getElementById("gifContainer4").style.display = "none";
  document.getElementById("gifContainer5").style.display = "none";
  document.getElementById("gifContainer6").style.display = "none";
  document.getElementById("gifContainer7").style.display = "block";
  document.getElementById("gifContainer8").style.display = "block";

  // Hide the "Yes" and "No" buttons
  document.getElementById("question").style.display = "none";
  document.getElementById("yesBtn").style.display = "none";
  document.getElementById("noBtn").style.display = "none";

  // Show the specific message
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML =
    "Ahhhhhh, Good, because it's true! 😊";
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // First click on "No"
      console.log(noButtonState);
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "block";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "none";
      document.getElementById("gifContainer5").style.display = "none";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";

      // Modify the "No" button
      document.getElementById("noBtn").innerHTML = "Didn’t you know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("yesBtn").style.fontSize = "40px";
      document.getElementById("yesBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Second click on "No"

      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "block";
      document.getElementById("gifContainer4").style.display = "none";
      document.getElementById("gifContainer5").style.display = "none";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML = "Didn’t you really know?";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "50px";
      document.getElementById("yesBtn").style.padding = "30px 50px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML =
        "Are you sure you didn’t know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "60px";
      document.getElementById("yesBtn").style.padding = "40px 60px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Really, didn’t you know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "70px";
      document.getElementById("yesBtn").style.padding = "50px 70px";

      noButtonState++;
      break;

    case 4:
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "block";
      document.getElementById("gifContainer5").style.display = "none";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML =
        "Are you sure you didn’t know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "80px";
      document.getElementById("yesBtn").style.padding = "60px 80px";

      noButtonState++;
      break;

    case 5:
      document.getElementById("noBtn").innerHTML = "Are you sure, sure?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "90px";
      document.getElementById("yesBtn").style.padding = "70px 90px";

      noButtonState++;
      break;

    case 6:
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "block";
      document.getElementById("gifContainer5").style.display = "none";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML = "Are you sure, sure, sure?";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "100px";
      document.getElementById("yesBtn").style.padding = "80px 100px";

      noButtonState++;
      break;

    case 7:
      document.getElementById("noBtn").innerHTML = "I think you knew";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "120px";
      document.getElementById("yesBtn").style.padding = "90px 120px";

      noButtonState++;
      break;

    case 8:
      document.getElementById("noBtn").innerHTML = "You really don’t know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("yesBtn").style.fontSize = "140px";
      document.getElementById("yesBtn").style.padding = "100px 140px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "none";
      document.getElementById("gifContainer5").style.display = "block";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML =
        "I don’t think so, you do know";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "160px";
      document.getElementById("yesBtn").style.padding = "110px 160px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML = "Ahhh, okay... :(...";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("yesBtn").style.fontSize = "180px";
      document.getElementById("yesBtn").style.padding = "120px 180px";

      noButtonState++;
      break;

    case 11:
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "none";
      document.getElementById("gifContainer5").style.display = "block";
      document.getElementById("gifContainer6").style.display = "none";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML =
        "No, no, no, I’m sure you knew";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("yesBtn").style.fontSize = "200px";
      document.getElementById("yesBtn").style.padding = "130px 200px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML = "I know you knew";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "220px";
      document.getElementById("yesBtn").style.padding = "140px 220px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("gifContainer1").style.display = "none";
      document.getElementById("gifContainer2").style.display = "none";
      document.getElementById("gifContainer3").style.display = "none";
      document.getElementById("gifContainer4").style.display = "none";
      document.getElementById("gifContainer5").style.display = "none";
      document.getElementById("gifContainer6").style.display = "block";
      document.getElementById("gifContainer7").style.display = "none";
      document.getElementById("noBtn").innerHTML = "You knew!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("yesBtn").style.fontSize = "240px";
      document.getElementById("yesBtn").style.padding = "150px 240px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML =
        "NO... You really didn’t know?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "250px";
      document.getElementById("yesBtn").style.padding = "160px 260px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML = "I thought you knew";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Make the "Yes" button grow
      document.getElementById("yesBtn").style.fontSize = "260px";
      document.getElementById("yesBtn").style.padding = "170px 280px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("question").innerHTML = "Agree, you idiot !!!";
      document.getElementById("noBtn").style.display = "none";
      document.getElementById("yesBtn").style.fontSize = "300px";

      // Reset back to state 0
      noButtonState = 0;
      break;

    default:
      // Handle any other cases here
      break;
  }
});
