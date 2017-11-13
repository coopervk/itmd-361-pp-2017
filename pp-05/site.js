function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

// Replace the mp3 player native to the browser with a button, doorbell-button
$("#doorbell-player").replaceWith('<button id="doorbell-button">Play a doorbell tune~</audio>');

// When doorbell-button is clicked, ring the doorbell
$("#doorbell-button").click(function() {
  ringDoorbell();
});

// 100 corresponds to d button, https://www.w3.org/2002/09/tests/keys-cancel2.html
$(document).keypress(function(key) {
  if(key.which === 100) {
    ringDoorbell();
  }
});
