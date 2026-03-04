document.querySelectorAll(".track").forEach(btn => {
  btn.addEventListener("click", () => {
    const cover = btn.dataset.cover;
    const embed = btn.dataset.embed;

    document.querySelector(".cover").src = cover;
    document.querySelector(".spotify-player").src = embed;
  });
});
