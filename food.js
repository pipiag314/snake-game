import { snakeBody } from "./snake.js";


export const randomXandY = () => Math.floor(Math.random() * 21);

export const foodPlace = {
    x: randomXandY(),
    y: randomXandY(),
}


export function update() {
    if(snakeBody[0].x === foodPlace.x && snakeBody[0].y === foodPlace.y) {
        foodPlace.x = randomXandY()
        foodPlace.y = randomXandY()
    }
}


export function draw(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridRowStart = foodPlace.y
    foodElement.style.gridColumnStart = foodPlace.x
    gameBoard.appendChild(foodElement);
}