const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let snake = [{ x: 200, y: 200 }];
let apple = { x: 300, y: 300 };
let direction = "RIGHT";

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, 20, 20);

    ctx.fillStyle = "green";
    snake.forEach((segment) => ctx.fillRect(segment.x, segment.y, 20, 20));

    let head = { ...snake[0] };
    if (direction === "UP") head.y -= 20;
    if (direction === "DOWN") head.y += 20;
    if (direction === "LEFT") head.x -= 20;
    if (direction === "RIGHT") head.x += 20;

    snake.unshift(head);
    if (head.x === apple.x && head.y === apple.y) {
        apple = {
            x: Math.floor(Math.random() * 30) * 20,
            y: Math.floor(Math.random() * 30) * 20,
        };
    } else {
        snake.pop();
    }

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        alert("Game Over");
        snake = [{ x: 200, y: 200 }];
        direction = "RIGHT";
    }
}

setInterval(gameLoop, 100);