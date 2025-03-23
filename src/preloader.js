const play = document.getElementById("play");
const playForm = document.getElementById("playForm");

play.addEventListener("click", () => {
    // Показываем iframe
    playForm.style.display = "block"; // Используем block, чтобы iframe стал видимым
});
