const  {Position,Direction,SpaceCraft} = require("../src/spaceCraft");

//test for Position class
describe("Position", () => {
    it("should create a position with the specified coordinates", () => {
        const x = 5;
        const y = 1;
        const z = 1;

        const position = new Position(x, y, z);

        expect(position.x).toBe(x);
        expect(position.y).toBe(y);
        expect(position.z).toBe(z);
    });

    it("should have default coordinates if not specified", () => {
        const position = new Position();

        expect(position.x).toBe(0);
        expect(position.y).toBe(0);
        expect(position.z).toBe(0);
    });
});

//test for DIrection Object
describe("Direction ", () => {
    it("should have valid direction values", () => {
        expect(Direction.N).toBe("N");
        expect(Direction.S).toBe("S");
        expect(Direction.E).toBe("E");
        expect(Direction.W).toBe("W");
        expect(Direction.Up).toBe("Up");
        expect(Direction.Down).toBe("Down");
    });
});

//test for SpaceCraft class constructor
describe('SpaceCraft Constructor', () => {
    it('should initialize with the provided starting position and direction', () => {
        const startingPosition = new Position(2, 3, 4);
        const startingDirection = Direction.S;

        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        expect(spacecraft.currentPosition).toEqual(startingPosition);
        expect(spacecraft.currentDirection).toBe(startingDirection);
        expect(spacecraft.twoDDirection).toBe(startingDirection);
    });
});
