document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra nếu phần tử nằm trong viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Thêm hiệu ứng khi cuộn
  function handleScroll() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Toggle melody hiển thị
  document.querySelector("#rectangle").addEventListener("click", function () {
    const melodies = document.querySelectorAll(".melody, .melody-1");
    melodies.forEach((melody) => {
      melody.classList.toggle("visible");
    });
  });

  // Speaker âm thanh
  const speaker = document.querySelector(".speaker");
  const audioPlayer = document.getElementById("audio-player");
  speaker.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      speaker.classList.add("playing");
    } else {
      audioPlayer.pause();
      speaker.classList.remove("playing");
    }
  });

  // Hiển thị notes khi click rectangle
  document.getElementById("rectangle").addEventListener("click", function () {
    const notes = document.getElementById("notes");
    notes.classList.toggle("show");
  });

  // Hiệu ứng xuất hiện hình ảnh cô gái
  const girlImage = document.querySelector(".girl");
  function checkIfInView() {
    const rect = girlImage.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      girlImage.classList.add("slide-in-blurred-top");
    }
  }
  window.addEventListener("scroll", checkIfInView);
  checkIfInView();

  // Thay đổi hình ảnh khi click
  const chaosImage = document.querySelector(".chaos-2");
  const originalSrc = chaosImage.src;
  const newSrc = "img/crab.png";
  chaosImage.addEventListener("click", () => {
    chaosImage.src = chaosImage.src === originalSrc ? newSrc : originalSrc;
  });
});
