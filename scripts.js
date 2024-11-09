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

  // Configurar el botón de alternar modo color/blanco y negro
  const toggleColorButton = document.getElementById("toggleColorMode");
  toggleColorButton.addEventListener("click", toggleColorMode);
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

// Función para alternar entre color y blanco y negro
function toggleColorMode() {
  document.body.classList.toggle("black-and-white");
  const toggleColorButton = document.getElementById("toggleColorMode");
  if (document.body.classList.contains("black-and-white")) {
    toggleColorButton.textContent = "Color";
  } else {
    toggleColorButton.textContent = "Blanco y Negro";
  }
}
