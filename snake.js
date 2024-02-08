import { getInputDirection } from "./inputs.js";
import { foodPlace } from "./food.js";

export const SNAKE_SPEED = 5; // snakes speed per second

export const snakeBody = [{ x: 10, y: 10 }];

export function update() {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].y += inputDirection.y;
  snakeBody[0].x += inputDirection.x;


  if(snakeBody[0].x === foodPlace.x && snakeBody[0].y === foodPlace.y) {
    snakeBody.push({x: snakeBody[0].x, y: snakeBody[0].y})
  }
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.append(snakeElement);
  });
  snakeBody;
}
