let mirrorInput = document.getElementById("mirror");
let input = document.getElementById("input");

input.addEventListener('keyup', (ev) => {
    mirrorInput.innerText = ev.target.value;
});