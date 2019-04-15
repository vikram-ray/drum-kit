for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var pressedButton = this.innerHTML;
    sound(pressedButton);
    buttonFlash(pressedButton);
  });
}

document.addEventListener("keypress", function() {
  sound(event.key);
  buttonFlash(event.key);
})



function sound(pressedButton) {
  switch (pressedButton) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;


    default:
      console.log(this);
  }
}

function buttonFlash(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
