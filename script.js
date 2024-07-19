document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const target = document.getElementById("target");
    const scoreElement = document.getElementById("score");
    const timeElement = document.getElementById("time");
    let score = 0;
    let time = 10;
    let gameInterval;
    let timerInterval;

    startButton.addEventListener("click", () => {
        score = 0;
        time = 10;
        scoreElement.textContent = score;
        timeElement.textContent = time;
        startButton.style.display = "none";
        target.style.display = "block";
        moveTarget();
        gameInterval = setInterval(moveTarget, 1000); // เปลี่ยนตำแหน่งเป้าหมายทุกๆ 1 วินาที
        timerInterval = setInterval(updateTimer, 1000); // อัปเดตเวลาแต่ละวินาที
    });

    target.addEventListener("click", () => {
        score += 1;
        scoreElement.textContent = score;
        moveTarget();
    });

    function moveTarget() {
        const containerWidth = document.querySelector('.game-container').clientWidth;
        const containerHeight = document.querySelector('.game-container').clientHeight;
        const targetSize = 50; // ขนาดของเป้าหมาย
        const maxX = containerWidth - targetSize;
        const maxY = containerHeight - targetSize;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
    }

    function updateTimer() {
        time -= 1;
        timeElement.textContent = time;
        if (time <= 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            target.style.display = "none";
            startButton.style.display = "block";
            alert(`Game over! Your score is ${score}`);
        }
    }
});