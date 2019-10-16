let player = new Audio()
let playing = false
let songNumber = 1
let isPlaying

player.src = $(".play[songNumber="+songNumber+"]").attr('link')
$(".playlist-window:nth-child(" + songNumber + ")").css({ background: "rgba(0,0,0,0.7)" });

  $('button').on('click', playMusic)
  $('.fas.fa-play-circle').on('click', toggleMusic)
  $('.fas.fa-pause-circle').on('click', toggleMusic)
  $('.fas.fa-backward').on('click', previousSong)

function playMusic() {
  $(".playlist-window:nth-child(" + songNumber + ")").css({ background: "rgba(0,0,0,0.8)" });
  songNumber = $(this).attr('songNumber')
  if (playing == true && isPlaying == songNumber){
    playing = false    
    //player.pause()
    toggleIcon()
    toggleMusic()
  } else {
    if(songNumber == isPlaying){
      $(".playlist-window:nth-child(" + songNumber + ")").css({ background: "rgba(0,0,0,0.7)" });
      playing = true
      //player.play()
      toggleIcon()
      toggleMusic()
    } else {
        isPlaying = songNumber
        $(".playlist-window:nth-child(" + songNumber + ")").css({ background: "rgba(0,0,0,0.7)" });
        player.src = $("button[songNumber="+songNumber+"]").attr('link')
        playing = true
        player.play()
        toggleIcon()
     
   $('#cover').attr('src',$(this).closest('.playlist-window').find('img').attr('src'))
    }
  }
}
function toggleIcon(){
  if($('.play-button>i').attr('class') == "fas fa-play-circle" || playing == true){ 
    $('.play-button>i').removeClass("fas fa-play-circle")
    $('.play-button>i').addClass("fas fa-pause-circle")
  } else if($('.play-button>i').attr('class') == "fas fa-pause-circle" || playing == false){
      $('.play-button>i').removeClass("fas fa-pause-circle")
      $('.play-button>i').addClass("fas fa-play-circle")
  }
}
function toggleMusic(){
  if(playing){
    playing = false;
    toggleIcon()
    player.pause()
    } else{
    playing = true;
    toggleIcon()
    player.play()
  }
}
function previousSong(){
  player.currentTime = 0
  if(player.paused){} else{
  player.play()} 
}
