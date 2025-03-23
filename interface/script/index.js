const playButton = document.getElementById("playBtn");
const playForm = document.getElementById("playForm");
const exit = document.getElementById("exit");


function showForm() {
    playForm.style.display = "block";
}



function close() {
    playForm.style.display = "none";
}





playButton.addEventListener("click", showForm);
exit.addEventListener("click", close);
