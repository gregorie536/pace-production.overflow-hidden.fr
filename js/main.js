'use strict'

// LECTEUR AUDIO

let audio = new Audio('audio/C.mp3');

audio.volume = 0.3;

$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-play').hide();
      $('.fa-pause').show();
      $('.music-card').addClass('playing');
  }
});

// LECTEUR AUDIO V2

function loadPlayer() {
  let audioPlayer = new Audio();
  audioPlayer.controls="controls";
  audioPlayer.addEventListener('ended',nextSong,false);
  audioPlayer.addEventListener('error',errorFallback,true);
  document.getElementById("player").appendChild(audioPlayer);
  nextSong();
}
function nextSong() {
  if(urls[next]!=undefined) {
      let audioPlayer = document.getElementsByTagName('audio')[0];
      if(audioPlayer!=undefined) {
          audioPlayer.src=urls[next];
          audioPlayer.load();
          audioPlayer.play();
          next++;
      } else {
          loadPlayer();
      }
  } else {
      alert('the end!');
  }
}
function errorFallback() {
      nextSong();
}
function playPause() {
  let audioPlayer = document.getElementsByTagName('audio')[0];
  if(audioPlayer!=undefined) {
      if (audioPlayer.paused) {
          audioPlayer.play();
      } else {
          audioPlayer.pause();
      }
  } else {
      loadPlayer();
  }
}
function pickSong(num) {
  next = num;
  nextSong();
}

let urls = new Array();
  urls[0] = 'audio/mayra-andrade.mp3';
  urls[1] = 'audio/mahalia.mp3';
  urls[2] = 'audio/lil-nas-x.mp3';
let next = 0;