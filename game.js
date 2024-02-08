import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js"

let lastAnimationRederTime = 0;

const gameBoardElement = document.querySelector("#game-board");

const gameLoop = (currentTime) => {
  window.requestAnimationFrame(gameLoop);

  const secondsSinceLastRender = (currentTime - lastAnimationRederTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastAnimationRederTime = currentTime;

  update();
  draw();
};

window.requestAnimationFrame(gameLoop);

function update() {
  updateSnake();

  updateFood();
}

function draw() {
  gameBoardElement.innerHTML = "";
  drawSnake(gameBoardElement);

  drawFood(gameBoardElement);
}
