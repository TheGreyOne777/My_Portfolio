// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initVisitorCounter();
    initCodeRain();
});

// ================= VISITOR COUNTER =================
function initVisitorCounter() {
    const counter = document.getElementById("visitCount");
    if (!counter) return;

    // Add timestamp to force CountAPI to count every page load
    const namespace = "thegreyone777-portfolio";
    const key = "homepage";
    const url = `https://api.countapi.xyz/hit/${namespace}/${key}?t=${Date.now()}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            counter.textContent = data.value; // Update visitor count
        })
        .catch(() => {
            counter.textContent = "—"; // fallback if fetch fails
        });
}

// ================= LIVE CODE RAIN =================
function initCodeRain() {
    const canvas = document.getElementById("codeRain");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const fontSize = 16;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]();".split("");

    let columns = 0;
    let drops = [];

    // Resize canvas and reset drops
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(0);
    }

    // Draw the code rain
    function draw() {
        ctx.fillStyle = "rgba(2,6,23,0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0fdf9f";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    resize();
    setInterval(draw, 35);
    window.addEventListener("resize", resize);
}
