function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

//Replace the mp3 player native to the browser with a button, doorbell-button
$("#doorbell-player").replaceWith('<button id="doorbell-button">Play a doorbell tune~</audio>');
