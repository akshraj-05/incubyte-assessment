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
module.exports = {Position,Direction};