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

//test for get current position
describe('SpaceCraft getCurrentPosition Method', () => {
    it('should return the current position of the spacecraft', () => {
        const startingPosition = new Position(2, 3, 4);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        const currentPosition = spacecraft.getCurrentPosition();

        expect(currentPosition).toEqual(startingPosition);
    });
});

//test for get current position
describe('SpaceCraft getCurrentDirection Method', () => {
    it('should return the current direction of the spacecraft', () => {
        const startingPosition = new Position(2, 3, 4);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        const currentDirection = spacecraft.getCurrentDirection();

        expect(currentDirection).toBe(startingDirection);
    });
});

//test for move forward methos

describe('SpaceCraft moveForward Method', () => {
    it('should move the spacecraft forward when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 1, 0));
    });

    it('should move the spacecraft forward when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, -1, 0));
    });

    it('should move the spacecraft forward when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(1, 0, 0));
    });

    it('should move the spacecraft forward when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(-1, 0, 0));
    });

    it('should move the spacecraft upward when facing Up', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Up;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 0, 1));
    });

    it('should move the spacecraft downward when facing Down', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Down;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 0, -1));
    });

    it('should not change position for an invalid direction', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = 'InvalidDirection';
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveForward();

        expect(spacecraft.getCurrentPosition()).toEqual(startingPosition);
    });
});