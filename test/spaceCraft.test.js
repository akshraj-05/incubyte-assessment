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

//test for move forward method

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

//test for move backward method


describe('SpaceCraft moveBackward Method', () => {
    it('should move the spacecraft backward when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();
        console.log(SpaceCraft.twoDDirection);

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, -1, 0));
    });

    it('should move the spacecraft backward when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 1, 0));
    });

    it('should move the spacecraft backward when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(-1, 0, 0));
    });

    it('should move the spacecraft backward when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(1, 0, 0));
    });

    it('should move the spacecraft downward when facing Up', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Up;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 0, -1));
    });

    it('should move the spacecraft upward when facing Down', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Down;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 0, 1));
    });

    it('should not change position for an invalid direction', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = 'InvalidDirection';
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.moveBackward();

        expect(spacecraft.getCurrentPosition()).toEqual(startingPosition);
    });
});

//test for turn left method


describe('SpaceCraft turnLeft Method', () => {
    it('should turn the spacecraft left when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft left when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft left when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should turn the spacecraft left when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should turn the spacecraft left when facing Up and twoDDirection is North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;
        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft left when facing Up and twoDDirection is South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft left when facing Up and twoDDirection is East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should turn the spacecraft left when facing Up and twoDDirection is West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should turn the spacecraft left when facing Down and twoDDirection is North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnLeft();
        console.log(spacecraft.twoDDirection);

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft left when facing Down and twoDDirection is South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft left when facing Down and twoDDirection is East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should turn the spacecraft left when facing Down and twoDDirection is West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;
        console.log(spacecraft.twoDDirection);
        spacecraft.turnLeft();


        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should not change direction for an invalid direction', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = 'InvalidDirection';
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnLeft();

        expect(spacecraft.getCurrentDirection()).toBe(startingDirection);
    });
});

//test for turn right method


describe('SpaceCraft turnRight Method', () => {
    it('should turn the spacecraft right when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft right when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft right when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should turn the spacecraft right when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should turn the spacecraft right when facing Up and twoDDirection is North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft right when facing Up and twoDDirection is South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft right when facing Up and twoDDirection is East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should turn the spacecraft right when facing Up and twoDDirection is West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Up;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should turn the spacecraft right when facing Down and twoDDirection is North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.E);
    });

    it('should turn the spacecraft right when facing Down and twoDDirection is South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.W);
    });

    it('should turn the spacecraft right when facing Down and twoDDirection is East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should turn the spacecraft right when facing Down and twoDDirection is West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);
        spacecraft.currentDirection = Direction.Down;

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });

    it('should not change direction for an invalid direction', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = 'InvalidDirection';
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnRight();

        expect(spacecraft.getCurrentDirection()).toBe(startingDirection);
    });
});

//test for turn Up method


describe('SpaceCraft turnUp Method', () => {
    it('should turn the spacecraft upwards when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });

    it('should turn the spacecraft upwards when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });

    it('should turn the spacecraft upwards when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });

    it('should turn the spacecraft upwards when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });

    it('should keep the spacecraft direction as Up when already facing Up', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Up;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });
    it('should turn the spacecraft upwards when facing Down', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Down;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnUp();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Up);
    });
});

//test for turn down method

describe('SpaceCraft turnDown Method', () => {
    it('should turn the spacecraft downwards when facing North', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });

    it('should turn the spacecraft downwards when facing South', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.S;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });

    it('should turn the spacecraft downwards when facing East', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.E;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });

    it('should turn the spacecraft downwards when facing West', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.W;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });

    it('should keep the spacecraft direction as Down when already facing Down', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Down;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });
    it('should turn the spacecraft downwards when facing Up', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.Up;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.turnDown();

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });
});

//test for process command method

describe('SpaceCraft processCommands Method', () => {
    it('should process forward and backward commands correctly', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.processCommands(['f', 'f', 'b', 'f', 'b']);

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 1, 0));
    });

    it('should process turning commands correctly', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.processCommands(['l', 'r', 'l', 'r', 'l', 'l']);

        expect(spacecraft.getCurrentDirection()).toBe(Direction.S);
    });

    it('should process turning up and down commands correctly', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.processCommands(['u', 'u', 'd']);

        expect(spacecraft.getCurrentDirection()).toBe(Direction.Down);
    });

    it('should ignore invalid commands', () => {
        const startingPosition = new Position(0, 0, 0);
        const startingDirection = Direction.N;
        const spacecraft = new SpaceCraft(startingPosition, startingDirection);

        spacecraft.processCommands(['f', 'x', 'l', 'u', 'invalid', 'r', 'z']);

        expect(spacecraft.getCurrentPosition()).toEqual(new Position(0, 1, 0));
        expect(spacecraft.getCurrentDirection()).toBe(Direction.N);
    });
});
