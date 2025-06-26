document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const playerImg = document.getElementById("player-img");
  const playerTitle = document.getElementById("player-title");
  const progressBar = document.getElementById("progress-bar");
  const playPauseBtn = document.getElementById("play-pause-btn");

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const shuffleBtn = document.getElementById("shuffle-btn");
  const repeatBtn = document.getElementById("repeat-btn");

  let playing = true;
  let progress = 0;
  let interval = null;
  let currentSongIndex = 0;
  let repeat = false;
  let shuffle = false;

  const songs = [
    { title: "FEFE", img: "six_5.jpg" },
    { title: "GOOBA", img: "six7.jpg" },
    { title: "TROLLZ", img: "six8.jpg" },
    { title: "KOODA", img: "six_4.jpg" }
  ];

  function loadSong(index) {
    const song = songs[index];
    playerImg.src = song.img;
    playerTitle.textContent = "Reproducciendo: " + song.title;
    progress = 0;
    progressBar.style.width = "0%";
    playing = true;
    playPauseBtn.textContent = "⏸️";
    player.style.display = "flex";
    startProgress();
  }

  function startProgress() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (playing && progress < 100) {
        progress += 0.2;
        progressBar.style.width = `${progress}%`;
      } else if (progress >= 100) {
        clearInterval(interval);
        if (repeat) {
          progress = 0;
          progressBar.style.width = "0%";
          startProgress();
        } else {
          nextSong();
        }
      }
    }, 200);
  }

  function togglePlayPause() {
    playing = !playing;
    playPauseBtn.textContent = playing ? "⏸️" : "▶️";
    if (playing) {
      startProgress();
    } else {
      clearInterval(interval);
    }
  }

  function nextSong() {
    if (shuffle) {
      currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
  }

  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  }

  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);

  shuffleBtn.addEventListener("click", () => {
    shuffle = !shuffle;
    shuffleBtn.style.color = shuffle ? "#1db954" : "white";
  });

  repeatBtn.addEventListener("click", () => {
    repeat = !repeat;
    repeatBtn.style.color = repeat ? "#1db954" : "white";
  });

  // Activar desde las canciones en lista
  const songItems = document.querySelectorAll(".song-item");
  songItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
    });
  });
});
