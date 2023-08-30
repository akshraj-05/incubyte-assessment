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

    moveBackward() {
        switch (this.currentDirection) {
            case Direction.N:
                this.currentPosition.y--;
                break;
            case Direction.S:
                this.currentPosition.y++;
                break;
            case Direction.E:
                this.currentPosition.x--;
                break;
            case Direction.W:
                this.currentPosition.x++;
                break;
            case Direction.Up:
                this.currentPosition.z--;
                break;
            case Direction.Down:
                this.currentPosition.z++;
                break;
            default:
                console.error("Invalid input");
        }
    }

    turnLeft() {
        switch (this.twoDDirection) {
            case Direction.N:
                this.currentDirection = Direction.W;
                this.twoDDirection = Direction.W;
                break;
            case Direction.S:
                this.currentDirection = Direction.E;
                this.twoDDirection = Direction.E;
                break;
            case Direction.E:
                this.currentDirection = Direction.N;
                this.twoDDirection = Direction.N;
                break;
            case Direction.W:
                this.currentDirection = Direction.S;
                this.twoDDirection = Direction.S;
                break;
            default:
                console.error("Invalid input");
        }
    }

    turnRight() {
        switch (this.twoDDirection) {
            case Direction.N:
                this.currentDirection = Direction.E;
                this.twoDDirection = Direction.E;
                break;
            case Direction.S:
                this.currentDirection = Direction.W;
                this.twoDDirection = Direction.W;
                break;
            case Direction.E:
                this.currentDirection = Direction.S;
                this.twoDDirection = Direction.S;
                break;
            case Direction.W:
                this.currentDirection = Direction.N;
                this.twoDDirection = Direction.N;
                break;
            default:
                console.error("Invalid input");
        }
    }


};



module.exports = { Position, Direction, SpaceCraft };