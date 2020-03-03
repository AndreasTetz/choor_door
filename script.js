let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById("start");
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = door => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClosed = door => {
    if (door.src === closedDoorPath) {
        return true;
    } else {
        return false;
    }
};

const playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    } else if (isBot(door)) {
        gameOver();
    };
};
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;

    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;

    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;

    };
};

doorImage1.onclick = () => {
    if (isClosed(doorImage1) && currentlyPlaying === true) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};
doorImage2.onclick = () => {
    if (isClosed(doorImage2) && currentlyPlaying === true) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};
doorImage3.onclick = () => {
    if (isClosed(doorImage3) && currentlyPlaying === true) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    };
};

startButton.onclick = () => {
    startRound();
};

startRound = () => {
    if (currentlyPlaying === false) {
        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        numClosedDoors = 3;
        startButton.innerHTML = "Good luck!";
        currentlyPlaying = true;
        randomChoreDoorGenerator();
    };
};

gameOver = (status) => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
};

randomChoreDoorGenerator();