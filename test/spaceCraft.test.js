const  Position = require("../src/main");
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