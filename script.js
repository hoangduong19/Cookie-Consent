const acpBtn = document.getElementById("acp-btn");
const decBtn = document.getElementById("dec-btn");
const main = document.querySelector(".main");
acpBtn.addEventListener("click", () => {
    main.classList.add("active");
}); 
decBtn.addEventListener("click", () => {
    main.classList.add("active");
    setTimeout (() => {main.style.display = "none"}, 500);
}); 