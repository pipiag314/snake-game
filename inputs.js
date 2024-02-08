let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}


export function getInputDirection() {
    document.addEventListener("keydown", (event) => {
        switch(event.key) {
            case "ArrowLeft": 
                if(lastInputDirection.x !== 0) break;
                inputDirection.x = -1
                inputDirection.y = 0
                break;
            case "ArrowRight": 
                if(lastInputDirection.x !== 0) break;
                inputDirection.x = 1
                inputDirection.y = 0
                break;
            case "ArrowUp": 
                if(lastInputDirection.y !== 0) break;
                inputDirection.x = 0
                inputDirection.y = -1
                break;
            case "ArrowDown": 
                if(lastInputDirection.y !== 0) break;
                inputDirection.x = 0
                inputDirection.y = 1
                break;
        }
    })

    lastInputDirection = inputDirection;

    return inputDirection;
}