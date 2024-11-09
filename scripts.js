// scripts.js

// Cargar los videos del "database.js" al carrusel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");

  videoDatabase.forEach(video => {
    const img = document.createElement("img");
    img.src = video.thumbnail;
    img.alt = "Video thumbnail";
    img.addEventListener("click", () => loadCarouselVideo(video.videoUrl));
    carousel.appendChild(img);
  });
});

// Función para cargar un video desde la URL ingresada manualmente
function loadVideo() {
  const videoUrl = document.getElementById("videoUrl").value;
  const videoContainer = document.getElementById("videoContainer");

  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = videoUrl.split("v=")[1] || videoUrl.split("/").pop();
    videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
  } else {
    videoContainer.innerHTML = `<video controls><source src="${videoUrl}" type="video/mp4"></video>`;
  }
}

// Función para cargar el video desde el carrusel
function loadCarouselVideo(videoUrl) {
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
    }
