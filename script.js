document.addEventListener("DOMContentLoaded", () => {
    initVisitorCounter();
    initCodeRain();
});

function initVisitorCounter() {
    const counter = document.getElementById("visitCount");
    if (!counter) return;

    fetch("https://api.countapi.xyz/hit/thegreyone777-portfolio/homepage")
        .then(res => res.json())
        .then(data => counter.textContent = data.value)
        .catch(() => counter.textContent = "—");
}

function initCodeRain() {
    const canvas = document.getElementById("codeRain");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const fontSize = 16;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}".split("");

    let columns = 0;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(0);
    }

    function draw() {
        ctx.fillStyle = "rgba(2,6,23,0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0fdf9f";
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);
            drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
        });
    }

    resize();
    setInterval(draw, 35);
    window.addEventListener("resize", resize);
}
