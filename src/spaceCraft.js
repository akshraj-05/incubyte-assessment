class Position {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const Direction = {
    N: "N",
    S: "S",
    E: "E",
    W: "W",
    Up: "Up",
    Down: "Down"
};

class SpaceCraft {
    constructor(startingPosition, startingDirection) {
        this.currentPosition = startingPosition;
        this.currentDirection = startingDirection;
        this.twoDDirection = startingDirection;
    }
    getCurrentPosition() {
        return this.currentPosition;
    }

    getCurrentDirection() {
        return this.currentDirection;
    }

    
    moveForward() {
        switch (this.currentDirection) {
            case Direction.N:
                this.currentPosition.y++;
                break;
            case Direction.S:
                this.currentPosition.y--;
                break;
            case Direction.E:
                this.currentPosition.x++;
                break;
            case Direction.W:
                this.currentPosition.x--;
                break;
            case Direction.Up:
                this.currentPosition.z++;
                break;
            case Direction.Down:
                this.currentPosition.z--;
                break;
            default:
                console.error("Invalid input");
        }
    }
};



module.exports = { Position, Direction ,SpaceCraft};