// Contact button
document.getElementById("contactBtn")?.addEventListener("click", () => {
    window.location.href = "mailto:armand199701@gmail.com";
});

// Live coding rain effect
const canvas = document.getElementById("codeRain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]();".split("");
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function draw() {
    ctx.fillStyle = "rgba(2,6,23,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0fdf9f"; // neon green letters
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops.length = columns;
    drops.fill(0);
});
